(function init(){
    const form = document.forms[0];
    const submit = document.querySelector("[type=submit]");
    const reset = document.querySelector("[type=reset]");

    submit.addEventListener("click",
                            e => {
                                e.preventDefault();
                                deleteMessage();
                                validateForm(form);
                            },
                            false
    );

    reset.addEventListener("click",
                            e => {
                                deleteMessage();
                            },
                            false
    );


    // Prüfen
    function validateForm(el){
        const formFields = Array.from(form.elements);
        // gesamt form prüfen
        if(el.checkValidity()){
            console.log(el);
            showMessage("Sie haben sich erfolgreich registriert!");

        }else{
            console.log("Irgendwas ist falsch!");
            // einzelne Felder prüfen
            formFields.forEach(el => {
                if(el.checkValidity()){
                    // alert("Richtig!");
                }else{
                    // alert("Falsch.");
                    // spezifische Fehlermeldung für den Anwender
                    whichError(el);
                }
            });
        }
    }

    // spezifische Fehlermeldungen
    function whichError(el){
        let validity = el.validity;

        if(validity.valueMissing){
            showMessage(`${el.parentElement.firstElementChild.innerHTML} ausfüllen!`);
        }
        if (validity.tooShort) {
            showMessage(`${el.parentElement.firstElementChild.innerHTML} muss mindestens ${el.minLength} Zeichen haben!`);
        }
        if (validity.tooLong) {
            showMessage(`${el.parentElement.firstElementChild.innerHTML} darf maximal ${el.maxLength} Zeichen haben!`);
        }
        if (validity.patternMismatch) {
            showMessage(`${el.parentElement.firstElementChild.innerHTML} darf nur Buchstaben enthalten!`);
        }
        if (validity.typeMismatch && el.type === 'email') {
            showMessage(`${el.parentElement.firstElementChild.innerHTML} muss eine gültige E-Mail-Adresse sein!`);
        }
    }

    // Rückmeldung an den Anwender
    function showMessage(text){
        let message = document.createElement("p");
        message.appendChild(document.createTextNode(text));
        form.appendChild(message);
    }

    // Textmeldungen löschen
    function deleteMessage(){
        while(form.lastElementChild.nodeName == "P"){
            form.lastElementChild.remove();
        }
    }
})();


