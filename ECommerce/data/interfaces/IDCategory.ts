import { Category } from "../../shared/entity/Category";

export interface IDCategory {
    // getAdvertisers(): Promise<Advertiser[]>;
    // getAdvertiser(rut: number): Promise<Advertiser>;
    // getAdvertisersByNameLetter(expression: string): Promise<Advertiser[]>;
    addCategory(dtcat: Category);
    getCategory(name:string);
    // deleteAdvertiser(dtadvertiser: Advertiser);
    // updateAdvertiser(dtadvertiser: Advertiser);
}