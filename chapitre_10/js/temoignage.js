document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var temoignage = {
        pseudo: e.target.elements.pseudo.value,
        evaluation: e.target.elements.evaluation.value,
        message: e.target.elements.message.value,
    };
    ajaxPost("http://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function (reponse) {
        var messageElt = document.createElement("p");
        messageElt.textContent = "Témoignage ajouté.";
        document.body.appendChild(messageElt);
    }, true);
});