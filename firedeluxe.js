// ==UserScript==
// @name         Fire Deluxe
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  FIREMOD, criado por Mikill para modificar o site animefire.net
// @author       Mikill
// @match        https://animefire.net/*
// @icon         https://animefire.net/uploads/cmt/8578871_1689091569.webp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function checkPrmtCookieExists() {
    return document.cookie.includes('prmt=');
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

var cookieCreated = false;

function createCacheCookie() {
    if (!cookieCreated) {
        var randomValue = Math.floor(Math.random() * 9) + 1; // Random value between 1 and 9
        document.cookie = "cache=" + randomValue + "; path=/";
        cookieCreated = true;
    }
}

setInterval(function() {
    if (checkPrmtCookieExists()) {
        createCacheCookie();
    } else {
        deleteCookie('cache');
        cookieCreated = false;
    }
}, 10000);

function getCookieExpiration(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            var cookieParts = cookie.split('=');
            if (cookieParts.length === 2) {
                return cookieParts[1];
            }
        }
    }
    return "";
}

setInterval(function() {
    if (!checkPrmtCookieExists()) {
        location.reload();
    }
}, 40000);

})();
//==UserScript==
//sistema de acesso
(function() {
  'use strict';

window.addEventListener("load", function () {
    var imageData = localStorage.getItem("imagemfundosite");
    if (imageData) {
      document.body.style.backgroundImage = `url('${imageData}')`;
      document.body.style.backgroundSize = 'cover';
    }
  });
})();

