import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
  //  limpa a lista de horarios
  hours.innerHTML = ""

  //obtem a lista de todos os horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format("HH:mm"))


  const opening = openingHours.map((hour) =>{
    // recupera somente a hora
   const [scheduleHour] = hour.split(":")
    // Adiciona hora na date e verifica se ta no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })


  // Renderizar os horarios
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" :"hour-unavailable")
    li.textContent = hour

    if (hour === "9:00") {
     hourHeaderAdd("Manhã") 
    } else if (hour === "13:00"){
      hourHeaderAdd("Tarde") 
    } else if (hour === "18:00"){
      hourHeaderAdd("Noite") 
    }

    hours.append(li)
  })
  //adiciona evento de clique nos horarios disponiveis
  hoursClick()
}// fim da function hoursLoad

//Separando os horarios em manha tarde e noite
function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}