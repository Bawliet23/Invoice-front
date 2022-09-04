export interface User {
 id:number;
 name:string;
 email:string;
 products:Product[];
 invoices:Invoice[];
 jwt:string;
}


export interface Product{
    name:string;
    price:number;
}

export interface Invoice {

}
