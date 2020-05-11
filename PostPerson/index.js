require('../Shared/Database');
const ResultCreator = require('../Shared/ResultCreator');
const Person = require('../Models/PersonModel');

module.exports = async function (context, req) {
    try {
        const person = new Person(req.body);

        //MongoDB.connect();
        await person.save();

        ResultCreator.createOkResult(context, person);
    } catch (error) {
        ResultResultCreatorExtensions.createBadRequestResult(context, error);
    }
};