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
                    type: 'html',
                    info: 'Configura diversas funções do FireDeluxe, incluindo aparência, comportamentos e preferências.'
                }
            ]
        },
        {
            name: 'Controles',
            buttons: [
                {
                    name: 'Contribuição',
                    storageKey: 'contribuição',
                    type: 'js',
                    info: 'Formas de contribuir ou agradecer (não inclui uso monetário)'
                }
            ]
        }
    ];

    function groupColumns(data) {
        const grouped = {};
        
        data.forEach(item => {
            if (!grouped[item.name]) {
                grouped[item.name] = {
                    name: item.name,
                    buttons: []
                };
            }
            grouped[item.name].buttons.push(...item.buttons);
        });
        
        return Object.values(grouped);
    }

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
        buttonContainer.style.alignItems = 'center';

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

        if (btnData.info) {
            const infoIcon = document.createElement('span');
            infoIcon.textContent = 'i';
            infoIcon.style.color = THEME_COLOR;
            infoIcon.style.cursor = 'help';
            infoIcon.style.fontWeight = 'bold';
            infoIcon.style.marginLeft = '5px';
            infoIcon.style.display = 'inline-block';
            infoIcon.style.width = '16px';
            infoIcon.style.height = '16px';
            infoIcon.style.textAlign = 'center';
            infoIcon.style.lineHeight = '16px';

            const tooltip = document.createElement('div');
            tooltip.textContent = btnData.info;
            tooltip.style.position = 'fixed';
            tooltip.style.display = 'none';
            tooltip.style.background = DARK_BG;
            tooltip.style.color = LIGHT_TEXT;
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '3px';
            tooltip.style.zIndex = '99999';
            document.body.appendChild(tooltip);

            infoIcon.addEventListener('mouseover', (e) => {
                tooltip.style.display = 'block';
                requestAnimationFrame(() => {
                    const left = e.clientX - tooltip.offsetWidth - 10;
                    tooltip.style.left = `${left}px`;
                    tooltip.style.top = `${e.clientY + 10}px`;
                });
            });

            infoIcon.addEventListener('mouseout', () => {
                tooltip.style.display = 'none';
            });

            infoIcon.addEventListener('mousemove', (e) => {
                const left = e.clientX - tooltip.offsetWidth - 10;
                tooltip.style.left = `${left}px`;
                tooltip.style.top = `${e.clientY + 10}px`;
            });

            buttonContainer.appendChild(infoIcon);
        }
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
        const groupedColumns = groupColumns(columnsData);
        groupedColumns.forEach((col, index) => {
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

//Impedir aviso de Adblock detectado
(function() {
    'use strict';

document.querySelectorAll('script').forEach(s => {
  if (s.textContent.includes('showAdAlert') || s.src.includes('adsbygoogle')) s.remove();
});
window.showAdAlert = function() {};
document.querySelectorAll('div[style*="Adblock detectado"]').forEach(el => el.remove());
window.chromeadblocked = false;

})();

//Remoção de elementos de ads
(function() {
    'use strict';

const remover = () => {
  let elems = [
    ...document.querySelectorAll(
      'script[src*="thumbmark"], script[src*="af.js"], script[src*="aclib.js"], script[src*="displayvertising.com"], ' +
      'script[src*="acscdn.com/script/suv5.js"], script[src*="acscdn.com/script/banner.js"], ' +
      'meta[name="admaven-placement"], meta[name="a.validate.01"], ' +
      'link[href*="youradexchange.com"], link[href*="acscdn.com"], ' +
      '#page-mask, .ad-box, #dontfoid, iframe[src="javascript:false"][width="0"][height="0"][style="display: none;"]'
    )
  ];
  elems.push(
    ...[...document.querySelectorAll('script')].filter(e => 
      e.textContent.includes('site_url') ||
      e.textContent.includes('aclib.runPop') ||
      e.textContent.trim().startsWith(`(function(options){
(function(){"use strict";var __webpack_exports__={},u=b;function _typeof(n){var t=b,r={fLUJA:function(n,t){return`)
    )
  );
  elems.forEach(e => e.remove());
};

remover();
new MutationObserver(remover).observe(document.documentElement, {childList: true, subtree: true});

})();

//Medida contra um tipo de ad
(function() {
  'use strict';

  const originalOpen = window.open;
  window.open = function(url, ...args) {
    if (typeof url === 'string' && url.includes('displayvertising')) return null;
    return originalOpen.call(window, url, ...args);
  };

  const observer = new MutationObserver(() => {
    document.querySelectorAll('iframe').forEach(iframe => {
      if (iframe.src.includes('displayvertising')) iframe.remove();
    });
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  const blockURL = (url) => {
    if (typeof url === 'string' && url.includes('displayvertising')) return true;
    return false;
  };

  const originalPushState = history.pushState;
  history.pushState = function(state, title, url) {
    if (blockURL(url)) return;
    return originalPushState.apply(history, arguments);
  };

  const originalReplaceState = history.replaceState;
  history.replaceState = function(state, title, url) {
    if (blockURL(url)) return;
    return originalReplaceState.apply(history, arguments);
  };

})();

//Remoção de localstorages relacionados a anúncios
(function() {
  'use strict';

localStorage.removeItem('_spop_popfired');
localStorage.removeItem('_spop_popfired_expires');
localStorage.removeItem('_spoplastOpenAt');

})();

//AdBlocker
(function() {
    'use strict';

    const configStr = localStorage.getItem('firedeluxe_configuracoes');
    if (!configStr) return;

    let config;
    try {
        config = JSON.parse(configStr);
    } catch {
        return;
    }

    if (config.adblocker !== 'on') return;

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
            },

            {
                selector: 'script[src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"][integrity="sha512-LCNYs7jH7Odmoc6adflrhgpq0cJmq8fwQJq3ICCBuk8BKFwA0PL6pVgVcKFnfNc0dJ+UmFp5sYvjG+jjlh7nXA=="][crossorigin="anonymous"][referrerpolicy="no-referrer"][type="text/javascript"]'
            },
            {
                selector: 'div[style="text-align: center; padding-top: 48vh; font-size: 4vw; position: fixed; display: block; width: 100%; height: 100%; inset: 0px; background-color: rgba(0, 0, 0, 0); z-index: 300000;"]'
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

//Código do botão Configurações
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
        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }
        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }
        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        input:checked + .slider {
            background-color: #FFA500;
        }
        input:checked + .slider:before {
            transform: translateX(26px);
        }
        .info-text {
            font-size: 0.85em;
            color: #aaa;
            margin-top: 5px;
            line-height: 1.4;
        }
        .warning-text {
            font-size: 0.85em;
            color: #FFA500;
            margin-top: 5px;
            line-height: 1.4;
        }
        .random-color-btn, .remove-btn {
            padding: 8px 12px;
            background-color: #333;
            color: #fff;
            border: 1px solid #555;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s ease;
        }
        .random-color-btn:hover, .remove-btn:hover {
            background-color: #444;
            border-color: #FFA500;
        }
        .error-text {
            font-size: 0.85em;
            color: #ff6b6b;
            margin-top: 5px;
            line-height: 1.4;
            display: none;
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
            <h2 class="settings-title">Configurações</h2>
        </div>

        <div class="settings-section">
            <h3 class="section-title">Configurações de Automação</h3>
            <div class="settings-row">
                <label class="settings-label">Email da conta principal:</label>
                <input type="email" class="settings-input" id="automationEmail" placeholder="Seu email no AnimeFire">
            </div>
            <div class="settings-row">
                <label class="settings-label">Senha da conta principal:</label>
                <input type="password" class="settings-input" id="automationPassword" placeholder="Sua senha no AnimeFire">
            </div>
            <div class="warning-text">
                <strong>Atenção:</strong> Estas credenciais são necessárias apenas para funções avançadas de automação do FireDeluxe. 
                Se você não confia totalmente no FireDeluxe, pode deixar em branco.
            </div>
            <div class="info-text">
                Sua experiência normal no FireDeluxe não será afetada se você não preencher estes campos.
            </div>
        </div>

        <div class="settings-section">
            <h3 class="section-title">AdBlock</h3>
            <div class="settings-row">
                <label class="settings-label">Bloquear anúncios:</label>
                <label class="switch">
                    <input type="checkbox" id="adblockerToggle">
                    <span class="slider"></span>
                </label>
            </div>
        </div>

        <div class="settings-section">
            <h3 class="section-title">Divulgar o FireDeluxe</h3>
            <div class="settings-row">
                <label class="settings-label">Permitir divulgação:</label>
                <label class="switch">
                    <input type="checkbox" id="divulgarToggle">
                    <span class="slider"></span>
                </label>
            </div>
            <div class="info-text">
                Quando ativado, verifica se tem caracteres suficientes na sua biografia, se tiver, coloca o link do site do FireDeluxe.
            </div>
        </div>

        <div class="settings-section">
            <h3 class="section-title">Tema do Site</h3>
            <div class="settings-row">
                <label class="settings-label">Cor do Tema:</label>
                <div class="color-picker-container">
                    <input type="color" class="settings-input" id="themeColor" value="#FFA500" style="width: 70px; height: 40px; padding: 0;">
                    <button class="random-color-btn" id="randomColorBtn">Aleatório</button>
                    <button class="remove-btn" id="removeThemeColor">Remover</button>
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
            <div class="info-text">
                Formatos aceitos: JPG, PNG, WEBP e GIF. A imagem será convertida para Data URL.
                Prefira imagens PNG com tamanho inferior a 2MB para melhor desempenho.
            </div>
            <div class="error-text" id="siteBgError">
                Não foi possível carregar a imagem. O arquivo pode ser muito grande (>5MB). 
                Tente usar uma imagem menor ou em formato PNG.
            </div>
            <div class="settings-button-group">
                <button class="remove-btn" id="removeSiteBg">Remover Imagem</button>
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
            <div class="info-text">
                Formatos aceitos: JPG, PNG, WEBP e GIF. A imagem será convertida para Data URL.
                Prefira imagens PNG com tamanho inferior a 2MB para melhor desempenho.
            </div>
            <div class="error-text" id="chatBgError">
                Não foi possível carregar a imagem. O arquivo pode ser muito grande (>5MB). 
                Tente usar uma imagem menor ou em formato PNG.
            </div>
            <div class="settings-button-group">
                <button class="remove-btn" id="removeChatBg">Remover Imagem</button>
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
        let adblockerEnabled = false;
        let divulgarEnabled = false;

        function loadSettings() {
            const savedSettings = localStorage.getItem('firedeluxe_configuracoes');
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
                    updateThemeSample(themeColor);
                }

                if (settings.adblocker) {
                    adblockerEnabled = settings.adblocker === 'on';
                    document.getElementById('adblockerToggle').checked = adblockerEnabled;
                }

                if (settings.divulgar) {
                    divulgarEnabled = settings.divulgar === 'on';
                    document.getElementById('divulgarToggle').checked = divulgarEnabled;
                }

                if (settings.email) {
                    document.getElementById('automationEmail').value = settings.email;
                }

                if (settings.senha) {
                    document.getElementById('automationPassword').value = settings.senha;
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

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        document.getElementById('randomColorBtn').addEventListener('click', function() {
            const randomColor = getRandomColor();
            themeColor = randomColor;
            document.getElementById('themeColor').value = randomColor;
            updateThemeSample(randomColor);
        });

        document.getElementById('themeColor').addEventListener('input', function(e) {
            themeColor = e.target.value;
            updateThemeSample(themeColor);
        });

        document.getElementById('removeThemeColor').addEventListener('click', function() {
            themeColor = '#FFA500';
            document.getElementById('themeColor').value = themeColor;
            updateThemeSample(themeColor);
        });

        document.getElementById('siteBgImage').addEventListener('change', function(e) {
            const file = e.target.files[0];
            const errorElement = document.getElementById('siteBgError');
            errorElement.style.display = 'none';
            
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    errorElement.style.display = 'block';
                    document.getElementById('siteBgImage').value = '';
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(event) {
                    siteBgDataUrl = event.target.result;
                    document.getElementById('siteBgPreview').src = siteBgDataUrl;
                    document.getElementById('siteBgPreviewContainer').style.display = 'block';
                };
                reader.onerror = function() {
                    errorElement.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('removeSiteBg').addEventListener('click', function() {
            document.getElementById('siteBgImage').value = '';
            document.getElementById('siteBgPreview').src = '';
            document.getElementById('siteBgPreviewContainer').style.display = 'none';
            siteBgDataUrl = '';
            document.getElementById('siteBgError').style.display = 'none';
        });

        document.getElementById('chatBgImage').addEventListener('change', function(e) {
            const file = e.target.files[0];
            const errorElement = document.getElementById('chatBgError');
            errorElement.style.display = 'none';
            
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    errorElement.style.display = 'block';
                    document.getElementById('chatBgImage').value = '';
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(event) {
                    chatBgDataUrl = event.target.result;
                    document.getElementById('chatBgPreview').src = chatBgDataUrl;
                    document.getElementById('chatBgPreviewContainer').style.display = 'block';
                };
                reader.onerror = function() {
                    errorElement.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('removeChatBg').addEventListener('click', function() {
            document.getElementById('chatBgImage').value = '';
            document.getElementById('chatBgPreview').src = '';
            document.getElementById('chatBgPreviewContainer').style.display = 'none';
            chatBgDataUrl = '';
            document.getElementById('chatBgError').style.display = 'none';
        });

        document.getElementById('saveSettings').addEventListener('click', function() {
            const settings = {
                themeColor: themeColor,
                siteBgImage: siteBgDataUrl,
                chatBgImage: chatBgDataUrl,
                adblocker: document.getElementById('adblockerToggle').checked ? 'on' : 'off',
                divulgar: document.getElementById('divulgarToggle').checked ? 'on' : 'off',
                email: document.getElementById('automationEmail').value,
                senha: document.getElementById('automationPassword').value
            };
            localStorage.setItem('firedeluxe_configuracoes', JSON.stringify(settings));
            window.location.reload();
        });

        document.getElementById('resetSettings').addEventListener('click', function() {
            if (confirm('Tem certeza que deseja redefinir todas as configurações para os valores padrão?')) {
                localStorage.removeItem('firedeluxe_configuracoes');

                themeColor = '#FFA500';
                document.getElementById('themeColor').value = themeColor;
                updateThemeSample(themeColor);

                document.getElementById('siteBgImage').value = '';
                document.getElementById('siteBgPreview').src = '';
                document.getElementById('siteBgPreviewContainer').style.display = 'none';
                siteBgDataUrl = '';
                document.getElementById('siteBgError').style.display = 'none';

                document.getElementById('chatBgImage').value = '';
                document.getElementById('chatBgPreview').src = '';
                document.getElementById('chatBgPreviewContainer').style.display = 'none';
                chatBgDataUrl = '';
                document.getElementById('chatBgError').style.display = 'none';

                document.getElementById('adblockerToggle').checked = false;
                document.getElementById('divulgarToggle').checked = false;
                document.getElementById('automationEmail').value = '';
                document.getElementById('automationPassword').value = '';
                
                window.location.reload();
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

//Código do botão de contribuições
(function() {
  'use strict';

const codigoJS = `
(function() {
    'use strict';

    const container = document.createElement('div');
    container.className = 'modal-panel';
    container.style.width = '90%';
    container.style.maxWidth = '600px';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '15px';

    const title = document.createElement('h3');
    title.className = 'modal-title';
    title.textContent = 'Formas de Contribuição';
    title.style.margin = '0';

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'close-button';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.color = '#FFA500';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.padding = '0';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';

    closeButton.addEventListener('click', () => {
        container.remove();
    });

    header.appendChild(title);
    header.appendChild(closeButton);
    container.appendChild(header);

    const description = document.createElement('p');
    description.textContent = 'Aqui estão algumas formas de contribuir ou agradecer pelo FireDeluxe:';
    description.style.margin = '0 0 15px 0';
    description.style.color = '#ccc';
    container.appendChild(description);

    const contribuicoes = [
        {
            titulo: 'Deixar um feedback sobre o FireDeluxe no Discord',
            descricao: 'Avalie o userscript no Discord, o seu feedback vai aparecer no site para novos usuários verem!',
            link: 'https://discord.gg/ZtwHK3Aqrz',
            botaoTexto: 'Deixar Feedback',
            icone: '⭐',
            usarImagem: false 
        },
        {
            titulo: 'Entrar no servidor de Discord do FireDeluxe',
            descricao: 'Junte-se à nossa comunidade no Discord para dar sugestões, feedbacks, reportar bugs ou ajudar outros usuários.',
            link: 'https://discord.gg/ZtwHK3Aqrz',
            botaoTexto: 'Acessar Discord',
            icone: 'data:image/webp;base64,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', 
            usarImagem: true 
        },
        {
            titulo: 'Entrar no maior servidor de Discord do AnimeFire',
            descricao: 'Servidor de um usuário influente, MrKalangot, atualmente o maior relacionado ao site',
            link: 'https://discord.gg/PTnkFaNR8Y',
            botaoTexto: 'Acessar Discord',
            icone: 'data:image/webp;base64,UklGRowDAABXRUJQVlA4TIADAAAvNgAOEF/BqI0kR57lzy7x2OfuhabBuJEkJ3UGiIP8I+Pv7TBoJClSgX8pSMMA3NOM20hStLvH9L78o7oYmKm7R7roc7+EYMjFUXxYQUUTJkAYPjyKRLoFw6fqsQGiakWCNoC68LXACySplIA/VWP1p/xRTznf+/1G9E4zOuu573S0l61lGSDWtu0kOgSRZE5IEHPA23+D/P/BmQYi+j8BGr+btfqfq2D/196fTlIJq790u96/6rfA7s+c6oesN8C7/I1285Jjj+QvvItSzuce1e8u2VXutSH5WTl9auDGwPVH2/iloUtT8Zutf9Xg2BT9pAxKDb5hDr4/uPozDd9Y+Iz3if3nCNkfOLDW8IcHsaEb7Rz47xE2wDoEvO9oGQeNGAFVAsQau4HLCC0QPHJgPlpOJOvDYQHkSoHdWLeAwjZrLbcAaL8hcB1rD7VtFX9MM2ClFphq7Ck8bAe2hhqIPzoA1ThvPWEil6T3mIB/URdCpnG7ewWpwxKe0icBv5GO4L9G0rmAhUMGtZ4J+CdJERQau5nDyiGExS4Er5FUgfeyVEO+VQSF7YY5qCQpgYWs68MAHSdOG8tOklqgtTXsBmx8WNky01L9JcSyvwlObrsAFpZHYEi6XhdC4aAJ8cdp7UFq2dL37+o3QOUyhbXTagITS244yrgGbi4R+A+XeQQ8DR+vl8o8Ax4uIbB3SedAZWjoXywZcHFoAWKHR1oAB8O+N5M1BVa2b0YAXG3lqgJiw6J3ss0B9qZuibcEtrbF9gnQ9jJgIvu6x/wmqZnC/AgsLR//pimw7CXA0uFkgDiZANQNkFm2sbQHvKekFNg7fGOTOVVvauriQnoFwErSCtg4qHYKbyqByLTjKmkOeDepBAoXFQ7xRSqAqeEVppLUAqRfdRPInVTGhnj/kRQBuSGn7ikH2EtHCL9O0rUq67v6J4BDb08i49UDgkZaQDvA8Zv0SklVELQmFQD+WV3Ocqwd/adUe6xk7aYAYauu8O7jVEEvkUqP+GPTLQTwSum06sYoPfrb7zrAu8i19ugv3/q+h3UFxvCcQlDKvQx6TLadBjcR5okPbDX0GPRgsr87dVWKc7DV8CY0AMm6fn2l9+W4DHH3K415m1r6nu8xPLpo3K7wHMYMDh+Nfs1/kJ3103YejBLkJ/38tZ8OitZ3/c1HVeTRxAu8MMqL8qlRAQ==',
            usarImagem: true
        },
        {
            titulo: 'Dar uma sugestão de função no Discord',
            descricao: 'Dê a sua sugestão no Discord do FireDeluxe, qualquer coisa!',
            link: 'https://discord.gg/ZtwHK3Aqrz',
            botaoTexto: 'Dar Sugestão',
            icone: '💡',
            usarImagem: false 
        }
    ];

    const listContainer = document.createElement('div');
    listContainer.className = 'list-container';

    contribuicoes.forEach(item => {
        const contribItem = document.createElement('div');
        contribItem.className = 'list-item';

        const itemContent = document.createElement('div');
        itemContent.style.flexGrow = '1';

        const itemTitle = document.createElement('div');
        itemTitle.style.display = 'flex';
        itemTitle.style.alignItems = 'center';
        itemTitle.style.gap = '10px';
        itemTitle.style.marginBottom = '5px';

        let icon;
        if (item.usarImagem) {
            icon = document.createElement('img');
            icon.src = item.icone;
            icon.style.width = '20px';
            icon.style.height = '20px';
            icon.style.objectFit = 'contain';
        } else {
            icon = document.createElement('span');
            icon.textContent = item.icone;
            icon.style.fontSize = '1.2em';
        }

        const titleText = document.createElement('strong');
        titleText.textContent = item.titulo;
        titleText.style.color = '#FFA500';

        itemTitle.appendChild(icon);
        itemTitle.appendChild(titleText);

        const itemDesc = document.createElement('div');
        itemDesc.textContent = item.descricao;
        itemDesc.style.color = '#aaa';
        itemDesc.style.fontSize = '0.9em';
        itemDesc.style.marginBottom = '10px';

        const actionButton = document.createElement('button');
        actionButton.className = 'secondary-button';
        actionButton.textContent = item.botaoTexto;
        actionButton.style.marginTop = '10px';

        actionButton.addEventListener('click', () => {
            if (item.link) {
                window.open(item.link, '_blank');
            }
        });

        itemContent.appendChild(itemTitle);
        itemContent.appendChild(itemDesc);
        itemContent.appendChild(actionButton);

        contribItem.appendChild(itemContent);
        listContainer.appendChild(contribItem);
    });

    container.appendChild(listContainer);

    if (!document.getElementById('contribuicao-styles')) {
        const style = document.createElement('style');
        style.id = 'contribuicao-styles';
        style.textContent = \`
            .modal-panel {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #222;
                padding: 20px;
                border: 1px solid #444;
                border-radius: 8px;
                box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
                z-index: 10000;
                color: #eee;
                width: 80%;
                max-width: 600px;
            }

            .modal-title {
                color: #FFA500;
                font-size: 1.2em;
                border-bottom: none;
                padding-bottom: 0;
            }

            .list-container {
                max-height: 60vh;
                overflow-y: auto;
                margin: 15px 0;
            }

            .list-item {
                padding: 12px;
                border-bottom: 1px solid #444;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: background-color 0.2s;
            }

            .list-item:hover {
                background-color: #333;
            }

            .secondary-button {
                padding: 12px 20px;
                background: linear-gradient(135deg, #444, #555);
                color: #fff;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
                font-size: 15px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
            }

            .secondary-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 15px rgba(0,0,0,0.4);
            }

            .close-button:hover {
                color: #fff;
                background-color: #FFA50020;
                border-radius: 50%;
            }
        \`;
        document.head.appendChild(style);
    }

    document.body.appendChild(container);
})();
`;

localStorage.setItem('firedeluxe_codigos_js', JSON.stringify({
    contribuição: codigoJS
}));

})();

//Imagens de fundo Site e Chat
(function() {
  'use strict';

  const aplicarImagensFundo = () => {
    const configuracoes = JSON.parse(localStorage.getItem('firedeluxe_configuracoes'));
    if (configuracoes) {
      if (configuracoes.chatBgImage) {
        const mainDivMSGs = document.querySelector('#mainDivMSGs');
        if (mainDivMSGs) {
          mainDivMSGs.style.backgroundImage = `url(${configuracoes.chatBgImage})`;
          mainDivMSGs.style.backgroundSize = 'cover';
          mainDivMSGs.style.backgroundPosition = 'center';
          mainDivMSGs.style.backgroundRepeat = 'no-repeat';
        }
      }
      if (configuracoes.siteBgImage) {
        document.body.style.backgroundImage = `url(${configuracoes.siteBgImage})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
      }
    }
  };

  aplicarImagensFundo();
  window.addEventListener('resize', aplicarImagensFundo);

})();

//Verificar versão
(function() {
    'use strict';

    async function checkVersion() {
        try {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith('firedeluxe_versao='))
                ?.split('=')[1];
            
            if (!cookieValue) {
                showUpdateAlert();
                return;
            }

            const response = await fetch('https://greasyfork.org/pt-BR/scripts/470618-firedeluxe');
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const versionElements = [...doc.querySelectorAll('.script-show-version span')];
            const latestVersion = versionElements.find(el => /\d/.test(el.textContent))?.textContent.trim();

            if (latestVersion && cookieValue !== latestVersion) {
                showModal(
                    'Atualização Disponível', 
                    `<div class="update-message">Uma nova versão está disponível:</div>
                    <div class="version-container">
                        <strong>Sua versão:</strong> <span class="version-text">${cookieValue}</span><br>
                        <strong>Nova versão:</strong> <span class="version-text">${latestVersion}</span>
                    </div>`,
                    'https://greasyfork.org/pt-BR/scripts/470618-firedeluxe'
                );
            }
        } catch (error) {
            console.error('Erro ao verificar versão:', error);
            showModal('Erro', '<div class="error-message">Ocorreu um erro ao verificar a versão atual.</div>');
        }
    }

    function showUpdateAlert() {
        showModal(
            'Atualização Recomendada', 
            '<div class="update-message">Uma atualização do FireDeluxe está disponível.</div>',
            'https://greasyfork.org/pt-BR/scripts/470618-firedeluxe'
        );
    }

    function showModal(title, content, actionUrl = null) {
        const existingModal = document.querySelector('.modal-overlay');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.className = 'modal-panel';
        
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        modal.innerHTML = `
            <div class="modal-header">
                <h3>${title}</h3>
            </div>
            <div class="modal-content">
                ${content}
            </div>
            <div class="modal-buttons">
                ${actionUrl ? `
                    <a href="${actionUrl}" target="_blank" class="update-button">
                        Atualizar
                    </a>` : ''}
                <button class="close-button">
                    Fechar
                </button>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0,0,0,0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            }
            .modal-panel {
                background-color: #222;
                border: 1px solid #FFA500;
                border-radius: 8px;
                width: 90%;
                max-width: 400px;
                color: #EEE;
            }
            .modal-header {
                padding: 15px;
                border-bottom: 1px solid #333;
            }
            .modal-header h3 {
                margin: 0;
                color: #FFA500;
                text-align: center;
                font-size: 1.2em;
            }
            .modal-content {
                padding: 20px;
                text-align: center;
                line-height: 1.6;
            }
            .update-message {
                color: #EEE !important;
                margin-bottom: 15px;
                font-size: 1em;
            }
            .error-message {
                color: #EEE !important;
            }
            .version-container {
                background: rgba(0,0,0,0.3);
                padding: 15px;
                border-radius: 6px;
                margin-top: 10px;
            }
            .version-container strong {
                color: #FFA500;
            }
            .version-text {
                color: #FFF !important;
                background-color: #333;
                padding: 3px 8px;
                border-radius: 4px;
                font-family: monospace;
                display: inline-block;
                margin: 3px 0;
            }
            .modal-buttons {
                display: flex;
                justify-content: center;
                gap: 10px;
                padding: 15px;
                border-top: 1px solid #333;
            }
            .update-button, .close-button {
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                font-weight: bold;
                border: none;
                transition: all 0.2s;
                font-size: 0.9em;
            }
            .update-button {
                background-color: #FFA500;
                color: #000 !important;
                text-decoration: none;
            }
            .update-button:hover {
                background-color: #FFB733;
            }
            .close-button {
                background-color: #444;
                color: #FFF !important;
            }
            .close-button:hover {
                background-color: #555;
            }
        `;

        overlay.appendChild(modal);
        document.body.appendChild(style);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.classList.contains('close-button')) {
                overlay.remove();
            }
        });
    }

    checkVersion();
})();

//Trocar cores de elementos do site para o tema
(function() {
    'use strict';

    const MAX_TENTATIVAS = 30;
    const INTERVALO_VERIFICACAO = 100;
    const coresOriginais = [
        {hex: '#21d3ff', rgb: 'rgb(33, 211, 255)'},
        {hex: '#29DFFF', rgb: 'rgb(41, 223, 255)'},
        {hex: '#4CDCF4', rgb: 'rgb(76, 220, 244)'},
        {hex: '#17a2b8', rgb: 'rgb(23, 162, 184)'},
        {hex: '#ff6f21', rgb: 'rgb(255, 111, 33)'}
    ];
    const novaCor = {hex: '#FFA500', rgb: 'rgb(255, 165, 0)'};

    let tentativas = 0;
    let emExecucao = false;
    let observer = null;

    async function trocarTema() {
        if (emExecucao) return;
        emExecucao = true;

        await processarElementos();

        configurarObservador();

        emExecucao = false;
    }

    async function processarElementos() {
        let elementosProcessados = 0;

        do {
            const encontrados = await verificarLote();
            elementosProcessados += encontrados;

            if (encontrados === 0) {
                tentativas++;
            } else {
                tentativas = 0; 
            }

            if (tentativas >= MAX_TENTATIVAS) {
                console.log('Mudando para modo observador (MutationObserver)');
                return;
            }

            await aguardar(INTERVALO_VERIFICACAO);
        } while (true);
    }

    async function verificarLote() {
        return new Promise(resolve => {
            requestAnimationFrame(() => {

                const elementos = document.querySelectorAll(`
                    *:not([data-tema-processado]):not(script):not(style)
                `);

                let processados = 0;
                const batchSize = 50;
                const totalBatches = Math.ceil(elementos.length / batchSize);

                if (elementos.length === 0) {
                    resolve(0);
                    return;
                }

                const processarBatch = (batchIndex) => {
                    const start = batchIndex * batchSize;
                    const end = start + batchSize;
                    const batch = Array.from(elementos).slice(start, end);

                    batch.forEach(elemento => {
                        processarElemento(elemento);
                        processados++;
                    });

                    if (batchIndex < totalBatches - 1) {
                        requestAnimationFrame(() => processarBatch(batchIndex + 1));
                    } else {
                        resolve(processados);
                    }
                };

                processarBatch(0);
            });
        });
    }

    function processarElemento(elemento) {
        const estilo = window.getComputedStyle(elemento);

        coresOriginais.forEach(cor => {
            if (estilo.color === cor.rgb) {
                elemento.style.color = novaCor.hex;
            }

            if (estilo.backgroundColor === cor.rgb) {
                elemento.style.backgroundColor = novaCor.hex;
            }

            if (estilo.borderColor === cor.rgb) {
                elemento.style.borderColor = novaCor.hex;
            }
        });

        elemento.setAttribute('data-tema-processado', 'true');
    }

    function configurarObservador() {
        if (observer) observer.disconnect();

        observer = new MutationObserver(mutations => {
            if (emExecucao) return;

            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (!node.hasAttribute('data-tema-processado')) {
                            processarElemento(node);
                        }

                        const elementos = node.querySelectorAll(':not([data-tema-processado])');
                        elementos.forEach(el => processarElemento(el));
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function aguardar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    trocarTema();

})();

//Login Rápido
(function() {
    'use strict';

function showWarningModal(message) {
  const existing = document.querySelector('.modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const panel = document.createElement('div');
  panel.className = 'modal-panel';

  panel.innerHTML = `
    <div class="modal-header">
      <h3>Aviso</h3>
    </div>
    <div class="modal-content">
      <p class="error-message">${message}</p>
    </div>
    <div class="modal-buttons">
      <button class="close-button">Fechar</button>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    }
    .modal-panel {
      background-color: #222;
      border: 1px solid #FFA500;
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
      color: #EEE;
    }
    .modal-header {
      padding: 15px;
      border-bottom: 1px solid #333;
    }
    .modal-header h3 {
      margin: 0;
      color: #FFA500;
      text-align: center;
      font-size: 1.2em;
    }
    .modal-content {
      padding: 20px;
      text-align: center;
      line-height: 1.6;
    }
    .error-message {
      color: #EEE !important;
      margin: 0;
    }
    .modal-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      padding: 15px;
      border-top: 1px solid #333;
    }
    .close-button {
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      border: none;
      transition: all 0.2s;
      font-size: 0.9em;
      background-color: #444;
      color: #FFF !important;
    }
    .close-button:hover {
      background-color: #555;
    }
  `;

  overlay.appendChild(panel);
  document.head.appendChild(style);
  document.body.appendChild(overlay);

  panel.querySelector('.close-button').onclick = () => overlay.remove();
}

const originalBtn = document.querySelector('button[name="login"]');
if (originalBtn) {
  const autoBtn = originalBtn.cloneNode(true);
  autoBtn.textContent = 'Login Rápido';
  autoBtn.style.marginTop = '10px';
  autoBtn.style.fontSize = '30px';

  autoBtn.addEventListener('click', async () => {
    let loginAttempted = false;
    try {
      const res = await fetch('https://animefire.plus/verify/index');
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const tokenInput = doc.querySelector('input[name="csrf_token"]');
      if (!tokenInput) {
        location.href = 'https://animefire.plus/';
        return;
      }

      const csrfToken = tokenInput.value;
      const config = JSON.parse(localStorage.getItem('firedeluxe_configuracoes') || '{}');

      if (!config.email || !config.senha) {
        showWarningModal('Você precisa ter o email e senha da conta principal registrados na configuração para usar essa função.');
        return;
      }

      loginAttempted = true;
      const formData = new FormData();
      formData.append('email', config.email);
      formData.append('senha', config.senha);
      formData.append('csrf_token', csrfToken);
      formData.append('login', '');

      await fetch('https://animefire.plus/auth/entrar', {
        method: 'POST',
        body: formData,
        redirect: 'manual'
      });
    } catch {
    } finally {
      if (loginAttempted) location.href = 'https://animefire.plus/';
    }
  });

  originalBtn.parentElement.appendChild(autoBtn);
}

})();

//Préview das informações dos animes
(function() {
    'use strict';

let currentOverlay = null;
let observer = null;

function initAnimePreview() {
    const config = JSON.parse(localStorage.getItem('firedeluxe_configuracoes') || '{}');
    const themeColor = config.themeColor || '#e36722';

    const cleanUp = () => {
        document.querySelectorAll('[data-preview-overlay]').forEach(el => el.remove());
        currentOverlay = null;
    };

    cleanUp();

    const applyPreviewToItems = (items) => {
        items.forEach(item => {
            if (item.hasAttribute('data-preview-enabled')) return;

            item.setAttribute('data-preview-enabled', 'true');

            const animeContainer = item.querySelector('.divArticleLancamentos');
            if (!animeContainer) return;

            animeContainer.style.position = 'relative';

            const toggleBtn = document.createElement('button');
            Object.assign(toggleBtn.style, {
                position: 'absolute',
                top: '8px',
                left: '8px',
                zIndex: '1001',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.8)',
                border: `1px solid ${themeColor}`,
                color: themeColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '0',
                margin: '0',
                lineHeight: '1',
                outline: 'none',
                boxShadow: '0 0 5px rgba(0,0,0,0.5)',
                transition: 'all 0.2s ease'
            });

            toggleBtn.innerHTML = 'i';
            animeContainer.prepend(toggleBtn);

            toggleBtn.addEventListener('mouseenter', () => {
                toggleBtn.style.background = themeColor;
                toggleBtn.style.color = '#fff';
            });
            toggleBtn.addEventListener('mouseleave', () => {
                toggleBtn.style.background = 'rgba(0,0,0,0.8)';
                toggleBtn.style.color = themeColor;
            });

            const toggleOverlay = async (e) => {
                if (e) e.stopPropagation();

                const existingOverlay = animeContainer.querySelector('[data-preview-overlay]');
                if (existingOverlay) {
                    existingOverlay.remove();
                    if (currentOverlay === existingOverlay) currentOverlay = null;
                    return;
                }

                cleanUp();

                const animeLink = item.querySelector('a.item')?.href;
                if (!animeLink) return;

                if (animeContainer.dataset.preview) {
                    createOverlay(animeContainer, JSON.parse(animeContainer.dataset.preview), item.querySelector('.animeTitle')?.textContent, themeColor);
                    return;
                }

                try {
                    const response = await fetch(animeLink);
                    const html = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');

                    const getInfo = (label) => {
                        const el = [...doc.querySelectorAll('.animeInfo')].find(el => 
                            el.textContent.includes(label));
                        return el ? el.querySelector('.spanAnimeInfo')?.textContent.trim() || 'N/A' : 'N/A';
                    };

                    const animeData = {
                        generos: [...doc.querySelectorAll('.spanGeneros')].map(el => el.textContent.trim()).join(', ') || 'N/A',
                        temporada: getInfo('Temporada:'),
                        estudio: getInfo('Estúdios:'),
                        episodios: getInfo('Episódios:'),
                        status: getInfo('Status do Anime:'),
                        ano: getInfo('Ano:')
                    };

                    if (animeData.episodios === '??') {
                        const eps = doc.querySelectorAll('.div_video_list .lEp');
                        animeData.episodios = eps.length > 0 ? eps.length.toString() : 'N/A';
                    }

                    animeContainer.dataset.preview = JSON.stringify(animeData);
                    createOverlay(animeContainer, animeData, item.querySelector('.animeTitle')?.textContent, themeColor);

                } catch (error) {
                    console.error('Erro ao carregar preview:', error);
                }
            };

            toggleBtn.addEventListener('click', toggleOverlay);
        });
    };

    const processElements = () => {
        const existingItems = document.querySelectorAll('.owl-item:not([data-preview-enabled])');
        applyPreviewToItems(existingItems);
    };

    processElements();

    if (!observer) {
        observer = new MutationObserver((mutations) => {
            let needsUpdate = false;
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) needsUpdate = true;
            });
            if (needsUpdate) processElements();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

function createOverlay(container, animeData, title, themeColor) {
    const overlay = document.createElement('div');
    overlay.setAttribute('data-preview-overlay', 'true');
    Object.assign(overlay.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(0,0,0,0.9)',
        color: '#f8f8f8',
        padding: '12px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        borderRadius: '5px',
        zIndex: '1000',
        cursor: 'default',
        overflowY: 'auto',
        boxSizing: 'border-box',
        fontSize: '12px',
        lineHeight: '1.5',
        border: `1px solid ${themeColor}40`,
        boxShadow: `0 0 12px ${themeColor}30`
    });

    const formatText = (text, maxLength = 30) => {
        if (!text || text === 'N/A') return '-';
        if (text.length > maxLength) return text.substring(0, maxLength) + '...';
        return text;
    };

    overlay.innerHTML = `
        <div style="margin-bottom:10px;font-size:14px;font-weight:bold;color:${themeColor};width:100%;text-align:center;text-shadow:0 0 8px ${themeColor}40">${formatText(title || '', 26)}</div>
        <div style="display:flex;flex-direction:column;gap:6px;width:100%">
            <div><strong style="color:${themeColor}">Gêneros:</strong><br>${formatText(animeData.generos, 40)}</div>
            <div><strong style="color:${themeColor}">Episódios:</strong> ${animeData.episodios}</div>
            <div><strong style="color:${themeColor}">Temporada:</strong> ${formatText(animeData.temporada, 15)}</div>
            <div><strong style="color:${themeColor}">Status:</strong> ${formatText(animeData.status, 15)}</div>
            <div><strong style="color:${themeColor}">Estúdio:</strong> ${formatText(animeData.estudio, 20)}</div>
            <div><strong style="color:${themeColor}">Ano:</strong> ${animeData.ano}</div>
        </div>
    `;

    container.appendChild(overlay);
    currentOverlay = overlay;

    overlay.addEventListener('click', (e) => e.stopPropagation());
}

function observeConfigChanges() {
    let lastConfig = localStorage.getItem('firedeluxe_configuracoes');

    const checkConfig = () => {
        const currentConfig = localStorage.getItem('firedeluxe_configuracoes');
        if (currentConfig !== lastConfig) {
            lastConfig = currentConfig;
            if (observer) observer.disconnect();
            observer = null;
            initAnimePreview();
        }
    };

    const intervalId = setInterval(checkConfig, 1000);
    return () => clearInterval(intervalId);
}

initAnimePreview();
const clearConfigObserver = observeConfigChanges();

window.addEventListener('beforeunload', () => {
    if (observer) observer.disconnect();
    clearConfigObserver();
});

})();

//Confirmação de exclusão do histórico (pedido de um usuário)
(function() {
    'use strict';
    
if (!location.href.includes('historico')) return;

document.querySelector('form[action="https://animefire.plus/proc/delete_historic"] button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const form = this.closest('form');
    const themeColor = localStorage.getItem('firedeluxe_configuracoes') ? 
        JSON.parse(localStorage.getItem('firedeluxe_configuracoes')).themeColor || '#FFA500' : '#FFA500';

    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-panel" style="border-color: ${themeColor}">
            <div class="modal-header">
                <h3 style="color: ${themeColor}">Confirmar ação</h3>
            </div>
            <div class="modal-content">
Tem certeza de que deseja apagar todo o histórico? (Obs.: o site apaga todas as informações ao limpar o histórico, incluindo as configurações do FireDeluxe salvas. Então, revise as configurações do FireDeluxe após apagar o histórico.)
            </div>
            <div class="modal-buttons">
                <button class="confirm-button" style="background-color: ${themeColor}">Confirmar</button>
                <button class="close-button">Cancelar</button>
            </div>
        </div>
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 10000; }
        .modal-panel { background-color: #222; border: 1px solid; border-radius: 8px; width: 90%; max-width: 400px; color: #EEE; }
        .modal-header { padding: 15px; border-bottom: 1px solid #333; }
        .modal-header h3 { margin: 0; text-align: center; font-size: 1.2em; }
        .modal-content { padding: 20px; text-align: center; line-height: 1.6; }
        .modal-buttons { display: flex; justify-content: center; gap: 10px; padding: 15px; border-top: 1px solid #333; }
        .confirm-button, .close-button { padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; border: none; transition: all 0.2s; font-size: 0.9em; }
        .confirm-button { color: #000 !important; text-decoration: none; }
        .confirm-button:hover { opacity: 0.9; }
        .close-button { background-color: #444; color: #FFF !important; }
        .close-button:hover { background-color: #555; }
    `;

    document.head.appendChild(styleElement);
    document.body.appendChild(modal);

    modal.querySelector('.confirm-button').addEventListener('click', function() {
        const oldData = JSON.stringify(localStorage); 
        form.submit();
        setTimeout(() => { for (const key in JSON.parse(oldData)) localStorage.setItem(key, JSON.parse(oldData)[key]); }, 100);
    });

    modal.querySelector('.close-button').addEventListener('click', function() {
        modal.remove();
        styleElement.remove();
    });
});
    
})();

//Curtir comentários de divulgação do FireDeluxe (para destacar o comentário)
(function() {
    'use strict';

if (window.location.href.includes('/animes/')) {
    const targetProfile = 'https://animefire.plus/users/988233449';
    let checkCount = 0;
    const maxChecks = 30;
    const processedComments = new Set();

    const checkAndLikeComments = () => {
        if (checkCount >= maxChecks) return;

        document.querySelectorAll(`a.usr_name_cmt[href="${targetProfile}"]`).forEach(userLink => {
            const comment = userLink.closest('.cmt');
            if (!comment || processedComments.has(comment.id)) return;

            const commentId = comment.id.replace('cmt-', '');
            const likeImg = comment.querySelector('.curtir_cmt.mr-1');
            
            if (likeImg && likeImg.src.includes('/like.png')) {
                processedComments.add(comment.id);
                
                fetch('https://animefire.plus/proc/cmt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        cmt_ct_lk: commentId,
                        type: 'cmt',
                        action: 'like'
                    })
                })
                .then(res => res.text())
                .then(console.log)
                .catch(console.error);
            }
        });

        checkCount++;
        if (checkCount < maxChecks) {
            setTimeout(checkAndLikeComments, 1000);
        }
    };

    checkAndLikeComments();
}

})();

//Botão de baixar todos os episódios
(function() {
    'use strict';

const checkAndAddDownloadButton = () => {
  const themeColor = localStorage.getItem('firedeluxe_configuracoes') ? JSON.parse(localStorage.getItem('firedeluxe_configuracoes')).themeColor : '#FFA500';
  const episodesSection = document.querySelector('section.mt-3.mb-2[style*="background-color:#161616"] h2.tEp');
  if (!episodesSection || episodesSection.textContent !== "Episódios") return false;

  const episodesContainer = episodesSection.closest('section').querySelector('.div_video_list');
  if (!episodesContainer) return false;

  const currentUrl = window.location.href;
  const animeSlug = currentUrl.match(/\/animes\/(.*?)-todos-os-episodios/)?.[1] || currentUrl.match(/\/animes\/([^\/]+)/)?.[1];

  const downloadAllBtn = document.createElement('button');
  downloadAllBtn.textContent = 'Baixar Todos Episódios';
  downloadAllBtn.style.cssText = `padding:10px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;margin:10px auto;display:block;font-weight:bold;`;
  
  episodesSection.closest('section').insertBefore(downloadAllBtn, episodesContainer);

  downloadAllBtn.addEventListener('click', () => {
    showQualityModal();
  });

  function showQualityModal() {
    const modalContent = `
      <div style="text-align:center;margin-bottom:15px;position:relative;">
        <button id="close-modal" style="position:absolute;right:0;top:0;background:none;border:none;color:${themeColor};font-size:1.5em;cursor:pointer;">×</button>
        <p style="margin-bottom:20px;">Selecione a qualidade desejada:</p>
        <p style="font-size:12px;color:#aaa;margin:-15px 0 20px 0;">Se a página for redirecionada para um "404 not found" é porque o episódio tem algum erro e não pode ser baixado</p>
        <div style="display:flex;justify-content:center;gap:15px;">
          <button id="quality-sd" style="padding:10px 20px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;">SD (480p)</button>
          <button id="quality-hd" style="padding:10px 20px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;">HD (720p)</button>
        </div>
      </div>
      <div id="results-container" style="max-height:300px;overflow-y:auto;margin-top:15px;border-top:1px solid #333;padding-top:15px;">
        <p style="text-align:center;color:#aaa;">Preparando downloads...</p>
      </div>
    `;

    showModal('Selecionar Qualidade', modalContent, null, true);

    document.getElementById('quality-sd').addEventListener('click', () => startDownloads('SD'));
    document.getElementById('quality-hd').addEventListener('click', () => startDownloads('HD'));
    document.getElementById('close-modal').addEventListener('click', closeModal);
  }

  async function startDownloads(quality) {
    const resultsContainer = document.querySelector('#results-container');
    resultsContainer.innerHTML = '<div style="text-align:center;padding:10px;"><div class="spinner"></div><p>Iniciando downloads...</p></div>';
    
    const episodeLinks = Array.from(episodesContainer.querySelectorAll('a.lEp'));
    if (episodeLinks.length === 0) return;

    for (const [index, episodeLink] of episodeLinks.entries()) {
      const episodeNum = episodeLink.href.split('/').pop();
      const episodeTitle = episodeLink.textContent.trim();
      const downloadPageUrl = `https://animefire.plus/download/${animeSlug}/${episodeNum}`;
      
      try {
        const response = await fetch(downloadPageUrl);
        
        if (response.redirected && response.url.includes('404')) {
          addResultToModal(episodeTitle, 'failed', 'Erro: Página não encontrada (404)');
          continue;
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const qualityContainer = doc.querySelector('.d-flex[style="flex-direction:column"]');
        if (!qualityContainer) {
          addResultToModal(episodeTitle, 'failed', 'Estrutura de download não encontrada');
          continue;
        }

        const qualityButtons = qualityContainer.querySelectorAll('a');
let selectedButton = Array.from(qualityButtons).find(btn => btn.textContent.trim() === quality && btn.href);
if (!selectedButton) {
  const fallbackQuality = quality === 'HD' ? 'SD' : 'HD';
  selectedButton = Array.from(qualityButtons).find(btn => btn.textContent.trim() === fallbackQuality && btn.href);
  if (selectedButton) {
    addResultToModal(episodeTitle, 'success', `Qualidade ${quality} indisponível, baixando ${fallbackQuality}`);
  } else {
    addResultToModal(episodeTitle, 'failed', `Nenhuma qualidade disponível`);
    continue;
  }
}
        if (selectedButton && selectedButton.href) {
          const downloadUrl = selectedButton.href;
          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = `${animeSlug}-ep${episodeNum}-${quality.toLowerCase()}.mp4`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          addResultToModal(episodeTitle, 'success', `Download iniciado (${quality})`);
        } else {
          addResultToModal(episodeTitle, 'failed', `Qualidade ${quality} não disponível`);
        }
      } catch (error) {
        console.error('Erro ao processar episódio:', error);
        addResultToModal(episodeTitle, 'failed', 'Erro ao processar');
      }

      if (index < episodeLinks.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }

  function addResultToModal(episodeName, status, message) {
    const resultsContainer = document.querySelector('#results-container');
    if (resultsContainer.innerHTML.includes('Preparando downloads') || resultsContainer.innerHTML.includes('Iniciando downloads')) {
      resultsContainer.innerHTML = '';
    }

    const color = status === 'success' ? '#4CAF50' : '#F44336';
    const icon = status === 'success' ? '✓' : '✗';

    const resultItem = `
      <div style="display:flex;align-items:center;padding:8px 0;border-bottom:1px solid #333;">
        <div style="width:30px;text-align:center;font-weight:bold;color:${color};">${icon}</div>
        <div style="flex:1;">
          <div style="font-weight:bold;">${episodeName}</div>
          <div style="font-size:0.9em;color:#aaa;">${message}</div>
        </div>
      </div>
    `;
    
    resultsContainer.insertAdjacentHTML('beforeend', resultItem);
    resultsContainer.scrollTop = resultsContainer.scrollHeight;
  }

  function showModal(title, content, actionUrl = null, keepOpen = false) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-panel';
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    modal.innerHTML = `
      <div class="modal-header">
        <h3>${title}</h3>
      </div>
      <div class="modal-content">
        ${content}
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .modal-overlay {position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:10000;}
      .modal-panel {background-color:#222;border:2px solid ${themeColor};border-radius:8px;width:90%;max-width:500px;color:#EEE;box-shadow:0 0 20px rgba(${hexToRgb(themeColor)},0.3);}
      .modal-header {padding:15px;border-bottom:1px solid ${themeColor};background:rgba(${hexToRgb(themeColor)},0.1);}
      .modal-header h3 {margin:0;color:${themeColor};text-align:center;font-size:1.3em;font-weight:bold;}
      .modal-content {padding:15px;line-height:1.6;}
      #close-modal {font-weight:bold;padding:0 10px;}
      #close-modal:hover {color:#fff;}
      .spinner {border:3px solid rgba(${hexToRgb(themeColor)},0.3);border-radius:50%;border-top:3px solid ${themeColor};width:20px;height:20px;animation:spin 1s linear infinite;margin:0 auto 10px;}
      @keyframes spin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
    `;

    overlay.appendChild(modal);
    document.body.appendChild(style);
    document.body.appendChild(overlay);
  }

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }

  function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.remove();
    const style = document.querySelector('style');
    if (style) style.remove();
  }
  
  return true;
};

let checkCount = 0;
const maxChecks = 30;
const checkInterval = 1000;

const checkIntervalId = setInterval(() => {
  if (checkAndAddDownloadButton()) {
    clearInterval(checkIntervalId);
  } else if (checkCount >= maxChecks) {
    clearInterval(checkIntervalId);
  }
  checkCount++;
}, checkInterval);

})();

//Se parar em um dowload com o episódio com erro, volta para a página anterior, onde está sendo realizado o dowload de todos os eps (é uma função pro botão de baixar todos os eps)
(function() {
    'use strict';

if (document.body.innerHTML.includes('<h1>404 Not Found</h1>') && location.href.includes('https://lightspeedst.net/')) {
  window.history.back();
}

})();

//Divulgar discord da maior comunidade do animefire
(function() {
    'use strict';

if (!document.cookie.includes('firedeluxe_discord_modal')) {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '9999';

  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#36393f';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '8px';
  modalContent.style.maxWidth = '400px';
  modalContent.style.textAlign = 'center';
  modalContent.style.color = 'white';

  const message = document.createElement('p');
  message.textContent = 'Junte-se à nossa vibrante comunidade no Discord! AnimeFire é um servidor criado por fãs, para fãs, onde você pode discutir seus animes favoritos, fazer amigos e ficar por dentro das novidades.';
  message.style.marginBottom = '20px';

  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.gap = '10px';

  const joinButton = document.createElement('button');
  joinButton.textContent = 'Entrar';
  joinButton.style.padding = '10px 20px';
  joinButton.style.backgroundColor = '#5865F2';
  joinButton.style.color = 'white';
  joinButton.style.border = 'none';
  joinButton.style.borderRadius = '4px';
  joinButton.style.cursor = 'pointer';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Fechar';
  closeButton.style.padding = '10px 20px';
  closeButton.style.backgroundColor = '#4f545c';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '4px';
  closeButton.style.cursor = 'pointer';

  joinButton.addEventListener('click', () => {
    window.open('https://discord.gg/PTnkFaNR8Y', '_blank');
    document.cookie = 'firedeluxe_discord_modal=shown; expires=Fri, 31 Dec 2999 23:59:59 GMT; path=/';
    document.body.removeChild(modal);
  });

  closeButton.addEventListener('click', () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    document.cookie = `firedeluxe_discord_modal=shown; expires=${date.toUTCString()}; path=/`;
    document.body.removeChild(modal);
  });

  buttonContainer.appendChild(joinButton);
  buttonContainer.appendChild(closeButton);
  modalContent.appendChild(message);
  modalContent.appendChild(buttonContainer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

})();

//FireDeluxe na biografia (caso a configuração esteja ativa)
(function() {
    'use strict';

    const config = JSON.parse(localStorage.getItem('firedeluxe_configuracoes') || '{}');
    const msgDivulgacao = 'Instale o mod do AnimeFire: https://mikill73.github.io/FireDeluxe/';

    if (config.divulgar === 'on' && window.location.href.includes('https://animefire.plus/users/')) {
        const form = document.getElementById('formEditProfile');
        if (form) {
            const username = form.querySelector('input[name="username"]').value;
            const bioAtual = form.querySelector('textarea[name="bio"]').value;
            const publicProfile = form.querySelector('input[name="public_profile"]:checked').value;
            const sexo = form.querySelector('input[name="sexo"]:checked').value;
            const frFwho = form.querySelector('input[name="fr_fwho"]:checked').value;
            const publicPv = form.querySelector('input[name="public_pv"]:checked').value;
            
            if (bioAtual.includes(msgDivulgacao)) {
                return;
            }
            
            let novaBio = bioAtual.trim();
            if (novaBio.length > 0) {
                novaBio += '\n' + msgDivulgacao;
            } else {
                novaBio = msgDivulgacao;
            }
            
            if (novaBio.length <= 350) {
                const formData = new FormData();
                formData.append('username', username);
                formData.append('bio', novaBio);
                formData.append('public_profile', publicProfile);
                formData.append('sexo', sexo);
                formData.append('fr_fwho', frFwho);
                formData.append('public_pv', publicPv);
                
                fetch('https://animefire.plus/edit/update_data', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include'
                });
            }
        }
    }
})();

//Notificar o usuário de mensagens novas, sem recarregar a página
(function() {
    'use strict';

function showModal(title, content, actionUrl = null) {
  const existingModal = document.querySelector('.modal-overlay');
  if (existingModal) existingModal.remove();

  const themeColor = getThemeColor();
  const modal = document.createElement('div');
  modal.className = 'modal-panel';
  
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  modal.innerHTML = `
    <div class="modal-header">
      <h3>${title}</h3>
    </div>
    <div class="modal-content">
      ${content}
    </div>
    <div class="modal-buttons">
      ${actionUrl ? `
        <a href="${actionUrl}" target="_blank" class="update-button" style="background-color: ${themeColor};">
          Ver Mensagem
        </a>` : ''}
      <button class="close-button">
        Fechar
      </button>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    }
    .modal-panel {
      background-color: #222;
      border: 1px solid ${themeColor};
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
      color: #EEE;
    }
    .modal-header {
      padding: 15px;
      border-bottom: 1px solid #333;
    }
    .modal-header h3 {
      margin: 0;
      color: ${themeColor};
      text-align: center;
      font-size: 1.2em;
    }
    .modal-content {
      padding: 20px;
      text-align: center;
      line-height: 1.6;
    }
    .modal-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      padding: 15px;
      border-top: 1px solid #333;
    }
    .update-button, .close-button {
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      border: none;
      transition: all 0.2s;
      font-size: 0.9em;
    }
    .update-button {
      background-color: ${themeColor};
      color: #000 !important;
      text-decoration: none;
    }
    .update-button:hover {
      opacity: 0.9;
    }
    .close-button {
      background-color: #444;
      color: #FFF !important;
    }
    .close-button:hover {
      background-color: #555;
    }
  `;

  overlay.appendChild(modal);
  document.body.appendChild(style);
  document.body.appendChild(overlay);

  overlay.querySelector('.close-button').addEventListener('click', () => {
    overlay.remove();
    style.remove();
  });
}

function fetchNotifications() {
  fetch('/proc/notifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'action=load'
  })
  .then(response => response.json())
  .then(data => handleNotificationResponse(data[0]))
  .catch(console.error);
}

function handleNotificationResponse(response) {
  if (response.target !== 'bell' || !response.data) return;

  const existingNotifications = getExistingNotifications();
  const newNotifications = response.data.filter(notification => {
    return !isNotificationInDOM(existingNotifications, notification);
  });

  if (newNotifications.length > 0) {
    updateNotificationCount(response.count);
    addNewNotifications(newNotifications);
    showNewMessageModal(newNotifications[0]);
  }
}

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

function getExistingNotifications() {
  const container = document.getElementById('card_group_notification');
  if (!container) return [];
  
  return Array.from(container.querySelectorAll('a.dropdown-item')).map(item => {
    const link = item.getAttribute('href').replace('https://animefire.plus', '');
    const texto = decodeHtmlEntities(item.querySelector('.reply_noti_span').textContent.trim());
    const username = item.querySelector('.noti_us').textContent.trim();
    const slug = item.querySelector('.span_icon_lk_noti span').textContent.trim();
    const time = item.querySelector('.noti_data').textContent.trim();
    
    return { link, texto, username, slug, time };
  });
}

function isNotificationInDOM(existingNotifications, newNotification) {
  const normalizedNew = {
    link: newNotification.link,
    texto: decodeHtmlEntities(newNotification.texto).trim(),
    username: newNotification.username.trim(),
    slug: newNotification.slug.trim(),
    time: newNotification.time.trim()
  };

  return existingNotifications.some(existing => {
    return existing.link === normalizedNew.link &&
           existing.texto === normalizedNew.texto &&
           existing.username === normalizedNew.username &&
           existing.slug === normalizedNew.slug &&
           existing.time === normalizedNew.time;
  });
}

function updateNotificationCount(count) {
  const badge = document.querySelector('.badge-notification');
  if (badge) badge.textContent = count;
}

function addNewNotifications(notifications) {
  const container = document.getElementById('card_group_notification');
  if (!container) return;

  notifications.reverse().forEach(notification => {
    const notificationElement = createNotificationElement(notification);
    const hrElement = createHrElement();
    container.insertBefore(hrElement, container.firstChild);
    container.insertBefore(notificationElement, container.firstChild);
  });
}

function createNotificationElement(notification) {
  const themeColor = getThemeColor();
  const element = document.createElement('a');
  element.className = 'dropdown-item px-2 py-2';
  element.href = `https://animefire.plus${notification.link}`;
  element.style.whiteSpace = 'unset !important';
  element.setAttribute('data-tema-processado', 'true');

  element.innerHTML = `
    <div class="d-flex" data-tema-processado="true">
      <div style="width:115px" data-tema-processado="true">
        <img class="img_cmt_noti mr-2" src="https://animefire.plus${notification.reply_avatar}" data-tema-processado="true">
      </div>
      <div class="spanTextNT" style="width:100%;display:flex;flex-direction:column;justify-content:space-between" data-tema-processado="true">
        <div style="overflow:hidden;text-align:left" data-tema-processado="true">
          <div class="d-flex" data-tema-processado="true">
            <div data-tema-processado="true">
              <span class="mr-2 noti_us" data-tema-processado="true" style="color: ${themeColor};">${notification.username}</span>
              <span class="span_rspd" data-tema-processado="true">respondeu:</span>
            </div>
          </div>
          <span class="reply_noti_span my-2" style="line-height:18px;display:block" data-tema-processado="true">${decodeHtmlEntities(notification.texto)}</span>
        </div>
        <div class="d-flex justify-content-between" style="margin-bottom:-3px" data-tema-processado="true">
          <span class="span_icon_lk_noti" data-tema-processado="true">
            <img class="mr-1" src="https://animefire.plus/img/icons/link.png" data-tema-processado="true">
            <span data-tema-processado="true">${notification.slug}</span>
          </span>
          <span class="pl-2 noti_data d-flex" data-tema-processado="true" style="color: ${themeColor};">${notification.time}</span>
        </div>
      </div>
    </div>
  `;

  return element;
}

function createHrElement() {
  const hr = document.createElement('hr');
  hr.className = 'rmvLinha_cmt_msg my-0';
  hr.setAttribute('data-tema-processado', 'true');
  return hr;
}

function showNewMessageModal(notification) {
  const themeColor = getThemeColor();
  const content = `
    <div class="notification-content">
      <div style="display:flex;align-items:center;gap:15px;margin-bottom:15px;">
        <img src="https://animefire.plus${notification.reply_avatar}" style="width:50px;height:50px;border-radius:50%;border:2px solid ${themeColor};">
        <div>
          <div style="font-weight:bold;color:${themeColor};">${notification.username}</div>
          <div style="font-size:0.9em;">${notification.time}</div>
        </div>
      </div>
      <div style="background:rgba(0,0,0,0.2);padding:15px;border-radius:8px;border-left:3px solid ${themeColor};">
        ${decodeHtmlEntities(notification.texto)}
      </div>
      <div style="margin-top:15px;font-size:0.8em;display:flex;align-items:center;gap:5px;">
        <img src="https://animefire.plus/img/icons/link.png" style="width:12px;">
        ${notification.slug}
      </div>
    </div>
  `;

  showModal('Nova Mensagem', content, `https://animefire.plus${notification.link}`);
}

function getThemeColor() {
  try {
    const config = JSON.parse(localStorage.getItem('firedeluxe_configuracoes'));
    return config?.themeColor || '#FFA500';
  } catch {
    return '#FFA500';
  }
}

function waitForElement(selector, callback) {
  const interval = setInterval(() => {
    const el = document.querySelector(selector);
    if (el) {
      clearInterval(interval);
      setTimeout(() => callback(el), 1000);
    }
  }, 100);
}

waitForElement('#card_group_notification', () => {
  fetchNotifications();
  setInterval(fetchNotifications, 30000);
});

})();
