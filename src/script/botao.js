console.log("Hello World!")

// Seleciona o botão
const botao = document.querySelector('.blue-button');

// Seleciona a div de destino
const divDestino = document.querySelector('.container main-section');

// Adiciona um ouvinte de evento ao botão
botao.addEventListener('click', () => {
  // Calcula a posição da div de destino em relação ao topo da página
  const posicaoDivDestino = divDestino.offsetTop;

  // Rola suavemente até a posição da div de destino
  window.scrollTo({
    top: posicaoDivDestino,
    behavior: 'smooth'
  });
});