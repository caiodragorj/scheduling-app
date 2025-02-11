import { schedulesDays } from "../schedules/load.js";
//selecionar input de data
const selectedDate = document.getElementById("date")

//Recarregar a lista de horarios quando o input de data mudar
selectedDate.onchange = () => schedulesDays()