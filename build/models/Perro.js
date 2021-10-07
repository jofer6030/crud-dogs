"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var perroSchema = new _mongoose["default"].Schema({
  raza: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  caracteristicas: {
    type: String
  },
  img: {
    type: String
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("Perro", perroSchema);

exports["default"] = _default;