module.exports.iniciaChat = function (application, req, res, erro) {

    if (erro.length > 0) {         
        res.render("index", {validacao: erro});
        return;
    };
    res.render("chat");
};