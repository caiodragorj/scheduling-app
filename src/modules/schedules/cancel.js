import { schedulesDays } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll(".period");

//gerar evento de click para cada lista manha tarde noite
periods.forEach((period) => {
  // capturar evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //obtem a li pai do elemento clicado
      const item = event.target.closest("li");
      //pega o id do aganedamento para remover
      const { id } = item.dataset;
      // confirma que o id foi selecionado
      if (id) {
        console.log(id)
        // confirma se quer realemnte deletar
        const isConfirm = confirm ("Tem certeza que deseja deletar?");

        if (isConfirm) {
          //faz a requisição para deletar
          await scheduleCancel({ id })
          // recarrega os agendamentos
          schedulesDays()
        }
      }
    }
  });
});
