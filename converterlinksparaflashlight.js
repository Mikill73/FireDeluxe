let dialog = document.createElement('div');
dialog.id = 'dialog';
dialog.style.cssText = 'display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:5px;z-index:9999;box-shadow:0 0 10px rgba(0,0,0,0.5);';
document.body.appendChild(dialog);

let dialogTitle = document.createElement('h2');
dialogTitle.textContent = 'Coloque link de qualquer episódio de anime no site na caixa de dialogo e clique em Gerar para gerar um player rápido';
dialogTitle.style.cssText = 'margin-top:0;margin-bottom:10px;font-size:16px;font-weight:normal;text-align:center;';
dialog.appendChild(dialogTitle);

let dialogInput = document.createElement('input');
dialogInput.type = 'text';
dialogInput.style.cssText = 'width:100%;padding:10px;border-radius:5px;border:none;outline:none;';
dialogInput.placeholder = 'Coloque o link de episódio de anime aqui para converter';
dialog.appendChild(dialogInput);

let dialogButton = document.createElement('button');
dialogButton.textContent = 'Gerar';
dialogButton.style.cssText = 'margin-top:10px;padding:10px 20px;border:none;border-radius:5px;background-color:#4caf50;color:#fff;font-weight:bold;cursor:pointer;';
dialog.appendChild(dialogButton);

function generateLink(episodeLink) {
  const matches = episodeLink.match(/\/([^/]+)\/(\d+)$/i);
  if (matches) {
    const animeName = matches[1].toLowerCase().replace(/ /g, '-');
    const episodeNumber = matches[2];
    const playerLink = `https://s2.lightspeedst.net/s1/mp4_temp/${animeName}/${episodeNumber}/480p.mp4`;
    window.open(playerLink, '_blank');
    dialog.style.display = 'none';
  }
}

dialogButton.addEventListener('click', () => {
  const episodeLink = dialogInput.value.trim();
  if (episodeLink) {
    generateLink(episodeLink);
  }
});

dialogInput.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    const episodeLink = dialogInput.value.trim();
    if (episodeLink) {
      generateLink(episodeLink);
    }
  }
});

let openPlayerButton = document.createElement('button');
openPlayerButton.id = 'open-player-button';
openPlayerButton.textContent = 'Abrir Player';
openPlayerButton.style.cssText = 'position:fixed;top:50%;right:10px;transform:translateY(-50%);padding:10px;border:none;border-radius:5px;background-color:#4caf50;color:#fff;font-weight:bold;cursor:pointer;z-index:9999;';
document.body.appendChild(openPlayerButton);

openPlayerButton.addEventListener('click', () => dialog.style.display = 'block');

document.addEventListener('click', event => {
  if (event.target === dialog) {
    dialog.style.display = 'none';
  }
});
