"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSchema = void 0;
const mongoose = require("mongoose");
exports.LocationSchema = new mongoose.Schema({
    date: { type: String, required: true },
    lon: { type: Number, required: true },
    lat: { type: Number, required: true },
    type: { type: String, required: true }
});
//# sourceMappingURL=location.model.js.map