export interface Product {
    brand: string;
    model: string;
    description: string;
    price: number;
    discount: number;
    discountedPrice: number;
    thumbnails: string[]; 
    images: string[]; 
}