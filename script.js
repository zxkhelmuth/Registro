function mostrarNombre(){
    let Nombre = document.getElementById("campoNombre").value
    let Apellido = document.getElementById("campoApellido").value
    let User = document.getElementById("campoUser").value
    let Email = document.getElementById("campoEmail").value
    let Contraseña = document.getElementById("campoContraseña").value
    let Mensaje = ["Nombre: "+ Nombre + "\n"+ "Apellido: "+ Apellido + "\n" + "User: " + User + "\n" + "Email: " + Email + "\n" + "Contraseña :" + Contraseña]
    alert(Mensaje)
}

function whiteTema(){
    let background = document.querySelector("body")
    let form = document.querySelector("form")
    let buttonWhite = document.getElementById("white")
    let buttonDark = document.getElementById("dark")
    let tema = document.getElementById("tema")
    let btnSession = document.getElementById("btn")
    let span = document.querySelectorAll("span.text")
    let h1 = document.querySelector("h1")

    span.forEach(span => {
        span.style.color = "#fff";
    });

    buttonWhite.style.backgroundColor = "#fff"
    buttonWhite.style.color = "#000"
    form.style.backgroundColor = "#000"
    background.style.backgroundColor = "#fff"
    tema.style.backgroundColor = "#000"
    btnSession.style.backgroundColor = "#fff"
    btnSession.style.color = "#000"
    h1.style.color = "#fff"
}

function darkTema(){
    let background = document.querySelector("body")
    let form = document.querySelector("form")
    let buttonWhite = document.getElementById("white")
    let buttonDark = document.getElementById("dark")
    let tema = document.getElementById("tema")
    let btnSession = document.getElementById("btn")
    let span = document.querySelectorAll("span.text")
    let h1 = document.querySelector("h1")

    span.forEach(span => {
        span.style.color = "#000";
    });

    buttonDark.style.backgroundColor = "#000"
    buttonDark.style.color = "#fff"
    form.style.backgroundColor = "#fff"
    background.style.backgroundColor = "#000"
    tema.style.backgroundColor = "#fff"
    btnSession.style.backgroundColor = "#000"
    btnSession.style.color = "#fff"
    h1.style.color = "#000"
}