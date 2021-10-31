const TypeOfRole = require("../models/TypeOfRole")

exports.selectAll = async (req, res) =>{
    const roles = await TypeOfRole.query();
    res.json(roles);
}