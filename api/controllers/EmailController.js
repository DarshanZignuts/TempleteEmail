/**
 * EmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const { mailfunction } = require('../services/MailerService');

module.exports = {

    create: async function (req, res) {
        try {
            const data = await Email.create({ email: req.body.email });
            console.log('email form api  ::: ', req.body.email);
            mailfunction(req,res);
            res.json({
                msg: "success"
            })
        } catch (err) {
            console.log('Erroe From Create Api Of Email', err);
        }
    },
};

