"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./helpers/util");
const db_1 = __importDefault(require("./helpers/db"));
class MaskUrl {
    constructor(dbString, urlPrefix) {
        this.dbString = dbString;
        this.urlPrefix = urlPrefix;
        this.connectToDatabase();
    }
    connectToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const database = new db_1.default(this.dbString);
                this.connection = yield database.connect();
                console.log("db connected");
            }
            catch (error) {
                throw error;
            }
        });
    }
    get dbsString() {
        return this.dbString;
    }
    generateUrl() {
        if (this.connection) {
            const uniqueId = (0, util_1.generateUniqueId)();
            const redirectionUrl = `${this.urlPrefix.trim()}/${uniqueId}`;
            const connection = this.connection;
            const UrlModel = connection.model('Url');
            const newUrl = new UrlModel({
                id: uniqueId,
                url: redirectionUrl,
            });
            newUrl.save()
                .then((result) => {
                console.log('Document saved successfully:', result);
            })
                .catch((error) => {
                console.error('Error saving document:', error);
            });
            return redirectionUrl;
        }
        else {
            this.generateUrl();
            throw new Error('Database connection is not established');
        }
    }
}
exports.default = MaskUrl;
module.exports = MaskUrl;
