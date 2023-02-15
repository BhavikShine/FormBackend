const formModel = require("./form.model");

exports.FormDataService = async (payload, images) => {
  try {
    return await formModel.create({ images, ...payload });
  } catch (err) {
    throw err;
  }
};
