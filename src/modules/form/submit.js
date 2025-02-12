import dayjs from "dayjs";
import { scheduleNew  } from "../../services/schedule-new.js";
import { schedulesDays } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectDate = document.getElementById("date");

// ### Data atual par ao input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
//Carrega Data Atual
selectDate.value = inputToday;
//Definir Data Mínima, sendo sempre a data atual, HOJE
selectDate.min = inputToday;

// ### previne para nao recarregar no submit
form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // recuperando nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do Cliente");
    }

    // Recupera o horario Selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione um horario");
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // inserir a hora na data
    const when = dayjs(selectDate.value).add(hour, "hour");

    // Gerar um ID
    const id = new Date().getTime();
    
    //faz agendamento
    await scheduleNew({
      id,
      name,
      when,
    });

  //recarregar o agendamento    
    await schedulesDays()
    clientName.value =""
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
