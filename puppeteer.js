const puppeteer = require('puppeteer');
var fs = require('fs');
const Handlebars = require('handlebars');
const express = require('express');
var demoData = require('./demoData.js');


const createPDF = async () => {
  console.log("\n\n**** generate PDF");

  // var content = fs.readFileSync('template.html', 'utf8');
  var content = fs.readFileSync('dropoffEventTemplate.html', 'utf8');

  // var users = [
  //   {
  //       name: 'Ram',
  //       age: 33,
  //       dob: '1/1/1991'
  //   },
  //   {
  //       name: 'Raj',
  //       age: 29,
  //       dob: '1/1/1995'
  //   },
  //   {
  //       name: 'Rohan',
  //       age: 31,
  //       dob: '1/1/1994'
  //   }
  // ];

  // const data = {
  //   heading: 'Dynamic HTML to PDF by Puppeteer!',
  //   users : users,
  // };
  const data = {
    payload: demoData.dropoffEventPayload,
    logo: fs.readFileSync('image.png').toString('base64'),
    message: 'hello from puppeteer',
  }

  console.log('handlebar register helper');

    // Handlebars.registerHelper('ifCond', function(v1, options) {
    //   if(v1 > 30) {
    //     return options.fn(this);
    //   }
    //   return options.inverse(this);
    // });
    Handlebars.registerHelper('compare', function (one, comparator, two) {
        if (eval(one + comparator + two)) {
          return true
        } else {
          return false
        }
      },
    );
    Handlebars.registerHelper('isdefined', function (value) {
      return value !== undefined;
    },
  );

    var template = Handlebars.compile(content);
    const html = template(data);

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    console.log('new page created');

    await page.setContent(html, {waitUntil: 'domcontentloaded'});
    await page.emulateMediaType('screen');    
    // await page.pdf({ path: 'pdfPuppeteer.pdf', format: 'A4' });
    const pdf = await page.pdf({
      format: 'A4',
      margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
      printBackground: true,
    });

    await browser.close();

    console.log('returning PDF!.');
    return pdf;
}

// function getPDF() {
//   return createPDF();
// }

module.exports = {
  createPDF
}