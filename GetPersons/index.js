require('../Shared/Database');
const ResultCreator = require('../Shared/ResultCreator');
const Person = require('../Models/PersonModel');

module.exports = async function (context, req) {
    try {
        let searchConfig = {};
        const search = req.query.search;
        if (search) {
            searchConfig = {
                $or: [
                    {
                        name: { $regex: new RegExp(`^.*${search}.*`, 'i') }
                    },
                    {
                        email: { $regex: new RegExp(`^.*${search}.*`, 'i') }
                    },
                    {
                        phone: { $regex: new RegExp(`^.*${search}.*`, 'i') }
                    },
                ],
            };
        }

        //MongoDB.connect();
        const persons = await Person.find(searchConfig);

        ResultCreator.createOkResult(context, persons);
    } catch (error) {
        ResultCreator.createBadRequestResult(context, error);
    }
};