import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    // faz requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Agendamento feito com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possivel agendar. Tente mais tarde");
  }
}
