"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Masker = void 0;
const util_1 = require("./helpers/util");
class MaskUrl {
    constructor(dbString, urlPrefix) {
        this.dbString = dbString;
        this.urlPrefix = urlPrefix;
    }
    generateUrl() {
        const uniqueId = (0, util_1.generateUniqueId)();
        const redirectionUrl = `${this.urlPrefix.trim()}/${uniqueId}`;
        return redirectionUrl;
    }
}
exports.Masker = MaskUrl;
