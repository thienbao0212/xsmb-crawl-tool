const db = require("../models");
const Lottery = db.lotterys;

exports.ipmortCrawData = (data) => {
  // Create a Lottery
  // const lottery = new Lottery({
  //   date: data.date,
  //   type: data.type,
  //   result: data.result
  // });

  // // Save Lottery in the database
  // lottery
  //   .save(lottery)
  //   .then(data => {
  //   })
  //   .catch(err => {
  //   });
  return;
};
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

  Lottery.find({ date: { $gte: from }, date: { $lte: to } })
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
