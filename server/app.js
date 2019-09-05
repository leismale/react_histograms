let createError = require("http-errors");
let express = require("express");
let path = require("path");
let logger = require("morgan");
let cors = require("cors");

let app = express();

// CORS
let whitelist = ["http://localhost:3000"];
let corsOptions = {
  origin: function(origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Set up logger
app.use(logger("dev"));

// Parse body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
let indexRouter = require("./routes/index");
app.use("/api/", indexRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
