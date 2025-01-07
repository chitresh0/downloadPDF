// Load necessary packages 
const express = require("express"); 
var puppeteer = require('./puppeteer.js');
  
// express router  
const router = express.Router(); 
  
// respond with index.html when a GET request is made to the homepage 
router.get("/", (req, res) => { 
    res.sendFile(__dirname + "/views/index.html"); 
}); 
  
// route for handling PDF request 
router.get("/downloadPDF", async (req, res) => {

    console.log('router : starting pdf creation');
    // puppeteer.createPDF();
  
    // res.download('pdfPuppeteer.pdf');
    // await puppeteer.createPDF().then(pdf => {
    //     console.log('pdf created : ', pdf);
    //     res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
    //     res.send(pdf)
    // })

    const pdf = await puppeteer.createPDF();
    console.log('router : pdf created : ', pdf);
    res.contentType("application/pdf");
    res.send(pdf);
    // res.download("./outputAAAA.pdf"); 

}); 
  
// export router middleware and use it in app.js 
module.exports = router;