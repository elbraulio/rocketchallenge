"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var index_1 = __importDefault(require("../index"));
index_1.default.set('port', 8000);
http_1.default.createServer(index_1.default).listen(8000);
