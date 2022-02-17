"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Length = __importStar(require("./length"));
const Mass = __importStar(require("./mass"));
const Capacity = __importStar(require("./capacity"));
const Area = __importStar(require("./area"));
const Volume = __importStar(require("./volume"));
console.log('50 centímetros em metros são:', Length.convert(50, 'cm', 'm'), 'metros.');
console.log('100 kilogramas em miligramas são:', Mass.convert(100, 'kg', 'mg'), 'miligramas.');
console.log('14 litros em mililitros são:', Capacity.convert(14, 'l', 'ml'), 'mililitros.');
console.log('1000 metros quadrados em kilometros quadrados são:', Area.convert(1000, 'm2', 'km2'), 'km2.');
console.log('1 metro cúbico em decímetros cúbicos são:', Volume.convert(1, 'm3', 'dm3'), 'dm3.');
