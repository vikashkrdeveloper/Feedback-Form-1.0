const database = require('../model/feedbackDataSchema');
const feedbackcontroller = async (req, res) => {
    try {
        const { answer1, answer2, namefeedbackdata, question1, question2 } = req.body;
        if (namefeedbackdata && answer1 && answer2 && question1 && question2) {
            const inserdata = new database({ name: namefeedbackdata, answer1, answer2, question1, question2 });
            await inserdata.save();
            res.status(200).send('Feddback done');

        } else {
            res.status(400).send('All field require');
        }

    } catch (error) {
        console.log("some technical issue" + error);
    }

}
module.exports = feedbackcontroller;