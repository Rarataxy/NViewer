const fetch = require("node-fetch");

fetch(`https://nhentai.net/api/gallery/${this.q}`)
.then(response => response.json())
.then(data => {
    console.log(data);
})