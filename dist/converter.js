"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dollar = void 0;
class currency {
    constructor(_symbol, _code) {
        this._symbol = _symbol;
        this._code = _code;
    }
    get symbol() {
        return this._symbol;
    }
    get code() {
        return this._code;
    }
}
class dollar extends currency {
    constructor() {
        super('$', 'USD');
    }
}
exports.dollar = dollar;
class pound extends currency {
    constructor() {
        super('£', 'GBP');
    }
}
