import { Category } from "../../shared/entity/Category";

export interface ILCategory {
    getCategory(name: string);
    addCategory(dtcategory: Category);
    updateCategory(dtcategory: Category);
    deleteCategory(dtcategory: Category);
    getCategorysByNameLetter(expression: string) ;
    // getAdvertisers(): Promise<Advertiser[]>;
    // getAdvertiser(rut: number): Promise<Advertiser>;
    // getAdvertisersByNameLetter(expression: string): Promise<Advertiser[]>;
    // addCategory(dtcat: Category);
    // deleteAdvertiser(dtadvertiser: Advertiser);
    // updateAdvertiser(dtadvertiser: Advertiser);
}