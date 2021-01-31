import { DAdministrator } from "./class/DAdministrator";
import { DArticle } from "./class/DArticle";
import { DCategory } from "./class/DCategory";
import { DClient } from "./class/DClient";
import { IDAdministrator } from "./interfaces/IDAdministrator";
import { IDArticle } from "./interfaces/IDArticle";
import { IDCategory } from "./interfaces/IDCategory";
import { IDClient } from "./interfaces/IDClient";

export class FactoryData {
    public static getDCategory(): IDCategory {
        return (DCategory.getInstance());
    }
    public static getDArticle(): IDArticle {
        return (DArticle.getInstance());
    }
    public static getDClient(): IDClient {
        return (DClient.getInstance());
    }
    public static getDAdmin(): IDAdministrator {
        return (DAdministrator.getInstance());
    }
    // public static getDExternalCampaign(): IDExternalCampaign {
    //     return (DExternalCampaign.getInstance());
    // }
    // public static getDOwnCampaign(): IDOwnCampaign {
    //     return (DOwnCampaign.getInstance());
    // }
}
