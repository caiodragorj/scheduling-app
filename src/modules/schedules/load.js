import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "../schedules/show.js";

// seleciona o input de data
const selectDate = document.getElementById("date")

export async function schedulesDays(){
 // obtem a data do input
const date = selectDate.value

// buscar na API os agendamentos
const dailySchedules = await scheduleFetchByDay({ date })

//Exibe os agendamentos
scheduleShow({ dailySchedules })

//  Renderiza as horas disponiveis
  hoursLoad({ date, dailySchedules })
}