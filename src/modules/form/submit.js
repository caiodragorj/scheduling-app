import dayjs from "dayjs"

const form = document.querySelector("form")
const selectDate = document.getElementById("date")

// ### Data atual par ao input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
//Carrega Data Atual
selectDate.value = inputToday
//Definir Data Mínima, sendo sempre a data atual, HOJE
selectDate.min = inputToday


// ### previne para nao recarregar no submit
form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Enviado")
}