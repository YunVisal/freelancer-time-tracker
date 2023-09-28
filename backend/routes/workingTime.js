const jwt = require("jsonwebtoken");

const verifyAccessToken = require('../middlewares/verifyAccessToken');
const {WorkingTime} = require('../models');

module.exports = app => {
    app.get("/workingStatus", verifyAccessToken, async (req, res) => {
        const userId = req.user;

        const existingWorkingTime = await WorkingTime.findOne({where: {userId, isWorking: true}});
        if(existingWorkingTime){
            res.status(200).json({message: "Success", data: {isWorking: true, id: existingWorkingTime.dataValues.id, checkInTime: existingWorkingTime.dataValues.clockInTime}});
        }
        else {
            res.status(200).json({message: "Success", data: {isWorking: false, id: -1, checkInTime: null}});
        }
    });

    app.post("/checkin", verifyAccessToken, async (req, res) => {
        const userId = req.user;

        const existingWorkingTime = await WorkingTime.findOne({where: {userId, isWorking: true}});
        if(existingWorkingTime){
            res.status(200).json({message: "You have checkin already", data: existingWorkingTime});
        }
        else {
            const {checkInTime} = req.body;
            const checkInTimeData = await WorkingTime.create({userId, clockInTime: checkInTime});
            res.status(200).json({message: "Checkin Successfully", data: checkInTimeData});
        }
    });

    app.post("/checkout", verifyAccessToken, async (req, res) => {
        const userId = req.user;
        const {id, checkOutTime} = req.body;

        const existingWorkingTime = await WorkingTime.findOne({where: {id, userId, isWorking: true}});
        if(!existingWorkingTime){
            res.status(404).json({message: "No Working Record"});
        }
        else {
            await existingWorkingTime.update({clockOutTime: checkOutTime, isWorking: false});
            await existingWorkingTime.save();
            res.status(200).json({message: "Checkout Successfully"});
        }
    });
}