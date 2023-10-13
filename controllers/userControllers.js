const UserModel = require("../models/userModel");

const getUser = async (req, res) => {
  const data = req.body;
  await UserModel.findOne({ phone: data["phone"] })
    .then((result) => {
      if (result.length === 0) {
        return res.status(404).json({ err: "User not found!" });
      } else {
        if (result["password"] !== data["password"]) {
          return res.status(403).json({ err: "Password Mismatch!" });
        } else {
          return res.status(200).json(result);
        }
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err: "Internal server Error!" });
    });
};

const addUser = async (req, res) => {
  const data = req.body;
  await UserModel.insertMany(data)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err: "Internal server Error!" });
    });
};

module.exports.getUser = getUser;
module.exports.addUser = addUser;
