// ==UserScript==
// @name         FireDeluxe
// @namespace    http://tampermonkey.net/
// @version      2025-07-05
// @description  Userscript para o site https://animefire.plus/
// @author       Mikill (discord: mikill9150)
// @match        https://animefire.plus/*
// @icon         data:image/webp;base64,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
// @grant        none
// ==/UserScript==

//Botão Principal
(function() {
    'use strict';

    if (document.getElementById('button-manager-container')) return;

    const THEME_COLOR = '#FFA500';
    const DARK_BG = '#222';
    const LIGHT_TEXT = '#eee';
    const ACCENT_COLOR = '#444';

    const container = document.createElement('div');
    container.id = 'button-manager-container';
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.left = '10px';
    container.style.zIndex = '9999';

    const mainButton = document.createElement('button');
    mainButton.innerHTML = '<img src="data:image/webp;base64,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" style="width:50px;height:50px;">';
    mainButton.style.padding = '8px';
    mainButton.style.backgroundColor = 'transparent';
    mainButton.style.border = 'none';
    mainButton.style.cursor = 'pointer';
    mainButton.style.filter = 'drop-shadow(0 0 3px ' + THEME_COLOR + ')';
    mainButton.style.transition = 'all 0.2s ease';

    mainButton.onmouseenter = () => {
        mainButton.style.filter = 'drop-shadow(0 0 6px ' + THEME_COLOR + ')';
    };

    mainButton.onmouseleave = () => {
        mainButton.style.filter = 'drop-shadow(0 0 3px ' + THEME_COLOR + ')';
    };

    const menuPanel = document.createElement('div');
    menuPanel.style.display = 'none';
    menuPanel.style.position = 'fixed';
    menuPanel.style.top = '50%';
    menuPanel.style.left = '50%';
    menuPanel.style.transform = 'translate(-50%, -50%)';
    menuPanel.style.backgroundColor = DARK_BG;
    menuPanel.style.border = `1px solid ${ACCENT_COLOR}`;
    menuPanel.style.borderRadius = '8px';
    menuPanel.style.padding = '15px';
    menuPanel.style.boxShadow = '0 0 20px rgba(0,0,0,0.7)';
    menuPanel.style.width = '90%';
    menuPanel.style.maxWidth = '1200px';
    menuPanel.style.maxHeight = '90vh';
    menuPanel.style.overflow = 'auto';
    menuPanel.style.color = LIGHT_TEXT;

    const columnsContainer = document.createElement('div');
    columnsContainer.id = 'columns-container';
    columnsContainer.style.display = 'flex';
    columnsContainer.style.flexWrap = 'wrap';
    columnsContainer.style.gap = '15px';
    columnsContainer.style.width = '100%';
    columnsContainer.style.alignItems = 'flex-start';

    const columnsData = [
        {
            name: 'Controles',
            buttons: [
                {
                    name: 'Configurações',
                    storageKey: 'configuracoes',
                    type: 'html'
                }
            ]
        }
    ];

    function getCodeFromStorage(type, key) {
        try {
            const storageName = type === 'html' ? 'firedeluxe_codigos_html' : 'firedeluxe_codigos_js';
            const storage = JSON.parse(localStorage.getItem(storageName)) || {};
            return storage[key] || `alert('Código ${key} não encontrado no storage ${storageName}');`;
        } catch (e) {
            return `console.error('Erro ao acessar storage:', ${e});`;
        }
    }

    function createColumn(colData, index) {
        const column = document.createElement('div');
        column.className = 'column';
        column.dataset.index = index;
        column.style.width = 'calc(33.333% - 10px)';
        column.style.minWidth = '280px';
        column.style.backgroundColor = DARK_BG;
        column.style.padding = '15px';
        column.style.borderRadius = '6px';
        column.style.border = `1px solid ${ACCENT_COLOR}`;
        column.style.boxSizing = 'border-box';
        column.style.flexGrow = '1';

        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.marginBottom = '15px';
        header.style.alignItems = 'center';

        const nameLabel = document.createElement('h3');
        nameLabel.textContent = colData.name;
        nameLabel.style.margin = '0';
        nameLabel.style.color = THEME_COLOR;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';
        buttonsContainer.style.marginBottom = '10px';
        buttonsContainer.style.maxHeight = '400px';
        buttonsContainer.style.overflowY = 'auto';
        buttonsContainer.style.paddingRight = '5px';

        colData.buttons.forEach((btn, btnIndex) => {
            const button = createButton(btn, index, btnIndex);
            buttonsContainer.appendChild(button);
        });

        header.appendChild(nameLabel);
        column.appendChild(header);
        column.appendChild(buttonsContainer);
        columnsContainer.appendChild(column);
    }

    function createButton(btnData, colIndex, btnIndex) {
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.marginBottom = '8px';
        buttonContainer.style.gap = '5px';

        const button = document.createElement('button');
        button.textContent = btnData.name;
        button.style.flexGrow = '1';
        button.style.padding = '8px 12px';
        button.style.backgroundColor = ACCENT_COLOR;
        button.style.color = LIGHT_TEXT;
        button.style.border = `1px solid ${THEME_COLOR}`;
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.style.textAlign = 'left';
        button.style.fontSize = '14px';
        button.style.transition = 'all 0.2s ease';
        
        button.onmouseenter = () => {
            button.style.backgroundColor = THEME_COLOR + '30';
        };
        
        button.onmouseleave = () => {
            button.style.backgroundColor = ACCENT_COLOR;
        };
        
        button.onclick = () => {
            const content = btnData.content || getCodeFromStorage(btnData.type, btnData.storageKey);
            executeButton({...btnData, content});
        };

        buttonContainer.appendChild(button);
        return buttonContainer;
    }

function executeButton(btnData) {
    try {
        if (btnData.type === 'html') {
            const cleanedContent = btnData.content.trim();
            const fullHTML = cleanedContent.startsWith("<html")
                ? cleanedContent
                : `<html><head><meta charset="UTF-8"></head><body>${cleanedContent}</body></html>`;
            
            document.open();
            document.write(fullHTML);
            document.close();
        } else {
            new Function(btnData.content)();
        }
    } catch (e) {
        console.error('Erro ao executar botão:', e);
    }
}

    function loadColumns() {
        columnsContainer.innerHTML = '';
        columnsData.forEach((col, index) => {
            createColumn(col, index);
        });
    }

    mainButton.onclick = () => {
        menuPanel.style.display = menuPanel.style.display === 'none' ? 'block' : 'none';
        if (menuPanel.style.display === 'block') {
            loadColumns();
        }
    };

    menuPanel.appendChild(columnsContainer);
    container.appendChild(mainButton);
    container.appendChild(menuPanel);
    document.body.appendChild(container);

    if (window.location.search.includes('menu')) {
        menuPanel.style.display = 'block';
        loadColumns();
    }
})();

