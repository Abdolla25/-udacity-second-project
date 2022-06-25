"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product = express_1.default.Router();
product.get('/', function (_req, res) {
    res.json({ message: 'This is get all route' });
});
product.get('/:id', function (_req, res) {
    res.json({ message: 'This is get one route' });
});
product.post('/', function (_req, res) {
    res.json({ message: 'This is create route' });
});
product.put('/:id', function (_req, res) {
    res.json({ message: 'This is update route' });
});
product.delete('/:id', function (_req, res) {
    res.json({ message: 'This is delete route' });
});
exports.default = product;
