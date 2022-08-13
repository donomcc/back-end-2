const houses = require("../db.json");

let id = 3;

module.exports = {
  getHouses: (req, res) => res.status(200).send(houses),
  deleteHouse: (req, res) => {
    const { id } = req.params;
    const index = houses.findIndex((element) => {
      return element.id === +id;
    });
    houses.splice(index, 1);
    res.status(200).send(houses);
  },
  createHouse: (req, res) => {
    id++;
    const { address } = req.body;
    const { price } = req.body;
    const { imageURL } = req.body;
    const house = {
      id: id,
      address: address,
      price: +price,
      imageURL: imageURL,
    };
    houses.push(house);
    res.status(200).send(houses);
  },
  updateHouse: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    const index = houses.findIndex((element) => {
      return element.id === +id;
    });
    if (type === "plus") {
      houses[index].price += 10000;
    } else {
      houses[index].price -= 10000;
    }
    res.status(200).send(houses);
  },
};
