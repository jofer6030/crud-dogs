"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _perros = require("../controllers/perros.controller");

var router = (0, _express.Router)(); //Create dog

router.post("/", _perros.createDog); //Get dogs

router.get("/", _perros.getDogs); //Get dog

router.get("/:id", _perros.getDog); //Update dog

router.put("/:id", _perros.updateDog); //Delete dog

router["delete"]("/:id", _perros.deleteDog);
var _default = router;
exports["default"] = _default;