
const {response} = require ('express');


var servicesmock = [
    {name: "Guardia", floor: "pb" , room: "2"},
    {name: "oftalmo", floor: "1", room: "4"}
]

var serviceId = [
    {name: "Guardia", floor: "pb", room: "2"}
]


const servicesGet = (req, res = response) => {
    res.json({
        ok: true,
        services: servicesmock
    });
  }


 const serviceidGet = (req, res = response) => {
    
    const id = req.params.id;
    res.json({
        ok: true,
        services: serviceId
    });
  }

  module.exports = {
      servicesGet,
      serviceidGet
  }