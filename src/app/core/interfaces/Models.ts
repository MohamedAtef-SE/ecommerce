


export interface IRegister {
    name :  string,
    email: string,
    password: string,
    rePassword: string,
    phone: string
}

export interface ILogin{
    email:string,
    password: string
}

export interface IProduct {
    "sold": number,
    "images": string[],
    "subcategory": ISubcategory[], //
    "ratingsQuantity": number, //
    "_id": string, //
    "title": string, //
    "slug": string,
    "description": string,
    "quantity": number,
    "price": number,
    "imageCover": string,
    "category": ICategory,
    "brand": IBrand,
    "ratingsAverage": number,
    "createdAt": string,
    "updatedAt": string,
    "id": string
}

export interface IProductDetailsResponse{
    "data": {
        "sold": number,
        "images": string[],
        "subcategory": ISubcategory[], //
        "ratingsQuantity": number, //
        "_id": string, //
        "title": string, //
        "slug": string,
        "description": string,
        "quantity": number,
        "price": number,
        "imageCover": string,
        "category": ICategory,
        "brand": IBrand,
        "ratingsAverage": number,
        "createdAt": string,
        "updatedAt": string,
        "id": string,
        "priceAfterDiscount": number,
        "availableColors": string[],
        "__v": number,
        "reviews": []
    }
}


export interface ISubcategory{
    "_id": string,
    "name": string,
    "slug": string,
    "category": string
}

export interface ICategory{
    "_id": string,
    "name": string,
    "slug": string,
    "image": string,
    "createdAt"?: string,
    "updatedAt"?: string
}

export interface ICategoriesResponse{
    "results": number,
    "metadata": {
        "currentPage": number,
        "numberOfPages": number,
        "limit": number,
        "nextPage": number
    },
    "data": ICategory[]
}

export interface IBrand {
    "_id": string,
    "name": string,
    "slug": string,
    "image": string,
    "createdAt"?: string,
    "updatedAt"?: string
}

export interface IBrandsResponse{
    "results": number,
    "metadata": {
        "currentPage": number,
        "numberOfPages": number,
        "limit": number,
        "nextPage": number
    },
    "data": IBrand[]
}

export interface ICartItem{
    "count": number,
    "_id": string,
    "product": IProductCartItem,
    "price": number
}

export interface IProductCartItem{
    "subcategory": ISubcategory[],
    "_id": string,
    "title": string,
    "quantity": number,
    "imageCover": string,
    "category": ICategory,
    "brand": IBrand,
    "ratingsAverage": number,
    "id": string
}

export interface ICartResponse{
    "status": string,
    "numOfCartItems": number,
    "cartId": string,
    "data": {
        "_id": string,
        "cartOwner": string,
        "products": ICartItem[],
        "createdAt": string,
        "updatedAt": string,
        "__v": number,
        "totalCartPrice": number
    }
}

export interface IProductsResponse{
    "results": number,
    "metadata": {
        "currentPage": number,
        "numberOfPages": number,
        "limit": number,
        "nextPage": number
    },
    "data": IProduct[]
}

    export interface IUserData{
            "id": string,
            "iat": number,
            "exp": number,
            "name":string,
            "role":string,
         }

         export interface IUserOrder{
            "shippingAddress": {
                "details": string,
                "phone": string,
                "city": string
            },
            "taxPrice":number,
            "shippingPrice": number,
            "totalOrderPrice": number,
            "paymentMethodType": string,
            "isPaid": boolean,
            "isDelivered": boolean,
            "_id": string,
            "user": IUser,
            "cartItems": ICartItem[],
            "createdAt": string,
            "updatedAt": string,
            "id": number,
            "__v": number
        }

        export interface IUser{
            "_id": string,
            "name": string,
            "email": string,
            "phone": string
        }

        export interface IFilter{
            brand?: string,
            category?: string,
            sort?: string,
            page?: number
        }

        export interface ISort{
            sort?: string,
        }

        export interface IWishlistResponse{
            "status": string,
            "message": string,
            "data": string[]
        }

        export interface IWishlistGetResponse{
            "status": string,
            "count": number,
            "data": IProduct[]
        }

        export interface IAddress{
            "_id"?: string,
            "name": string,
            "details": string,
            "phone": string,
            "city": string
        }


        export interface IAddressResponse{
            "results"?: number,
            "status": string,
            "data": IAddress[],
            "message"?:string
        }