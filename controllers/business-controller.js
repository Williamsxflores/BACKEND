const Business = require("../models/business");

const saveBusiness = async (req, res, next) => {
  try {
    const busineesData = req.body;

    const business = new Business(busineesData);

    await business.save();

    res.status(201).json(business.toObject());
  } catch (error) {
    return next(error);
  }
};
const getBusiness = async (req, res, next) => {
  try {
    const business = await Business.find().lean().exec();

    res.json(business);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  saveBusiness,
  getBusiness,
};
