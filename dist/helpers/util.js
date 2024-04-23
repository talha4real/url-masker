"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueId = void 0;
function generateUniqueId() {
    return Math.random().toString(36).substring(7);
}
exports.generateUniqueId = generateUniqueId;
