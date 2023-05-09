let express = require("express");
let app = express();
const path = require("path")
const ejs = require("ejs")
app.use(express.static(path.join(__dirname, 'static')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(9000, function() {
    console.log("Listening on port 9000");
});