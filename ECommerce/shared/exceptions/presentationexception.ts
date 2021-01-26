
import { CustomException } from "./customexception";
export class PresentationException extends CustomException {

    constructor(mensaje:string) {
        super(mensaje);
    }


}



