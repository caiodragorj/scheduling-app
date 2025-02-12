import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {

  try {
    // fazendo a requisião
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    //converte para JSON
    const data = await response.json()
    //filtra os agendaentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
    
  } catch (error) {
    console.log(error)
    alert("Não foi possivel listar os agendamentos do dia selecionado")
  }
  
}