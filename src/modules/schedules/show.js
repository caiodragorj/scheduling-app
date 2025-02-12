import dayjs from "dayjs";

//seleciona as seções: Manha Tarde e Noite
const PeriodMorning = document.getElementById("period-morning");
const PeriodAfternoon = document.getElementById("period-afternoon");
const PeriodNight = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
  try {
    //limpa as listas
    PeriodMorning.innerHTML = "";
    PeriodAfternoon.innerHTML = "";
    PeriodNight.innerHTML = "";

    //renderizar os agendamentos por periodo
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      //adiconar id do agendamento
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      //criar icone de cancelar
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar Agendamento");

      //adicionar o tempo, nome e icone no itme
      item.append(time, name, cancelIcon);

      // obtem somente a hora
      const hour = dayjs(schedule.when).hour();

      // renderizaro agendamento na sessão manha tarde ou noite
      if (hour <= 12) {
        PeriodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        PeriodAfternoon.appendChild(item);
      } else {
        PeriodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possivel exibir os agendamentos");
    console.log(error);
  }
}
