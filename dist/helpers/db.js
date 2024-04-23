"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// helpers/db.ts
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor(dbString) {
        this.connection = null;
        this.dbString = dbString;
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.connection = mongoose_1.default.createConnection(this.dbString);
            this.connection.on('connected', () => {
                resolve(this.connection);
            });
            this.connection.on('error', (error) => {
                reject(error);
            });
        });
    }
    disconnect() {
        return new Promise((resolve, reject) => {
            if (!this.connection) {
                reject(new Error('Connection is null'));
                return;
            }
            this.connection.close();
        });
    }
}
exports.default = Database;
