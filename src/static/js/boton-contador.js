const contador = document.getElementById("contador")
const restarbutton = document.getElementById("restar")
const sumarbutton = document.getElementById("sumar")

let initialContador = 0

const sumarContador = () => {
    initialContador = initialContador + 1
    contador.innerHTML = initialContador
}

const restarContador = () => {
    if(initialContador <= 0) return
    initialContador = initialContador - 1
    contador.innerHTML = initialContador
}

sumarbutton.addEventListener("click", sumarContador)
restarbutton.addEventListener("click", restarContador)

contador.innerText = initialContador