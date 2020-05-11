require('../Shared/Database');
const ResultCreator = require('../Shared/ResultCreator');
const Person = require('../Models/PersonModel');

module.exports = async function (context, req) {
    try {
        const person = await Person.findById(req.query.id);

        if (!person)
            ResultCreator.createNotFoundResult(context);

        ResultCreator.createOkResult(context, person);
    } catch (error) {
        ResultCreator.createBadRequestResult(context, error);
    }
};