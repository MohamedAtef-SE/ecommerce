import { HttpClient } from "@angular/common/http";
import { Component, computed, EventEmitter, inject, OnDestroy, OnInit, Output, Signal, signal, WritableSignal } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { map, mergeMap, Subscription } from "rxjs";
import { IBrandsResponse, ICategoriesResponse, IFilter, IProduct, IProductsResponse } from "../../../core/interfaces/Models";
import { BrandsService } from "../../../core/services/brands/brands.service";
import { CategoriesService } from "../../../core/services/categories/categories.service";
import { ProductsService } from "../../../core/services/products/products.service";




interface ICategoryLookUps {catName: string, catId: string}
interface IBrandsLookUps {brandName: string, brandId: string}

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})

export class SidebarComponent implements OnInit, OnDestroy{

    _CategoriesServices = inject(CategoriesService);
    _HttpClient: HttpClient = inject(HttpClient);
    _BrandsServices = inject(BrandsService);
    _ProductsService = inject(ProductsService);
    categories: WritableSignal<ICategoryLookUps[]> = signal([]);
    brands: WritableSignal<IBrandsLookUps[]> = signal([]);
    categoriesSubscribe!: Subscription;
    brandsSubscribe!: Subscription;
    filterValue: Signal<IFilter> = computed(()=> this._ProductsService.FilteredBy())
    @Output() sidebarEvent = new EventEmitter<IProduct[]>();


    ngOnInit(): void {
        this.categoriesSubscribe = this._CategoriesServices.getCategories().pipe(
            map((res:ICategoriesResponse)=> {
                let categoriesLookups: ICategoryLookUps[] = []
                for(let cat of res.data){
                    let categoryLookup: ICategoryLookUps = {} as ICategoryLookUps
                    categoryLookup.catId = cat._id;
                    categoryLookup.catName = cat.name;
                    categoriesLookups.push(categoryLookup);
                }
                return categoriesLookups
            })
        ).subscribe({
            next: (res: ICategoryLookUps[])=>{
                this.categories.set(res);
            }
        })

        this.brandsSubscribe = this._BrandsServices.getBrands(1).pipe(
            mergeMap((res:IBrandsResponse)=> {
                let brandsLookups: IBrandsLookUps[] = []
                for(let brand of res.data){
                    let brandLookup: IBrandsLookUps = {} as IBrandsLookUps
                    brandLookup.brandId = brand._id;
                    brandLookup.brandName = brand.name;
                    brandsLookups.push(brandLookup);
                }
                return this._BrandsServices.getBrands(2).pipe(
                    map((res:IBrandsResponse)=> {
                        for(let brand of res.data){
                            let brandLookup: IBrandsLookUps = {} as IBrandsLookUps
                            brandLookup.brandId = brand._id;
                            brandLookup.brandName = brand.name;
                            brandsLookups.push(brandLookup);
                        }
                        return brandsLookups
                    })
                )
            }),
        ).subscribe({
            next: (res: IBrandsLookUps[])=>{
                this.brands.set(res);
            }
        })
    }
    
    getCutomProducts(filter?:IFilter) {
        if( this.filterValue().brand == filter?.brand && this.filterValue().category == filter?.category)
            return;
        this._ProductsService.FilteredBy.update((prevFilter)=>{
            let updatedFilter = prevFilter;
            if(filter?.brand !== undefined) updatedFilter.brand = filter.brand;
            if(filter?.category !== undefined) updatedFilter.category = filter.category;
            if(filter?.sort !== undefined) updatedFilter.sort = filter.sort;
            if(filter?.page !== undefined) updatedFilter.page = filter.page;
            return updatedFilter
        });
        // to re-build all buttons with its style classes.
        this._ProductsService.NumberOfPages.set(1)
        this._ProductsService.getProducts(this.filterValue()).subscribe((res:IProductsResponse)=>{
            this._ProductsService.NumberOfPages.set(res.metadata.numberOfPages);
            this.sidebarEvent.emit(res.data);
            window.scrollTo({top:0})
        });
    } 
    
    ngOnDestroy(): void {
        this.brandsSubscribe.unsubscribe();
        this.categoriesSubscribe.unsubscribe();
    }   
}