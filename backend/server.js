const express = require("express");
const bodyParser = require("body-parser");
const puppeteer = require("puppeteer");
const Names = require("./utils/form-utils/name");
const Email = require("./utils/form-utils/email");
const Headline = require("./utils/form-utils/headline");
const Phone = require("./utils/form-utils/phone");
const Summary = require("./utils/form-utils/summary");
const CoverLetter = require("./utils/form-utils/coverletter");
const LinkedinUrl = require("./utils/form-utils/linkedin-url");
const GithubUrl = require("./utils/form-utils/gitHub-url");
const WebsiteUrl = require("./utils/form-utils/website-url");
const Address = require("./utils/form-utils/address");
const MessageHiringManager = require("./utils/form-utils/message-hm");
require('dotenv').config();
const pluginStealth = require('puppeteer-extra-plugin-stealth') 
const puppeteerExtra = require("puppeteer-extra"); // Import puppeteer-extra

const {executablePath} = require('puppeteer'); 

// Use stealth 
puppeteerExtra.use(pluginStealth());

const app = express();
const port = 3000;

let browserInstance; // Variable to store the browser instance
let pageInstance; // Variable to store the page instance

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
// Navigate to google
app.post("/run-test2", async (req, res) => {
  try {
    browserInstance = await puppeteerExtra.launch({
      headless: false,
      defaultViewport: null,
      executablePath: executablePath()
    });
    pageInstance = await browserInstance.newPage();
    await pageInstance.goto(process.env.INITIALPAGE, {
      waitUntil: "networkidle0",
    });

    res.send("Puppeteer test completed successfully.");
  } catch (error) {
    console.error("An error occurred during the Puppeteer test:", error);
    res.status(500).send("An error occurred during the Puppeteer test.");
  }
});

app.post("/run-test", async (req, res) => {
  try {
    await Names(pageInstance);

    await Email(pageInstance);

    await Headline(pageInstance);

    await Phone(pageInstance);

    await Address(pageInstance);

    // Type summary
    await Summary(pageInstance);

    // Type cover letter
    await CoverLetter(pageInstance);

    await MessageHiringManager(pageInstance)

    await LinkedinUrl(pageInstance); 
    
    await GithubUrl(pageInstance);
    
    await WebsiteUrl(pageInstance); 

    res.send("Puppeteer test completed successfully.");
  } catch (error) {
    console.error("An error occurred during the Puppeteer test:", error);
    res.status(500).send("An error occurred during the Puppeteer test.");
  }
 
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
