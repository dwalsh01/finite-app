"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (_, res) {
    res.send('Hello World');
});
app.listen('/4001', function () { return console.log("\uD83D\uDCC5 Cron server running! on http://localhost:40001"); });
