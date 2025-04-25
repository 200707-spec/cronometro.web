let segundos = 0, minutos = 0, horas = 0;
let intervalo;

function atualizarDisplay() {
  // Atualiza o display do tempo
  document.getElementById('display').textContent =
    `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function iniciar() {
  if (!intervalo) {
    intervalo = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
          minutos = 0;
          horas++;
        }
      }
      atualizarDisplay();
    }, 1000);
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerar() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = minutos = horas = 0;
  atualizarDisplay();
}