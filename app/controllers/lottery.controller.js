const db = require("../models");
const Lottery = db.lotterys;

const puppeteer = require("puppeteer");


let dbmb = { prizes: [] };
let dbmn = { prizes: [] };
let dbmt = { prizes: [] };
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
ipmortCrawData = (data) => {
  // Create a Lottery
  const lottery = new Lottery({
    date: data.date,
    type: data.type,
    result: data.result
  });

  // Save Lottery in the database
  lottery
    .save(lottery)
    .then(data => {
    })
    .catch(err => {
    });
  // return;
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
      `https://xoso.com.vn/xsmn-${crawingDate.getDate() >= 10
        ? crawingDate.getDate()
        : "0" + crawingDate.getDate()
      }-${crawingDate.getMonth() + 1 >= 10
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
      ipmortCrawData({
        date: crawingDate.getTime(),
        type: 'xsmn',
        result: JSON.stringify(allPrize)
      })
      // dbmn.get("prizes")
      //   .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
      //   .write();
      dbmn.prizes
        .push({ time: (new Date(crawingDate).getDate()) + '/' + (new Date(crawingDate).getMonth() + 1) + '/' + new Date(crawingDate).getFullYear(), allPrizes: allPrize })

    } catch { }

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
      `https://xoso.com.vn/xsmt-${crawingDate.getDate() >= 10
        ? crawingDate.getDate()
        : "0" + crawingDate.getDate()
      }-${crawingDate.getMonth() + 1 >= 10
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
      ipmortCrawData({
        date: crawingDate.getTime(),
        type: 'xsmt',
        result: JSON.stringify(allPrize)
      })
      // dbmt.get("prizes")
      //   .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
      //   .write();
      dbmt.prizes
        .push({ time: (new Date(crawingDate).getDate()) + '/' + (new Date(crawingDate).getMonth() + 1) + '/' + new Date(crawingDate).getFullYear(), allPrizes: allPrize })

    } catch { }

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
      `https://xoso.com.vn/xsmb-${crawingDate.getDate() >= 10
        ? crawingDate.getDate()
        : "0" + crawingDate.getDate()
      }-${crawingDate.getMonth() + 1 >= 10
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

      ipmortCrawData({
        date: crawingDate.getTime(),
        type: 'xsmb',
        result: JSON.stringify(allPrize)
      })

      // dbmb.get("prizes")
      //   .push({ time: (new Date(crawingDate).getDate()) +'/'+ (new Date(crawingDate).getMonth() + 1) +'/'+ new Date(crawingDate).getFullYear(), allPrizes: allPrize })
      //   .write();
      dbmb.prizes
        .push({ time: (new Date(crawingDate).getDate()) + '/' + (new Date(crawingDate).getMonth() + 1) + '/' + new Date(crawingDate).getFullYear(), allPrizes: allPrize })

    } catch { }

    crawingDate.setDate(crawingDate.getDate() + 1);
    index = index + 1;
  }
};


exports.crawData = (req, res) => {

  runCrawlMN();
  runCrawlMT();
  runCrawlMB();
};
// Delete a Lottery with the specified id in the request
exports.deleteAll = (req, res) => {
  const id = req.params.id;

  Lottery.remove({})
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Lottery with all. Maybe Lottery was not found!`
        });
      } else {
        res.send({
          message: "Lottery was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Lottery with id=" + id
      });
    });
};

// exports.ipmortCrawData = (data) => {
//   // Create a Lottery
//   const lottery = new Lottery({
//     date: data.date,
//     type: data.type,
//     result: data.result
//   });

//   // Save Lottery in the database
//   lottery
//     .save(lottery)
//     .then(data => {
//     })
//     .catch(err => {
//     });
//   return;
// };
// Create and Save a new Lottery
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Lottery
  const lottery = new Lottery({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Lottery in the database
  lottery
    .save(lottery)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Lottery."
      });
    });
};

// Retrieve all Lotterys from the database.
exports.findAll = (req, res) => {
  const from = req.query.from || (new Date('10/01/2021')).getTime();
  const to = req.query.to || (new Date()).getTime();
  
  Lottery.find({ date: { $gte: parseInt(from) }, date: { $lte: parseInt(to) } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lotterys."
      });
    });
};

// Find a single Lottery with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Lottery.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Lottery with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Lottery with id=" + id });
//     });
// };

// // Update a Lottery by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Lottery.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Lottery with id=${id}. Maybe Lottery was not found!`
//         });
//       } else res.send({ message: "Lottery was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Lottery with id=" + id
//       });
//     });
// };

// // Delete a Lottery with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Lottery.findByIdAndRemove(id, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Lottery with id=${id}. Maybe Lottery was not found!`
//         });
//       } else {
//         res.send({
//           message: "Lottery was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Lottery with id=" + id
//       });
//     });
// };

// // Delete all Lotterys from the database.
// exports.deleteAll = (req, res) => {
//   Lottery.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Lotterys were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all lotterys."
//       });
//     });
// };

// // Find all published Lotterys
// exports.findAllPublished = (req, res) => {
//   Lottery.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving lotterys."
//       });
//     });
// };