//AdBlocker
(function() {
    'use strict';

function removeUnwantedElements() {
  const patterns = [
    {
      selector: 'script[referrerpolicy="unsafe-url"]',
      attr: 'src',
      matches: ['displayvertising.com', 'auwwmwkduhcfqolda']
    },
    {
      selector: 'iframe[width="0"][height="0"]',
      styleMatches: {
        position: 'absolute',
        top: '-1000px',
        left: '-1000px',
        visibility: 'hidden'
      }
    },
    {
      selector: 'a[href*="youradexchange.com"]',
      styleMatches: {
        display: 'none',
        visibility: 'hidden',
        position: 'relative',
        left: '-1000px',
        top: '-1000px'
      }
    },
    {
      selector: 'script[src*="adsco.re"]'
    },
    {
      selector: 'script[src*="organicowner.com"]'
    },
    {
      selector: 'script[src*="cloudflareinsights.com"][data-cf-beacon]'
    },
    {
      selector: 'div.ad-box',
      styleMatches: {
        position: 'fixed',
        top: '0',
        left: '0'
      }
    }
  ];

  function matchesStyles(element, styles) {
    return Object.entries(styles).every(([prop, value]) => {
      return window.getComputedStyle(element).getPropertyValue(prop) === value;
    });
  }

  patterns.forEach(pattern => {
    const elements = document.querySelectorAll(pattern.selector);
    
    elements.forEach(element => {
      let shouldRemove = true;
      
      if (pattern.attr && pattern.matches) {
        const attrValue = element.getAttribute(pattern.attr) || '';
        shouldRemove = pattern.matches.some(match => attrValue.includes(match));
      }
      
      if (pattern.styleMatches) {
        shouldRemove = shouldRemove && matchesStyles(element, pattern.styleMatches);
      }
      
      if (shouldRemove) {
        element.remove();
      }
    });
  });

  const observer = new MutationObserver(mutations => {
    mutations.forEach(() => {
      patterns.forEach(pattern => {
        document.querySelectorAll(pattern.selector).forEach(element => {
          let shouldRemove = true;
          
          if (pattern.attr && pattern.matches) {
            const attrValue = element.getAttribute(pattern.attr) || '';
            shouldRemove = pattern.matches.some(match => attrValue.includes(match));
          }
          
          if (pattern.styleMatches) {
            shouldRemove = shouldRemove && matchesStyles(element, pattern.styleMatches);
          }
          
          if (shouldRemove) {
            element.remove();
          }
        });
      });
    });
  });

  observer.observe(document, {
    childList: true,
    subtree: true
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeUnwantedElements);
} else {
  removeUnwantedElements();
}

})();

//Codigo do botão Configurações
(function() {
    'use strict';

const configuracoesHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configurações</title>
    <style>
        body {
            background-color: #222;
            margin: 0;
            padding: 0;
        }
        .settings-panel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #222;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow: auto;
            color: #eee;
            z-index: 10000;
        }
        .settings-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #444;
        }
        .settings-title {
            margin: 0;
            color: #FFA500;
            font-size: 1.3em;
        }
        .close-button {
            background: none;
            border: none;
            color: #ccc;
            font-size: 1.5em;
            cursor: pointer;
            transition: color 0.2s;
        }
        .close-button:hover {
            color: #FFA500;
        }
        .settings-section {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid #444;
        }
        .section-title {
            color: #FFA500;
            font-size: 1.1em;
            margin-bottom: 15px;
        }
        .settings-row {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 15px;
            align-items: center;
        }
        .settings-label {
            width: 150px;
            color: #ccc;
        }
        .settings-input {
            flex: 1;
            min-width: 200px;
            padding: 8px 12px;
            background-color: #333;
            color: #fff;
            border: 1px solid #444;
            border-radius: 6px;
        }
        .settings-button-group {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }
        .primary-button {
            padding: 10px 16px;
            background-color: #444;
            color: #fff;
            border: 1px solid #555;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s ease;
        }
        .primary-button:hover {
            background-color: #555;
            border-color: #FFA500;
        }
        .secondary-button {
            padding: 10px 16px;
            background: linear-gradient(135deg, #444, #555);
            color: #fff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .secondary-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.4);
        }
        .preview-container {
            margin-top: 15px;
            padding: 15px;
            background-color: #333;
            border-radius: 6px;
            border: 1px solid #444;
        }
        .preview-title {
            margin-top: 0;
            margin-bottom: 10px;
            font-size: 0.9em;
            color: #ccc;
        }
        .preview-image {
            max-width: 100%;
            max-height: 200px;
            display: block;
            margin: 0 auto;
            border-radius: 4px;
        }
        .color-picker-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .color-preview {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 2px solid #555;
            cursor: pointer;
        }
        .theme-actions {
            display: flex;
            gap: 10px;
        }
        .theme-sample {
            width: 100%;
            height: 40px;
            border-radius: 6px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border: 1px solid #444;
        }
        @media (max-width: 768px) {
            .settings-row {
                flex-direction: column;
                align-items: flex-start;
            }
            .settings-label {
                width: 100%;
            }
            .settings-input {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="settings-panel" id="settingsPanel">
        <div class="settings-header">
            <h2 class="settings-title">Configurações de Fundo</h2>
            <button class="close-button" id="closeSettings">&times;</button>
        </div>

        <div class="settings-section">
            <h3 class="section-title">Tema do Site</h3>
            <div class="settings-row">
                <label class="settings-label">Cor do Tema:</label>
                <div class="color-picker-container">
                    <input type="color" class="settings-input" id="themeColor" value="#FFA500" style="width: 70px; height: 40px; padding: 0;">
                    <div class="color-preview" id="colorPreview" style="background-color: #FFA500;"></div>
                    <div class="theme-actions">
                        <button class="primary-button" id="removeThemeColor">Remover</button>
                    </div>
                </div>
            </div>
            <div class="preview-container">
                <div class="theme-sample" id="themeSample" style="background-color: rgba(255, 165, 0, 0.2); color: #FFA500;">
                    Exemplo do Tema Aplicado
                </div>
            </div>
        </div>

        <div class="settings-section">
            <h3 class="section-title">Fundo do Site</h3>
            <div class="settings-row">
                <label class="settings-label">Imagem de Fundo:</label>
                <input type="file" class="settings-input" id="siteBgImage" accept="image/*">
            </div>
            <div class="settings-button-group">
                <button class="primary-button" id="removeSiteBg">Remover Imagem</button>
            </div>
            <div class="preview-container" id="siteBgPreviewContainer" style="display: none;">
                <h4 class="preview-title">Prévia do Fundo do Site:</h4>
                <img src="" class="preview-image" id="siteBgPreview">
            </div>
        </div>

        <div class="settings-section">
            <h3 class="section-title">Fundo do Chat</h3>
            <div class="settings-row">
                <label class="settings-label">Imagem de Fundo:</label>
                <input type="file" class="settings-input" id="chatBgImage" accept="image/*">
            </div>
            <div class="settings-button-group">
                <button class="primary-button" id="removeChatBg">Remover Imagem</button>
            </div>
            <div class="preview-container" id="chatBgPreviewContainer" style="display: none;">
                <h4 class="preview-title">Prévia do Fundo do Chat:</h4>
                <img src="" class="preview-image" id="chatBgPreview">
            </div>
        </div>

        <div class="settings-button-group" style="justify-content: flex-end; margin-top: 20px;">
            <button class="secondary-button" id="saveSettings">Salvar e Fechar</button>
            <button class="primary-button" id="resetSettings">Redefinir Padrões</button>
        </div>
    </div>
    <script>
        let siteBgDataUrl = '';
        let chatBgDataUrl = '';
        let themeColor = '#FFA500';

        function loadSettings() {
            const savedSettings = localStorage.getItem('configuracoes');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);

                if (settings.siteBgImage) {
                    siteBgDataUrl = settings.siteBgImage;
                    document.getElementById('siteBgPreview').src = siteBgDataUrl;
                    document.getElementById('siteBgPreviewContainer').style.display = 'block';
                }
                if (settings.chatBgImage) {
                    chatBgDataUrl = settings.chatBgImage;
                    document.getElementById('chatBgPreview').src = chatBgDataUrl;
                    document.getElementById('chatBgPreviewContainer').style.display = 'block';
                }

                if (settings.themeColor) {
                    themeColor = settings.themeColor;
                    document.getElementById('themeColor').value = themeColor;
                    document.getElementById('colorPreview').style.backgroundColor = themeColor;
                    updateThemeSample(themeColor);
                }
            }
        }

        function updateThemeSample(color) {
            const sample = document.getElementById('themeSample');
            sample.style.backgroundColor = hexToRgba(color, 0.2);
            sample.style.color = color;
            sample.style.borderColor = color;
        }

        function hexToRgba(hex, alpha) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }

        document.getElementById('closeSettings').addEventListener('click', function() {
            window.location.reload();
        });

        document.getElementById('themeColor').addEventListener('input', function(e) {
            themeColor = e.target.value;
            document.getElementById('colorPreview').style.backgroundColor = themeColor;
            updateThemeSample(themeColor);
        });

        document.getElementById('removeThemeColor').addEventListener('click', function() {
            themeColor = '#FFA500'; 
            document.getElementById('themeColor').value = themeColor;
            document.getElementById('colorPreview').style.backgroundColor = themeColor;
            updateThemeSample(themeColor);
        });

        document.getElementById('siteBgImage').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    siteBgDataUrl = event.target.result;
                    document.getElementById('siteBgPreview').src = siteBgDataUrl;
                    document.getElementById('siteBgPreviewContainer').style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('removeSiteBg').addEventListener('click', function() {
            document.getElementById('siteBgImage').value = '';
            document.getElementById('siteBgPreview').src = '';
            document.getElementById('siteBgPreviewContainer').style.display = 'none';
            siteBgDataUrl = '';
        });

        document.getElementById('chatBgImage').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    chatBgDataUrl = event.target.result;
                    document.getElementById('chatBgPreview').src = chatBgDataUrl;
                    document.getElementById('chatBgPreviewContainer').style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('removeChatBg').addEventListener('click', function() {
            document.getElementById('chatBgImage').value = '';
            document.getElementById('chatBgPreview').src = '';
            document.getElementById('chatBgPreviewContainer').style.display = 'none';
            chatBgDataUrl = '';
        });

        document.getElementById('saveSettings').addEventListener('click', function() {
            const settings = {
                themeColor: themeColor,
                siteBgImage: siteBgDataUrl,
                chatBgImage: chatBgDataUrl
            };
            localStorage.setItem('configuracoes', JSON.stringify(settings));
            window.location.reload();
        });

        document.getElementById('resetSettings').addEventListener('click', function() {
            if (confirm('Tem certeza que deseja redefinir todas as configurações para os valores padrão?')) {
                localStorage.removeItem('configuracoes');

                themeColor = '#FFA500';
                document.getElementById('themeColor').value = themeColor;
                document.getElementById('colorPreview').style.backgroundColor = themeColor;
                updateThemeSample(themeColor);

                document.getElementById('siteBgImage').value = '';
                document.getElementById('siteBgPreview').src = '';
                document.getElementById('siteBgPreviewContainer').style.display = 'none';
                siteBgDataUrl = '';

                document.getElementById('chatBgImage').value = '';
                document.getElementById('chatBgPreview').src = '';
                document.getElementById('chatBgPreviewContainer').style.display = 'none';
                chatBgDataUrl = '';
            }
        });

        loadSettings();
    </script>
</body>
</html>
`;

localStorage.setItem('firedeluxe_codigos_html', JSON.stringify({
    configuracoes: configuracoesHTML
}));

})();

//Imagens de fundo Site e Chat
(function() {
    'use strict';

    const aplicarImagensFundo = () => {
        const configuracoes = JSON.parse(localStorage.getItem('configuracoes'));
        if (configuracoes) {
            if (configuracoes.chatBgImage) {
                const mainDivMSGs = document.querySelector('#mainDivMSGs');
                if (mainDivMSGs) {
                    mainDivMSGs.style.background = `url(${configuracoes.chatBgImage}) center/cover`;
                }
            }
            if (configuracoes.siteBgImage) {
                document.body.style.background = `url(${configuracoes.siteBgImage}) center/cover no-repeat fixed`;
            }
        }
    };

    aplicarImagensFundo();
    window.addEventListener('resize', aplicarImagensFundo);

})();