(function() {
  'use strict';

  function fetchAprovados() {
    fetch('https://raw.githubusercontent.com/Mikill73/AnimeFireMod/main/Mod/Aprovados.txt')
      .then(response => response.text())
      .then(data => {
        const links = data.split(' ');
        const cookieValue = links.join(' ');

        document.cookie = `aprovados=${cookieValue}; max-age=60`;
      });
  }

  function updateAprovados() {
    const aprovadosCookie = document.cookie.replace(/(?:(?:^|.*;\s*)aprovados\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    const lastAprovados = aprovadosCookie.split(' ');

    fetchAprovados();

    setInterval(() => {
      fetchAprovados();

      const newAprovadosCookie = document.cookie.replace(/(?:(?:^|.*;\s*)aprovados\s*\=\s*([^;]*).*$)|^.*$/, '$1');
      const newAprovados = newAprovadosCookie.split(' ');

      if (newAprovados.length !== lastAprovados.length || !newAprovados.every((link, index) => link === lastAprovados[index])) {
        lastAprovados = newAprovados;
      }
    }, 10000);
  }

  function handlePageReload() {
    window.addEventListener('load', () => {
      fetchAprovados();
    });
  }

  function checkMeuPerfil() {
    const aprovadosCookie = document.cookie.replace(/(?:(?:^|.*;\s*)aprovados\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    const aprovados = aprovadosCookie.split(' ');
    const meuPerfilLink = document.querySelector('a.dropdown-item.py-2.px-4.meu-perfil').getAttribute('href');

    if (aprovados.includes(meuPerfilLink)) {
      const umDiaEmSegundos = 24 * 60 * 60;
      document.cookie = `prmt=true; max-age=${umDiaEmSegundos}; path=/`;
    } else {
      document.cookie = 'prmt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }

  function deletePrmtCookie() {
    const dropdownLink = document.querySelector('a.dropdown-item.py-2.px-4.meu-perfil');
    const aprovadosCookie = document.cookie.replace(/(?:(?:^|.*;\s*)aprovados\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    const aprovados = aprovadosCookie.split(' ');

    if (!dropdownLink || !aprovados.includes(dropdownLink.getAttribute('href'))) {
      document.cookie = 'prmt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }

  updateAprovados();
  handlePageReload();
  setInterval(checkMeuPerfil, 2000);
  deletePrmtCookie();

})();


// ==UserScript==
//Verificação

(function() {
  'use strict';

  function removeDuplicateCookies(cookieName) {
    const cookies = document.cookie.split(';');
    const cookieValues = new Set();

    cookies.forEach(cookie => {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.indexOf(cookieName) === 0) {
        const cookieValue = trimmedCookie.substring(cookieName.length + 1);
        if (cookieValues.has(cookieValue)) {
          document.cookie = `${trimmedCookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        } else {
          cookieValues.add(cookieValue);
        }
      }
    });
  }

  function checkCookies() {
    removeDuplicateCookies('block');
    removeDuplicateCookies('aprovados');
  }

  setInterval(checkCookies, 1000);
})();

// ==UserScript==
// animefiremod

(function() {
  'use strict';

  let overlay = null;
  let colorInput = null;
  let okButton = null;

  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function removeCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  function switchOverlay() {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.zIndex = '9998';

      let closeButton = document.createElement('button');
      closeButton.innerHTML = 'X';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.style.width = '30px';
      closeButton.style.height = '30px';
      closeButton.style.fontSize = '16px';
      closeButton.style.fontWeight = 'bold';
      closeButton.style.color = 'white';
      closeButton.style.backgroundColor = 'red';
      closeButton.addEventListener('click', closeHUD);
      overlay.appendChild(closeButton);

      let buttonContainer = document.createElement('div');
      buttonContainer.style.position = 'absolute';
      buttonContainer.style.top = '50%';
      buttonContainer.style.left = '50%';
      buttonContainer.style.left = '50%';
      buttonContainer.style.transform = 'translate(-50%, -50%)';

function applyNeonStyle(element) {
  element.style.textShadow = '0 0 2px #FF4500, 0 0 5px #FF4500, 0 0 10px #FF4500, 0 0 15px #FF4500, 0 0 20px #FF4500, 0 0 25px #FF4500';
  element.style.color = 'white';
  element.style.backgroundColor = '#FF6';
  element.style.backgroundColor = 'transparent';
}

let changeColorButton = createButton('Mudar Cor do Fundo', switchColorInput);
applyNeonStyle(changeColorButton);
buttonContainer.appendChild(changeColorButton);

let changeBackgroundButton = createButton('Mudar Fundo', switchBackgroundInput);
applyNeonStyle(changeBackgroundButton);
buttonContainer.appendChild(changeBackgroundButton);

let botaoMudarFundo = createButton('Mudar Fundo do Chat Global', handleClickMudarFundoChat);
applyNeonStyle(botaoMudarFundo);
buttonContainer.appendChild(botaoMudarFundo);

let convertPlayerButton = createButton('Converter Player', transformPlayer);
applyNeonStyle(convertPlayerButton);
buttonContainer.appendChild(convertPlayerButton);

let animeAleatorioButton = createButton('Anime Aleatorio', handleClickanimeAleatorio);
applyNeonStyle(animeAleatorioButton);
buttonContainer.appendChild(animeAleatorioButton);

let comandosButton = createButton('Comandos', handleClickComandos);
applyNeonStyle(comandosButton);
buttonContainer.appendChild(comandosButton);


      colorInput = document.createElement('input');
      colorInput.type = 'color';
      colorInput.style.display = 'none';
      buttonContainer.appendChild(colorInput);

      okButton = document.createElement('button');
      okButton.innerHTML = 'OK';
      okButton.style.display = 'none';
      okButton.style.width = '40px';
      okButton.style.height = '20px';
      okButton.addEventListener('click', applyColor);
      buttonContainer.appendChild(okButton);

      overlay.appendChild(buttonContainer);
      document.body.appendChild(overlay);
    } else {
      closeHUD();
    }
  }

  function createButton(text, onClick) {
    let button = document.createElement('button');
    button.innerHTML = text;
    button.style.display = 'block';
    button.style.width = '200px';
    button.style.height = '40px';
    button.style.marginBottom = '10px';
    button.addEventListener('click', onClick);
    return button;
  }
function handleClickComandos() {


async function fetchAndExecuteCommand(command) {
    const baseUrl = 'https://raw.githubusercontent.com/Mikill73/AnimeFireMod/main/Mod/Comandos/';
    const url = `${baseUrl}${command}.txt`;

    try {
        const response = await fetch(url);
        const code = await response.text();
        eval(code);
    } catch (error) {
        alert(`Erro executando ${command}`, error);
    }
}

const userInput = prompt('Digite um comando ou digite "cmds" para ver todos os comandos');
fetchAndExecuteCommand(userInput);

}
function handleClickMudarFundoChat() {
    const inputArquivo = document.createElement('input');
    inputArquivo.type = 'file';

    inputArquivo.addEventListener('change', function(event) {
        const div_msgs_pc = document.getElementById('mainDivMSGs');
        const arquivo = event.target.files[0];

        if (arquivo) {
            const leitor = new FileReader();
            leitor.onload = function(e) {
                div_msgs_pc.style.backgroundImage = `url('${e.target.result}')`;
                div_msgs_pc.style.backgroundSize = 'auto';

                localStorage.setItem("imagemchat", e.target.result);
            };
            leitor.readAsDataURL(arquivo);
        }
    });

    inputArquivo.click();
}

  function handleClicksiteAcesso() {
    window.open('https://mikill73.github.io/AnimeFireMod/', '_blank');

  }

  function handleClickanimeAleatorio() {
   fetch('https://raw.githubusercontent.com/Mikill73/AnimeFireMod/main/Mod/AnimeAleatorio.txt')
  .then(response => response.text())
  .then(data => {
    const links = data.trim().split(' ');
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];

    window.location.href = randomLink;
  })
  .catch(error => console.log(error));

}

  function closeHUD() {
    overlay.parentNode.removeChild(overlay);
    overlay = null;
  }
function transformPlayer() {
  let videoElements = document.querySelectorAll('video');

  if (videoElements.length > 0) {
    videoElements.forEach(videoElement => {
      let videoLink = videoElement.getAttribute('src');

      if (videoLink) {
        console.log('Player Link:', videoLink);
        window.open(videoLink, '_blank').focus();
      } else {
        console.log('Link de player não encontrado.');
      }
    });
  } else {
    console.log('Nenhum vídeo encontrado.');
  }
}

transformPlayer();


  function switchColorInput() {
    if (colorInput.style.display === 'none') {
      colorInput.style.display = 'block';
      okButton.style.display = 'block';
    } else {
      colorInput.style.display = 'none';
      okButton.style.display = 'none';
    }
  }

function switchBackgroundInput() {
  let input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.addEventListener('change', handleFileUpload);
  input.click();
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function () {
      const imageUrl = reader.result;
      applyBackgroundImage(imageUrl);
      saveImageToLocalStorage(imageUrl);
    };

    reader.readAsDataURL(file);
  }
}

function applyBackgroundImage(imageUrl) {
  document.body.style.backgroundImage = `url('${imageUrl}')`;
  document.body.style.backgroundSize = 'cover';
}

function saveImageToLocalStorage(imageUrl) {
  localStorage.setItem('imagemfundosite', imageUrl);
}


  function applyColor() {
    let selectedColor = colorInput.value;
    document.body.style.backgroundColor = selectedColor;
    setCookie('background', selectedColor);
    colorInput.style.display = 'none';
    okButton.style.display = 'none';
  }

  function resetBackground() {
    document.body.style.backgroundColor = '';
    removeCookie('background');
    localStorage.removeItem('imagemfundosite');
    location.reload();
  }

  let menuButton = null;

  function loadBackgroundFromLocalStorage() {
    let backgroundImage = localStorage.getItem('backgroundImage');
    if (backgroundImage) {
      document.body.style.backgroundImage = 'url(' + backgroundImage + ')';
    }

    let cacheCookie = getCookie('cache');
    let prmtCookie = getCookie('prmt');

    if (cacheCookie && prmtCookie) {
if (!menuButton) {
  menuButton = document.createElement('button');
  menuButton.innerHTML = '[ MENU ]';
  menuButton.style.position = 'fixed';
  menuButton.style.top = '0px';
  menuButton.style.left = '2px';
  menuButton.style.zIndex = '9998';
  menuButton.style.padding = '10px 15px';
  menuButton.style.fontSize = '25px';
  menuButton.style.fontWeight = 'bold';
  menuButton.style.border = 'none';
  menuButton.style.display = 'block';
  menuButton.style.borderRadius = '20px';
  menuButton.style.color = 'white';
  menuButton.style.backgroundColor = '#FF6';
  menuButton.style.textShadow = '0 0 2px #FF4500, 0 0 5px #FF4500, 0 0 10px #FF4500, 0 0 15px #FF4500, 0 0 20px #FF4500, 0 0 25px #FF4500';
  menuButton.style.backgroundColor = 'transparent';

  menuButton.addEventListener('click', function() {
    switchOverlay();
  });

  document.body.appendChild(menuButton);
      }
    } else {
      if (menuButton) {
        menuButton.parentNode.removeChild(menuButton);
        menuButton = null;
      }
    }
  }


function checkPrmtCookie() {
  let prmtCookie = getCookie('prmt');
  if (!prmtCookie) {
    menuButton.style.display = 'none';
  } else {
    menuButton.style.display = 'block';
  }
}

setInterval(checkPrmtCookie, 5000);

setInterval(loadBackgroundFromLocalStorage, 2000);
})();

// ==UserScript==
// carregar imagens do chat

(function() {
    'use strict';

var loadedImages = [];

function loadImagesFromLinks() {
  var messageElements = document.querySelectorAll('h6.h6Msg.montserrant200');

  for (var i = 0; i < messageElements.length; i++) {
    var messageElement = messageElements[i];
    var linkElements = messageElement.querySelectorAll('a');

    for (var j = 0; j < linkElements.length; j++) {
      var linkElement = linkElements[j];
      var linkURL = linkElement.getAttribute('href');

      if (isImageURL(linkURL) && !loadedImages.includes(linkURL)) {
        var imageElement = document.createElement('img');
        imageElement.src = linkURL;
        imageElement.className = 'loaded-image';
        imageElement.style.display = 'block';
        imageElement.style.maxWidth = '100%';

        linkElement.parentNode.replaceChild(imageElement, linkElement);

        loadedImages.push(linkURL);
      }
    }
  }
}

function isImageURL(url) {
  var imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

  for (var i = 0; i < imageExtensions.length; i++) {
    if (url.toLowerCase().endsWith(imageExtensions[i])) {
      return true;
    }
  }

  return false;
}

function verifyCacheAndPrmtCookies() {
  var verifyCookiesInterval = setInterval(function() {
    var hasCache = document.cookie.includes("cache");
    var hasPrmt = document.cookie.includes("prmt");

    if (hasCache && hasPrmt) {
      clearInterval(verifyCookiesInterval);
      setInterval(loadImagesFromLinks, 2000);
    }
  }, 10000);
}

verifyCacheAndPrmtCookies();

})();


// ==UserScript==
// pornblocker
(function() {
  'use strict';

  function checkCookiesExist() {
    const cacheCookie = document.cookie.includes('cache=');
    const prmtCookie = document.cookie.includes('prmt=');

    return cacheCookie && prmtCookie;
  }

  function createOrUpdateCookie(name, value) {
    const existingCookie = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    if (existingCookie) {
      document.cookie = `${name}=${value};`;
    } else {
      document.cookie = `${name}=${value};`;
    }
  }

  function deleteAllBlockCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.indexOf('block=') === 0) {
        const cookieName = cookie.split('=')[0];
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    }
  }

  function obterListaBloqueados() {
    deleteAllBlockCookies();

    fetch('https://raw.githubusercontent.com/Mikill73/AnimeFireMod/main/Mod/Lista%20Bloqueados.txt')
      .then(response => response.text())
      .then(data => {
        const linksBloqueados = data.split(' ').filter(link => link.trim() !== '');
        createOrUpdateCookie('block', linksBloqueados.join(' '));
      });
  }

  function verificarEaplicarEstilo() {
    const linksBloqueados = document.cookie.replace(/(?:(?:^|.*;\s*)block\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    const divElements = document.querySelectorAll('div.d-flex');

    for (let i = 0; i < divElements.length; i++) {
      const divElement = divElements[i];
      const anchorElement = divElement.querySelector('a');

      if (anchorElement && linksBloqueados.includes(anchorElement.href)) {
        divElement.style.color = 'red';
        divElement.innerHTML = '<div class="ml-2">Mensagem Bloqueada! Esse usuário está na lista de perfis bloqueados por alguma razão, você pode pedir para adicionar mais usuários à lista de bloqueados no site "lista-block", com uma captura de tela de prova. O usuário deve ter postado pornografia ou conteúdo impróprio para entrar na lista de bloqueados. Essa lista é verificada a cada 20 segundos, sem a necessidade de instalar outra versão para bloquear novos perfis!</div>';
        const imgElement = divElement.querySelector('img.avatar_reply.transitioning_src');
        if (imgElement) {
          imgElement.style.display = 'none';
        }
      }
    }

    const elementosBloqueados = document.querySelectorAll('div.d-flex a'); // Substitua pelo seletor correto
    elementosBloqueados.forEach(function(elementoBloqueado) {
      if (linksBloqueados.includes(elementoBloqueado.href)) {
        const divElement = elementoBloqueado.closest('div.d-flex');
        divElement.style.color = 'red';
        divElement.innerHTML = '<div class="ml-2">Mensagem Bloqueada! Esse usuário está na lista de perfis bloqueados por alguma razão, você pode pedir para adicionar mais usuários à lista de bloqueados no site "lista-block", com uma captura de tela de prova. O usuário deve ter postado pornografia ou conteúdo impróprio para entrar na lista de bloqueados. Essa lista é verificada a cada 20 segundos, sem a necessidade de instalar outra versão para bloquear novos perfis!</div>';
        const imgElement = divElement.querySelector('img.avatar_reply.transitioning_src');
        if (imgElement) {
          imgElement.style.display = 'none';
        }
      }
    });
  }

  function init() {
    if (!checkCookiesExist()) {
      return;
    }

    obterListaBloqueados();

    setInterval(verificarEaplicarEstilo, 250);
    setInterval(obterListaBloqueados, 10000);
  }

  setInterval(() => {
    if (checkCookiesExist()) {
      init();
    }
  }, 10000);

})();

// ==UserScript==
//nome especial roxo

(function() {
  'use strict';

function fazerRequisicao(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      callback(request.responseText);
    }
  };

  request.send();
}

function obterCookie(nome) {
  var nomeCookie = nome + "=";
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();

    if (cookie.indexOf(nomeCookie) === 0) {
      return cookie.substring(nomeCookie.length, cookie.length);
    }
  }

  return "";
}

function definirCookie(nome, valor) {
  var cookie = nome + "=" + valor + "; path=/";
  document.cookie = cookie;
}

function verificarEAplicarCor() {
  var nomesCookie = obterCookie("nomes");
  var nomes = nomesCookie.split("");

  var elementos = document.querySelectorAll(".usr_name_cmt, .linkPerfilPC, .usernameIMG");

  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var nome = elemento.innerText.trim();

    if (nomes.includes(nome) && elemento.style.color !== "rgb(255, 0, 255)") {
      elemento.style.color = "rgb(255, 0, 255)";
      elemento.style.textShadow = "0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3), 0 0 40px rgba(255, 0, 255, 0.3), 0 0 50px rgba(255, 0, 255, 0.3), 0 0 60px rgba(255, 0, 255, 0.3), 0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3), 0 0 40px rgba(255, 0, 255, 0.3), 0 0 50px rgba(255, 0, 255, 0.3), 0 0 60px rgba(255, 0, 255, 0.3)";
    }
  }
}




function obterNomesEAtualizar() {
  verificarEAplicarCor();
}

window.addEventListener('load', function() {
  fazerRequisicao("https://raw.githubusercontent.com/Mikill73/AnimeFireMod/main/Mod/NomesCorEspecialtxt", function(response) {
    var nomes = response.trim();
    definirCookie("nomes", nomes);
    obterNomesEAtualizar();
  });
});

setInterval(obterNomesEAtualizar, 5000);


})();

//==Userscript==
// Hud firedeuxe

(function() {
  'use strict';

  const divElement = document.querySelector('.div_send_cmt');
  const paragraphElement = document.createElement('p');

  fetch('https://raw.githubusercontent.com/Mikill73/AnimeFireMod/main/Mod/ImagemDIVcoment%C3%A1rio')
    .then(response => response.text())
    .then(data => {
      const mensagem = data.trim();
      paragraphElement.textContent = `Ajude a divulgar o mod compartilhando essa imagem: ${mensagem}`;
      paragraphElement.style.fontFamily = 'Arial, sans-serif';
      paragraphElement.style.fontSize = '16px';
      paragraphElement.style.color = '#1A1A1A';
      divElement.appendChild(paragraphElement);
    });

  var imagem = document.querySelector('img[src="https://animefire.net/img/lt/logo.webp"]');
  if (imagem) {
    imagem.src = "https://animefire.net/uploads/cmt/2315941_1688854447.webp";
  }

  var botaoReportar = document.createElement('button');
  botaoReportar.textContent = 'Reportar usuários';
  botaoReportar.style.marginBottom = '10px';
  botaoReportar.style.padding = '5px 10px';
  botaoReportar.style.color = 'red';
  botaoReportar.style.border = 'none';
  botaoReportar.style.cursor = 'pointer';
  botaoReportar.style.backgroundColor = '#FF6';
  botaoReportar.style.backgroundColor = 'transparent';

  botaoReportar.setAttribute('target', '_blank');
  botaoReportar.setAttribute('onclick', 'window.open("https://mikill73.github.io/AnimeFireMod/")');

  var elementoPai = document.querySelector('.mainDivComents').parentNode;

  elementoPai.insertBefore(botaoReportar, document.querySelector('.mainDivComents'));

})();
