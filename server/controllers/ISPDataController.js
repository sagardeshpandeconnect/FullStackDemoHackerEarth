const ISP = require('../models/ISPData')

const getISPData = async (req, res) => {
    try {
      const ispData = await ISP.find();
      res.status(200).json(ispData);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  module.exports = {
    getISPData
  };