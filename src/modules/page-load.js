import { schedulesDays } from "./schedules/load.js"

document.addEventListener("DOMContentLoaded", function () {
  console.log("Carregado! DOM no esquema")
  schedulesDays()
})