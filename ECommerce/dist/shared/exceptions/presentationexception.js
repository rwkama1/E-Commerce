"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentationException = void 0;
const customexception_1 = require("./customexception");
class PresentationException extends customexception_1.CustomException {
    constructor(mensaje) {
        super(mensaje);
    }
}
exports.PresentationException = PresentationException;
//# sourceMappingURL=presentationexception.js.map