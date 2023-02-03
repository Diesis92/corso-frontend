function getData() {
    // creo un oggetto (inizialmente non contiene nulla)
    var data = {}
    data.name = document.getElementById("name")
    data.surname = document.getElementById("surname")
    data.email = document.getElementById("email")
    data.pwd = document.getElementById("password")
    data.confimation = document.getElementById("confirm")
    data.rating = document.getElementById("rate")
    data.accept = document.getElementById("privacy")
    return data
}

var form = document.getElementsByTagName("form")[0]

function showError(message) {
    var errors = document.getElementsByClassName("validation-summary")[0]
    if (errors.classList.contains("hidden")) {
        errors.classList.remove("hidden")
    }
    var ul = document.getElementsByTagName("ul")[0]
    var li = document.createElement("li")
    li.innerText = message
    ul.appendChild(li)
}

function showNameError(item) {
    console.log(item.validity)
    console.log(item.validity.valueMissing)
    if (item.validity.valueMissing) {
        showError("Il campo 'Nome' è obbligatorio")
    }
    if (item.validity.tooShort) {
        showError("Il campo 'Nome' deve avere almeno 2 caratteri")
    }
}

function showSurnameError(item) {
    if (item.validity.tooShort) {
        showError("Il campo 'Cognome' deve contenere almeno 2 caratteri")
    }
}

function checkPassword(pwd, conf) {
    if (pwd.validity.valueMissing) {
        showError("Il campo 'Password' è obbligatorio")
    }
    if (conf.validity.valueMissing) {
        showError("Il campo 'Conferma Password' è obbligatorio")
    }
    if (pwd.value) {
        var re = /([a-zA-Z]*[$\.;]+[0-9]+)+/
        if (!pwd.value.match(re)) {
            pwd.validity.valid.customError = true
            showError("La complessità della password non è conforme")
        }
        if (conf.value && pwd.value != conf.value) {
            pwd.validity.valid.customError = true
            showError("I campi password non coincidono")
        }
    }
}


form.addEventListener("submit",
    event => {
        var data = getData()
        console.log(data)

        // nascondo gli errori
        document.getElementsByClassName("validation-summary")[0].classList.add("hidden")
        // elimino gli errori precedenti
        document.getElementsByTagName("ul")[0].innerHTML = ""

        // validity è proprietà di tutti i campi del form
        // è un oggetto complesso con propri attributi:
        //    valid: è un attributo booleano che indica se il contenuto di un campo è valido
        if (!data.name.validity.valid) {
            showNameError(data.name)
        }
        if (!data.surname.validity.valid) {
            showSurnameError(data.surname)
        }
        checkPassword(data.pwd, data.confimation)
        // impedisce l'invio effettivo dei dati (perché non esiste un server che li gestisca)
        // annulla l'operazione di submit
        event.preventDefault()
    })