const puppeteer = require("puppeteer");


const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
// const cors = require("cors");
const fs = require('fs');
const app = express();
const lotteryController = require("./app/controllers/lottery.controller.js");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/lottery.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



// const dbmb = require("./db");
// const dbmn = require("./dbmn");
// const dbmt = require("./dbmt");

let dbmb = {prizes: []};
let dbmn = {prizes: []};
let dbmt = {prizes: []};

const port = 3000;
const arrNum =[
  {
    "num": "00",
    "isDisplay": false
  },
  {
    "num": "01",
    "isDisplay": false
  },
  {
    "num": "02",
    "isDisplay": false
  },
  {
    "num": "03",
    "isDisplay": false
  },
  {
    "num": "04",
    "isDisplay": false
  },
  {
    "num": "05",
    "isDisplay": false
  },
  {
    "num": "06",
    "isDisplay": false
  },
  {
    "num": "07",
    "isDisplay": false
  },
  {
    "num": "08",
    "isDisplay": false
  },
  {
    "num": "09",
    "isDisplay": false
  },
  {
    "num": "10",
    "isDisplay": false
  },
  {
    "num": "11",
    "isDisplay": false
  },
  {
    "num": "12",
    "isDisplay": false
  },
  {
    "num": "13",
    "isDisplay": false
  },
  {
    "num": "14",
    "isDisplay": false
  },
  {
    "num": "15",
    "isDisplay": false
  },
  {
    "num": "16",
    "isDisplay": false
  },
  {
    "num": "17",
    "isDisplay": false
  },
  {
    "num": "18",
    "isDisplay": false
  },
  {
    "num": "19",
    "isDisplay": false
  },
  {
    "num": "20",
    "isDisplay": false
  },
  {
    "num": "21",
    "isDisplay": false
  },
  {
    "num": "22",
    "isDisplay": false
  },
  {
    "num": "23",
    "isDisplay": false
  },
  {
    "num": "24",
    "isDisplay": false
  },
  {
    "num": "25",
    "isDisplay": false
  },
  {
    "num": "26",
    "isDisplay": false
  },
  {
    "num": "27",
    "isDisplay": false
  },
  {
    "num": "28",
    "isDisplay": false
  },
  {
    "num": "29",
    "isDisplay": false
  },
  {
    "num": "30",
    "isDisplay": false
  },
  {
    "num": "31",
    "isDisplay": false
  },
  {
    "num": "32",
    "isDisplay": false
  },
  {
    "num": "33",
    "isDisplay": false
  },
  {
    "num": "34",
    "isDisplay": false
  },
  {
    "num": "35",
    "isDisplay": false
  },
  {
    "num": "36",
    "isDisplay": false
  },
  {
    "num": "37",
    "isDisplay": false
  },
  {
    "num": "38",
    "isDisplay": false
  },
  {
    "num": "39",
    "isDisplay": false
  },
  {
    "num": "40",
    "isDisplay": false
  },
  {
    "num": "41",
    "isDisplay": false
  },
  {
    "num": "42",
    "isDisplay": false
  },
  {
    "num": "43",
    "isDisplay": false
  },
  {
    "num": "44",
    "isDisplay": false
  },
  {
    "num": "45",
    "isDisplay": false
  },
  {
    "num": "46",
    "isDisplay": false
  },
  {
    "num": "47",
    "isDisplay": false
  },
  {
    "num": "48",
    "isDisplay": false
  },
  {
    "num": "49",
    "isDisplay": false
  },
  {
    "num": "50",
    "isDisplay": false
  },
  {
    "num": "51",
    "isDisplay": false
  },
  {
    "num": "52",
    "isDisplay": false
  },
  {
    "num": "53",
    "isDisplay": false
  },
  {
    "num": "54",
    "isDisplay": false
  },
  {
    "num": "55",
    "isDisplay": false
  },
  {
    "num": "56",
    "isDisplay": false
  },
  {
    "num": "57",
    "isDisplay": false
  },
  {
    "num": "58",
    "isDisplay": false
  },
  {
    "num": "59",
    "isDisplay": false
  },
  {
    "num": "60",
    "isDisplay": false
  },
  {
    "num": "61",
    "isDisplay": false
  },
  {
    "num": "62",
    "isDisplay": false
  },
  {
    "num": "63",
    "isDisplay": false
  },
  {
    "num": "64",
    "isDisplay": false
  },
  {
    "num": "65",
    "isDisplay": false
  },
  {
    "num": "66",
    "isDisplay": false
  },
  {
    "num": "67",
    "isDisplay": false
  },
  {
    "num": "68",
    "isDisplay": false
  },
  {
    "num": "69",
    "isDisplay": false
  },
  {
    "num": "70",
    "isDisplay": false
  },
  {
    "num": "71",
    "isDisplay": false
  },
  {
    "num": "72",
    "isDisplay": false
  },
  {
    "num": "73",
    "isDisplay": false
  },
  {
    "num": "74",
    "isDisplay": false
  },
  {
    "num": "75",
    "isDisplay": false
  },
  {
    "num": "76",
    "isDisplay": false
  },
  {
    "num": "77",
    "isDisplay": false
  },
  {
    "num": "78",
    "isDisplay": false
  },
  {
    "num": "79",
    "isDisplay": false
  },
  {
    "num": "80",
    "isDisplay": false
  },
  {
    "num": "81",
    "isDisplay": false
  },
  {
    "num": "82",
    "isDisplay": false
  },
  {
    "num": "83",
    "isDisplay": false
  },
  {
    "num": "84",
    "isDisplay": false
  },
  {
    "num": "85",
    "isDisplay": false
  },
  {
    "num": "86",
    "isDisplay": false
  },
  {
    "num": "87",
    "isDisplay": false
  },
  {
    "num": "88",
    "isDisplay": false
  },
  {
    "num": "89",
    "isDisplay": false
  },
  {
    "num": "90",
    "isDisplay": false
  },
  {
    "num": "91",
    "isDisplay": false
  },
  {
    "num": "92",
    "isDisplay": false
  },
  {
    "num": "93",
    "isDisplay": false
  },
  {
    "num": "94",
    "isDisplay": false
  },
  {
    "num": "95",
    "isDisplay": false
  },
  {
    "num": "96",
    "isDisplay": false
  },
  {
    "num": "97",
    "isDisplay": false
  },
  {
    "num": "98",
    "isDisplay": false
  },
  {
    "num": "99",
    "isDisplay": false
  }
]

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const dateStart = "11/01/2021"; // MM/dd/YYYY
const runCrawlMN = async () => {
  // dbmn.get('prizes').remove().write();
  dbmn.prizes = [];
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: [
        "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"
    ],
});
  
  const page = await browser.newPage();
  let crawingDate = new Date(dateStart);
  let index = 1;
  while (crawingDate <= new Date()) {
    
        
    await page.goto(
      `https://xoso.com.vn/xsmn-${
        crawingDate.getDate() >= 10
          ? crawingDate.getDate()
          : "0" + crawingDate.getDate()
      }-${
        crawingDate.getMonth() + 1 >= 10
          ? crawingDate.getMonth() + 1
          : "0" + (crawingDate.getMonth() + 1)
      }-${crawingDate.getFullYear()}.html`,
      {
        waitUntil: "load",
      }
    );

    try {
     
      const allPrize = await page.evaluate(() => {
        let prize1 = [];
        
        document.querySelectorAll(".xs_prize1").forEach((prize) => {
          let anyString = prize.textContent.trim();
          let anyString2 = anyString.substring(anyString.length - 2);
          prize1 = [...prize1, anyString2];
        });

        return prize1
      });

      if (allPrize.includes("...")) {
        await sleep(60000);
        continue;
      }
      lotteryController.ipmortCrawData({
        date: crawingDate.getTime(),
        type: 'xsmn',
        result: JSON.stringify(allPrize)
      })
      // dbmn.get("prizes")
      //   .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
      //   .write();
      dbmn.prizes
        .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
        
    } catch {}

    crawingDate.setDate(crawingDate.getDate() + 1);
    index = index + 1;
  }
};
const runCrawlMT = async () => {
  // dbmt.get('prizes').remove().write();
  dbmt.prizes = [];
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: [
        "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"
    ],
});
  
  const page = await browser.newPage();
  let crawingDate = new Date(dateStart);
  let index = 1;
  while (crawingDate <= new Date()) {
    
        
    await page.goto(
      `https://xoso.com.vn/xsmt-${
        crawingDate.getDate() >= 10
          ? crawingDate.getDate()
          : "0" + crawingDate.getDate()
      }-${
        crawingDate.getMonth() + 1 >= 10
          ? crawingDate.getMonth() + 1
          : "0" + (crawingDate.getMonth() + 1)
      }-${crawingDate.getFullYear()}.html`,
      {
        waitUntil: "load",
      }
    );

    try {
     
      const allPrize = await page.evaluate(() => {
        let prize1 = [];
        
        document.querySelectorAll(".xs_prize1").forEach((prize) => {
          let anyString = prize.textContent.trim();
          let anyString2 = anyString.substring(anyString.length - 2);
          prize1 = [...prize1, anyString2];
        });

        return prize1
      });

      if (allPrize.includes("...")) {
        await sleep(60000);
        continue;
      }
      lotteryController.ipmortCrawData({
        date: crawingDate.getTime(),
        type: 'xsmt',
        result: JSON.stringify(allPrize)
      })
      // dbmt.get("prizes")
      //   .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
      //   .write();
      dbmt.prizes
        .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
        
    } catch {}

    crawingDate.setDate(crawingDate.getDate() + 1);
    index = index + 1;
  }
};
const runCrawlMB = async () => {
  // dbmb.get('prizes').remove().write();
  dbmb.prizes = [];
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: [
        "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"
    ],
});
  
  const page = await browser.newPage();
  let crawingDate = new Date(dateStart);
  let index = 1;
  while (crawingDate <= new Date()) {
    await page.goto(
      `https://xoso.com.vn/xsmb-${
        crawingDate.getDate() >= 10
          ? crawingDate.getDate()
          : "0" + crawingDate.getDate()
      }-${
        crawingDate.getMonth() + 1 >= 10
          ? crawingDate.getMonth() + 1
          : "0" + (crawingDate.getMonth() + 1)
      }-${crawingDate.getFullYear()}.html`,
      {
        waitUntil: "load",
      }
    );

    try {
     
      const allPrize = await page.evaluate(() => {
        let prize1 = [];
        document.querySelectorAll(".code-DB6").forEach((prize) => {
          prize.remove();
        });
        document.querySelectorAll(".code-DB8").forEach((prize) => {
          prize.remove();
        });

        document.querySelectorAll(".table-result span").forEach((prize) => {
          let anyString = prize.textContent.trim();
          let anyString2 = anyString.substring(anyString.length - 2);
          prize1 = [...prize1, anyString2];
        });

        return prize1
      });

      if (allPrize.includes("...")) {
        await sleep(60000);
        continue;
      }
      
      lotteryController.ipmortCrawData({
        date: crawingDate.getTime(),
        type: 'xsmb',
        result: JSON.stringify(allPrize)
      })

      // dbmb.get("prizes")
      //   .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
      //   .write();
      dbmb.prizes
        .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
        
    } catch {}

    crawingDate.setDate(crawingDate.getDate() + 1);
    index = index + 1;
  }
};

