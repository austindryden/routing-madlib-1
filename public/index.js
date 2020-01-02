const http = require("http");
const fs = require("fs");
const vip = {
    "oakley": "How wonderfully splendid it is to be in your presence again!",
    "chris": "Oh hey...",
    "milla": "Hello, "
}

console.log("hey heres some wordss");

let server = http.createServer((req, res) =>{
    let url = req.url.slice(1);
    if (url.toLowerCase().endsWith("html")){
        res.writeHead(200, {
            "Content-Type":"text/html"
        })
        url = url.split(".")[0];
        console.log(url);
    } else if (url.toLowerCase().endsWith("css")){
        res.writeHead(200, {
            "Content-Type":"text/css"
        })
        url = url.split(".")[0];
    } else {
        res.writeHead(200, {
        "Content-Type":"text/plain"
        })
    }   
    
    if (Object.keys(vip).includes(url.toLowerCase())){
        res.end(vip[url]);
    }else{
        res.end(`Hello, ${url}!`);
    }
});

console.log("heres later words");

server.listen(3000,() => console.log("I hear you!!"));