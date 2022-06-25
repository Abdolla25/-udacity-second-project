"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order = express_1.default.Router();
order.get('/', function (_req, res) {
    res.json({ message: 'This is get all route' });
});
order.get('/:id', function (_req, res) {
    res.json({ message: 'This is get one route' });
});
order.post('/', function (_req, res) {
    res.json({ message: 'This is create route' });
});
order.put('/:id', function (_req, res) {
    res.json({ message: 'This is update route' });
});
order.delete('/:id', function (_req, res) {
    res.json({ message: 'This is delete route' });
});
exports.default = order;
