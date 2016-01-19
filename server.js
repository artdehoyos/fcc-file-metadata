var express = require("express");
var multer = require("multer");

var app = express();
var upload = multer();

var port = process.env.PORT || 8080;

app.use(express.static("public"));

app.post("/api", upload.single('file'), function (req, res){
    var file = req.file;
    res.end(file.size.toString());
    console.log(file);
});

app.listen(port, function(){
    console.log("App listening on port " + port);
});