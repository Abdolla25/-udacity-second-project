"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user = express_1.default.Router();
user.get('/', function (_req, res) {
    res.json({ message: 'This is get all route' });
});
user.get('/:id', function (_req, res) {
    res.json({ message: 'This is get one route' });
});
user.post('/', function (_req, res) {
    res.json({ message: 'This is create route' });
});
user.put('/:id', function (_req, res) {
    res.json({ message: 'This is update route' });
});
user.delete('/:id', function (_req, res) {
    res.json({ message: 'This is delete route' });
});
exports.default = user;
