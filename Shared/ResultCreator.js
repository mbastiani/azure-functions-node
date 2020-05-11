module.exports.createOkResult = function (context, obj) {
    context.res.headers = { 'Content-Type': 'application/json' };
    context.res.body = {
        data: obj,
        success: true
    };
    context.done();
}

module.exports.createNotFoundResult = function (context) {
    context.res.headers = { 'Content-Type': 'application/json' };
    context.res.body = {
        data: null,
        message: "Item not found",
        success: false
    };
    context.res.status = 404;
    context.done();
}

module.exports.createBadRequestResult = function (context, obj) {
    context.res.headers = { 'Content-Type': 'application/json' };

    if (typeof (obj) === Error || obj.name == "ValidationError")
        context.res.status = 400;
    else
        context.res.status = 500;

    context.res.body = {
        message: obj.message,
        success: false
    };
    context.done();
}