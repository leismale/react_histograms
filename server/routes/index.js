let express = require("express");
let fs = require("fs");
let router = express.Router();

// Get data
router.get("/data", function(req, res, next) {
  fs.readFile(__dirname + "../../data.json", (err, data) => {
    res.status(200).send(data);
  });
});

module.exports = router;
