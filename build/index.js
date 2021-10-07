"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _perros = _interopRequireDefault(require("./routes/perros.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT || 4000;
var host = process.env.HOST || "0.0.0.0";
var dbUrl = process.env.MONGO_URL;
app.use(_express["default"].json());
var whitelist = [process.env.FRONTEND_URL];
var corsOptions = {
  origin: function origin(_origin, callback) {
    var existe = whitelist.some(function (dominio) {
      return dominio === _origin;
    });

    if (existe) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  }
};
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use((0, _cors["default"])(corsOptions));

_mongoose["default"].connect(dbUrl).then(function (db) {
  return console.log("db conectado");
})["catch"](function (error) {
  return console.log(error);
});

app.use("/api/perros", _perros["default"]);
app.listen(port, host, function () {
  console.log("Servidor escuchando en ".concat(port));
});