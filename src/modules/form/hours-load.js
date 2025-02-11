import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) =>{
    // recupera somente a hora
   const [scheduleHour] = hour.split(":")
    // Adiciona hora na date e verifica se ta no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    return {
      hour,
      available: isHourPast,
    }
  })

  // Renderizar os horarios
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" :"hour-unavailable")
    li.textContent = hour
    hours.append(li)
  })


}// fim da function hoursLoad