const database = require('../model/feedbackDataSchema');
const feedbackcontroller = async (req, res) => {
    try {
        const { namefeedbackdata, feedbackdata } = req.body;
        if (namefeedbackdata && feedbackdata) {
            const inserdata = new database({ name: namefeedbackdata, feedback:feedbackdata});
            await inserdata.save();
            res.status(200).send('Feddback done');

        } else {
            res.status(400).send('All field require');
        }

    } catch (error) {
        console.log("some technical issue"+error);
    }

}
module.exports = feedbackcontroller;