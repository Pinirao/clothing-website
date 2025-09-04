export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface CartItem {
    productId: number;
    quantity: number;
}