const runCrawlMBB = async () => {
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: true,
  });

  const page = await browser.newPage();
  let crawingDate = new Date("12/22/2021");

  let index = 1;
  while (index < 20) {
    await page.goto(
      `https://xoso.com.vn/xsmb-${
        crawingDate.getDate() >= 10
          ? crawingDate.getDate()
          : "0" + crawingDate.getDate()
      }-${
        crawingDate.getMonth() + 1 >= 10
          ? crawingDate.getMonth() + 1
          : "0" + (crawingDate.getMonth() + 1)
      }-${crawingDate.getFullYear()}.html`,
      {
        waitUntil: "load",
      }
    );

    try {
      const allPrize = await page.evaluate(() => {
        const special = document
          .querySelectorAll("span.special-prize")[0]
          .textContent.trim();

        const prize1 = document
          .querySelectorAll("span.prize1")[0]
          .textContent.trim();

        let prize2 = [];
        document.querySelectorAll("span.prize2").forEach((prize) => {
          prize2 = [...prize2, prize.textContent.trim()];
        });
        let prize3 = [];
        document.querySelectorAll("span.prize3").forEach((prize) => {
          prize3 = [...prize3, prize.textContent.trim()];
        });
        let prize4 = [];
        document.querySelectorAll("span.prize4").forEach((prize) => {
          prize4 = [...prize4, prize.textContent.trim()];
        });
        let prize5 = [];
        document.querySelectorAll("span.prize5").forEach((prize) => {
          prize5 = [...prize5, prize.textContent.trim()];
        });
        let prize6 = [];
        document.querySelectorAll("span.prize6").forEach((prize) => {
          prize6 = [...prize6, prize.textContent.trim()];
        });
        let prize7 = [];
        document.querySelectorAll("span.prize7").forEach((prize) => {
          prize7 = [...prize7, prize.textContent.trim()];
        });

        return {
          special,
          prize1,
          prize2,
          prize3,
          prize4,
          prize5,
          prize6,
          prize7,
        };
      });

      if (allPrize.prize7.includes("...")) {
        await sleep(60000);
        continue;
      }

      db.get("prizes")
        .push({ time: (new Date(crawingDate).getDate() +1) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
        .write();
    } catch {}
    crawingDate = new Date((new Date(crawingDate)).valueOf() + 1000*3600*24)
    // crawingDate.setDate(crawingDate.getDate() + 1);
    index = index + 1;
  }
};

function getAllResultNum() {
  // let rawdatamb = fs.readFileSync('databasemb.json');
  // let rawdatamt = fs.readFileSync('databasemt.json');
  // let rawdatamn = fs.readFileSync('databasemn.json');
  // let datamb = JSON.parse(rawdatamb);
  // let datamn = JSON.parse(rawdatamn);
  // let datamt = JSON.parse(rawdatamt);
  let datamb = dbmb;
  let datamn = dbmn;
  let datamt = dbmt;

  arrData = [];
  datamb.prizes.forEach(element => {
    arrData = [...arrData, ...element.allPrizes]
  });
  datamt.prizes.forEach(element => {
    arrData = [...arrData, ...element.allPrizes]
  });
  datamn.prizes.forEach(element => {
    arrData = [...arrData, ...element.allPrizes]
  });
  return arrData;
}


runCrawlMN();
runCrawlMT();
runCrawlMB();
// app.get('/', (req, res) => {
//   let dataResult = getAllResultNum();
//   for (let index = 0; index < arrNum.length; index++) {
//     result = dataResult.filter(item => item == arrNum[index].num);
//     arrNum[index].isDisplay = result && result.length > 0 ? true : false;
//     arrNum[index].count = result && result.length > 0 ? result.length : 0;
//   }
//   let obj = {
//     display: arrNum.filter(item => !item.isDisplay),
//     all: arrNum
//   }
  
//   res.send(obj);
// })


