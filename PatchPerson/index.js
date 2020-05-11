require('../Shared/Database');
const ResultCreator = require('../Shared/ResultCreator');
const Person = require('../Models/PersonModel');

module.exports = async function (context, req) {
    try {
        await Person.findByIdAndUpdate(req.query.id, req.body, { new: true });

        ResultCreator.createOkResult(context, person);
    } catch (error) {
        ResultCreator.createBadRequestResult(context, error);
    }
};