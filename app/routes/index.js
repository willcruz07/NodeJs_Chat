module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.index.inicio(application, req, res);
    });
};