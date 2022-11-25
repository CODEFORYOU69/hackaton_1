const database = require("./database");

const getParksById = (req, res) => {
  const parksById = req.params.id;
  database
    .query("select * from THEME_PARKS_2 where id = ?", [parksById])
    .then(([parks]) => {
      if (parks[0] != null) {
        res.json(parks[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
const getParks = (req, res) => {
  database
    .query("select * from THEME_PARKS_2")
    .then(([parks]) => {
      res.json(parks);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
module.exports = {
  getParks,
  getParksById,
};
