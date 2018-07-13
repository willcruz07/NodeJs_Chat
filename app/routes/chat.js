const {check, validationResult} = require('express-validator/check');

module.exports = function (application) {
    application.get('/chat', function (req, res) {
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

    application.post('/chat', 
        [check('apelido', 'Informe o apelido').not().isEmpty()],
        [check('apelido', 'O mínimo de caracteres permitido e 4').isLength({min:4, max:10})],                           
            function (req, res) {                
               
        var erro = validationResult(req);                            
        application.app.controllers.chat.iniciaChat(application, req, res, erro.array());
    });
};