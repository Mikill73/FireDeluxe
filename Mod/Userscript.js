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

//AdBlocker
(function() {
    'use strict';

    const configStr = localStorage.getItem('firedeluxe_configuracoes');
    let config;
    if (configStr) {
        try {
            config = JSON.parse(configStr);
        } catch {}
    }
    
    const shouldBlockAds = !config || config.adblocker === 'on';
    
    const adPatterns = {
        scripts: [
            'thumbmark', 'af.js', 'aclib.js', 'displayvertising.com',
            'acscdn.com/script/suv5.js', 'acscdn.com/script/banner.js',
            'adsco.re', 'organicowner.com', 'auwwmwkduhcfqolda',
            'cloudflareinsights.com', 'popper.js/1.11.0/umd/popper.min.js'
        ],
        meta: [
            'admaven-placement', 'a.validate.01'
        ],
        links: [
            'youradexchange.com', 'acscdn.com', 'c.adsco.re', 'displayvertising.com',
            'adexchangeclear.com', 'organicowner.com'
        ],
        elements: [
            '#page-mask', '.ad-box', '#dontfoid', 'div.ad-box',
            'iframe[src="javascript:false"][width="0"][height="0"][style="display: none;"]',
            'a[href*="adexchangeclear.com/ad/visit.php?al="][style*="display: none"][style*="left: -1000px"]',
            'a[href*="organicowner.com"]',
            'div[style*="Adblock detectado"]',
            'div[style="text-align: center; padding-top: 48vh; font-size: 4vw; position: fixed; display: block; width: 100%; height: 100%; inset: 0px; background-color: rgba(0, 0, 0, 0); z-index: 300000;"]',
            'link[rel="dns-prefetch"][href*="adexchangeclear.com"]'
        ],
        iframeStyles: {
            position: 'absolute',
            top: '-1000px',
            left: '-1000px',
            visibility: 'hidden'
        }
    };
    
    const blockedDomains = ['displayvertising.com', 'youradexchange.com', 'adsco.re', 'adexchangeclear.com', 'organicowner.com'];
    
    function matchesStyles(element, styles) {
        return Object.entries(styles).every(([prop, value]) => {
            return window.getComputedStyle(element).getPropertyValue(prop) === value;
        });
    }
    
    function updateAdCounter(count) {
        const savedSettings = localStorage.getItem('firedeluxe_configuracoes');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            settings.adsBloqueados = (settings.adsBloqueados || 0) + count;
            localStorage.setItem('firedeluxe_configuracoes', JSON.stringify(settings));
        }
    }
    
    function removeElements() {
        if (!shouldBlockAds) return;
    
        let adCounter = 0;
    
        const patterns = [
            { type: 'scripts', selector: 'script[src*=""]' },
            { type: 'meta', selector: 'meta[name=""]' },
            { type: 'links', selector: 'link[href*=""]' },
            { type: 'elements', selector: '' }
        ];
    
        patterns.forEach(pattern => {
            if (pattern.type === 'elements') {
                adPatterns.elements.forEach(selector => {
                    document.querySelectorAll(selector).forEach(e => {
                        e.remove();
                        adCounter++;
                    });
                });
            } else {
                adPatterns[pattern.type].forEach(item => {
                    const selector = pattern.selector.replace('*=""', `*="${item}"`);
                    document.querySelectorAll(selector).forEach(e => {
                        e.remove();
                        adCounter++;
                    });
                });
            }
        });
    
        document.querySelectorAll('iframe').forEach(iframe => {
            if (matchesStyles(iframe, adPatterns.iframeStyles)) {
                iframe.remove();
                adCounter++;
            }
        });
    
        document.querySelectorAll('script').forEach(script => {
            const content = script.textContent;
            if (content.includes('showAdAlert') || 
                content.includes('site_url') || 
                content.includes('aclib.runPop') || 
                content.trim().startsWith('(function(options){')) {
                script.remove();
                adCounter++;
            }
        });
    
        if (adCounter > 0) {
            updateAdCounter(adCounter);
        }
    }
    
    function cleanStorage() {
        document.cookie.split(';').forEach(cookie => {
            const name = cookie.split('=')[0].trim();
            if (name.startsWith('PopAds')) {
                document.cookie = name + '=; Max-Age=0; path=/; domain=' + location.hostname;
            }
        });
    
        ['_spop_popfired', '_spop_popfired_expires', '_spoplastOpenAt', '__tlopundefined'].forEach(key => {
            localStorage.removeItem(key);
        });
    }
    
    function blockWindowOpen() {
        const originalOpen = window.open;
        window.open = function(url, ...args) {
            if (typeof url === 'string' && blockedDomains.some(d => url.includes(d))) return null;
            return originalOpen.call(window, url, ...args);
        };
    }
    
    function blockHistoryChanges() {
        const blockURL = (url) => {
            return typeof url === 'string' && blockedDomains.some(d => url.includes(d));
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
    }
    
    function setupObservers() {
        const observer = new MutationObserver(() => {
            removeElements();
            document.querySelectorAll('iframe').forEach(iframe => {
                if (blockedDomains.some(d => iframe.src.includes(d))) {
                    iframe.remove();
                    updateAdCounter(1);
                }
            });
        });
    
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true
        });
    }
    
    function init() {
        window.showAdAlert = function() {};
        window.chromeadblocked = false;
    
        removeElements();
        cleanStorage();
        blockWindowOpen();
        blockHistoryChanges();
        setupObservers();
    }
    
    init();
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
                    </div>
                    <div class="manual-update-container">
                        <div class="manual-update-warning">Caso o botão de Atualizar não funcione:</div>
                        <div class="link-container">
                            <input type="text" value="https://update.greasyfork.org/scripts/470618/FireDeluxe.user.js" readonly class="update-link">
                            <button class="copy-button">Copiar</button>
                        </div>
                        <div class="instructions">Cole esse link na barra de pesquisa do navegador</div>
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
            `<div class="update-message">Uma atualização do FireDeluxe está disponível.</div>
            <div class="manual-update-container">
                <div class="manual-update-warning">Caso o botão de Atualizar não funcione:</div>
                <div class="link-container">
                    <input type="text" value="https://update.greasyfork.org/scripts/470618/FireDeluxe.user.js" readonly class="update-link">
                    <button class="copy-button">Copiar</button>
                </div>
                <div class="instructions">Cole esse link na barra de pesquisa do navegador</div>
            </div>`,
            'https://greasyfork.org/pt-BR/scripts/470618-firedeluxe'
        );
    }

    function showModal(title, content, actionUrl = null) {
        const existingModal = document.querySelector('.modal-overlay');
        if (existingModal) existingModal.remove();

        let themeColor = '#FFA500';
        try {
            const config = JSON.parse(localStorage.getItem('firedeluxe_configuracoes'));
            if (config && config.themeColor) {
                themeColor = config.themeColor.startsWith('#') ? config.themeColor : `#${config.themeColor}`;
            }
        } catch (e) {
            console.log('Erro ao ler cor do tema:', e);
        }

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
                    <a href="${actionUrl}" target="_blank" rel="noopener noreferrer" class="update-button">
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
            .update-message {
                color: #EEE;
                margin-bottom: 15px;
                font-size: 1em;
            }
            .error-message {
                color: #EEE;
            }
            .version-container {

                background: rgba(0,0,0,0.3);
                padding: 15px;
                border-radius: 6px;
                margin-top: 10px;
                margin-bottom: 15px;
            }
            .version-container strong {
                color: ${themeColor};
            }
            .version-text {
                color: #FFF;
                background-color: #333;
                padding: 3px 8px;
                border-radius: 4px;
                font-family: monospace;
                display: inline-block;
                margin: 3px 0;
            }
            .manual-update-container {
                background: rgba(0,0,0,0.2);
                padding: 15px;
                border-radius: 6px;
                margin-top: 15px;
                border: 1px dashed ${themeColor}66;
            }
            .manual-update-warning {
                color: ${themeColor};
                margin-bottom: 10px;
                font-size: 0.9em;
            }
            .link-container {
                display: flex;
                gap: 5px;
                margin-bottom: 8px;
            }
            .update-link {
                flex: 1;
                padding: 8px;
                background-color: #333;
                border: 1px solid #444;
                border-radius: 4px;
                color: #EEE;
                font-family: monospace;
                font-size: 0.8em;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .copy-button {
                padding: 8px 12px;
                background-color: ${themeColor};
                color: #000;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
                transition: background-color 0.2s;
            }
            .copy-button:hover {
                background-color: ${adjustBrightness(themeColor, 15)};
            }
            .instructions {
                font-size: 0.8em;
                color: #AAA;
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
                color: #000;
                text-decoration: none;
            }
            .update-button:hover {
                background-color: ${adjustBrightness(themeColor, 20)};
            }
            .close-button {
                background-color: #444;
                color: #FFF;
            }
            .close-button:hover {
                background-color: #555;
            }
        `;

        overlay.appendChild(modal);
        document.body.appendChild(style);
        document.body.appendChild(overlay);

        const copyButton = overlay.querySelector('.copy-button');
        if (copyButton) {
            copyButton.addEventListener('click', () => {
                const linkInput = overlay.querySelector('.update-link');
                linkInput.select();
                document.execCommand('copy');
                
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copiado!';
                copyButton.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.style.backgroundColor = themeColor;
                }, 2000);
            });
        }

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.classList.contains('close-button')) {
                overlay.remove();
                style.remove();
            }
        });
    }

    function adjustBrightness(color, percent) {
        let R = parseInt(color.substring(1,3), 16);
        let G = parseInt(color.substring(3,5), 16);
        let B = parseInt(color.substring(5,7), 16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = R < 255 ? R : 255;
        G = G < 255 ? G : 255;
        B = B < 255 ? B : 255;

        const RR = R.toString(16).padStart(2, '0');
        const GG = G.toString(16).padStart(2, '0');
        const BB = B.toString(16).padStart(2, '0');

        return `#${RR}${GG}${BB}`;
    }

    checkVersion();
})();

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
    mainButton.id = "menuPrincipal";

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
            name: 'Informações',
            buttons: [
                {
                    name: 'Contribuição',
                    storageKey: 'contribuição',
                    type: 'js',
                    info: 'Formas de contribuir ou agradecer (não inclui uso monetário)'
                }
            ]
        },
        {
            name: 'Informações',
            buttons: [
                {
                    name: 'Funcionalidades',
                    storageKey: 'funcionalidades',
                    type: 'js',
                    info: 'Tudo que o FireDeluxe tem a oferecer'
                }
            ]
        },
        {
            name: 'Funções',
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
            name: 'Funções',
            buttons: [
                {
                    name: 'Bloqueados',
                    storageKey: 'bloqueados',
                    type: 'html',
                    info: 'Bloqueie usuários com o FireDeluxe (o bloquear do site não funciona)'
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
            .counter-text {
                font-size: 0.85em;
                color: #4CAF50;
                margin-top: 5px;
                line-height: 1.4;
                font-weight: bold;
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
                <h3 class="section-title">Intervalo entre Downloads</h3>
                <div class="settings-row">
                    <label class="settings-label">Tempo (minutos):</label>
                    <input type="number" class="settings-input" id="downloadInterval" min="3" max="30" value="5">
                </div>
                <div class="info-text">
                    Define o intervalo entre downloads automáticos de episódios. Mínimo: 3 minutos, Máximo: 30 minutos.
                </div>
                <div class="warning-text">
                    Esta configuração é usada pela função de download automático de múltiplos episódios.
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
                <div class="counter-text" id="adblockCounter">
                    Elementos de anúncios removidos: 0
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
                <h3 class="section-title">Carregar Todas as Temporadas</h3>
                <div class="settings-row">
                    <label class="settings-label">Ativar função:</label>
                    <label class="switch">
                        <input type="checkbox" id="allSeasonsToggle">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="info-text">
                    Quando ativado, tenta carregar todas as temporadas de um anime em uma única página. Uma tela de carregamento será exibida durante o processo.
                </div>
                <div class="warning-text">
                    Esta função não funciona para todos os animes e pode aumentar o tempo de carregamento.
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
            let allSeasonsEnabled = false;
    
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
    
                    if (settings.allSeasons) {
                        allSeasonsEnabled = settings.allSeasons === 'on';
                        document.getElementById('allSeasonsToggle').checked = allSeasonsEnabled;
                    }
    
                    if (settings.email) {
                        document.getElementById('automationEmail').value = settings.email;
                    }
    
                    if (settings.senha) {
                        document.getElementById('automationPassword').value = settings.senha;
                    }
    
                    if (settings.downloadInterval) {
                        document.getElementById('downloadInterval').value = settings.downloadInterval;
                    }
    
                    if (settings.adsBloqueados) {
                        document.getElementById('adblockCounter').textContent = 'Elementos de anúncios removidos: ' + settings.adsBloqueados;
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
    
            function handleImageUpload(inputId, previewId, containerId, errorId) {
                const file = document.getElementById(inputId).files[0];
                const errorElement = document.getElementById(errorId);
                errorElement.style.display = 'none';
                
                if (file) {
                    if (file.size > 5 * 1024 * 1024) {
                        errorElement.style.display = 'block';
                        document.getElementById(inputId).value = '';
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        if (inputId === 'siteBgImage') {
                            siteBgDataUrl = event.target.result;
                        } else if (inputId === 'chatBgImage') {
                            chatBgDataUrl = event.target.result;
                        }
                        
                        document.getElementById(previewId).src = event.target.result;
                        document.getElementById(containerId).style.display = 'block';
                    };
                    reader.onerror = function() {
                        errorElement.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                }
            }
    
            function removeImage(inputId, previewId, containerId, errorId) {
                document.getElementById(inputId).value = '';
                document.getElementById(previewId).src = '';
                document.getElementById(containerId).style.display = 'none';
                document.getElementById(errorId).style.display = 'none';
                
                if (inputId === 'siteBgImage') {
                    siteBgDataUrl = '';
                } else if (inputId === 'chatBgImage') {
                    chatBgDataUrl = '';
                }
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
    
            document.getElementById('siteBgImage').addEventListener('change', function() {
                handleImageUpload('siteBgImage', 'siteBgPreview', 'siteBgPreviewContainer', 'siteBgError');
            });
    
            document.getElementById('removeSiteBg').addEventListener('click', function() {
                removeImage('siteBgImage', 'siteBgPreview', 'siteBgPreviewContainer', 'siteBgError');
            });
    
            document.getElementById('chatBgImage').addEventListener('change', function() {
                handleImageUpload('chatBgImage', 'chatBgPreview', 'chatBgPreviewContainer', 'chatBgError');
            });
    
            document.getElementById('removeChatBg').addEventListener('click', function() {
                removeImage('chatBgImage', 'chatBgPreview', 'chatBgPreviewContainer', 'chatBgError');
            });
    
            document.getElementById('saveSettings').addEventListener('click', function() {
                const downloadInterval = document.getElementById('downloadInterval').value;
                const intervalValue = Math.min(30, Math.max(3, parseInt(downloadInterval) || 5));
                
                const savedSettings = localStorage.getItem('firedeluxe_configuracoes');
                const currentSettings = savedSettings ? JSON.parse(savedSettings) : {};
                const currentAds = currentSettings.adsBloqueados || 0;
                
                const settings = {
                    themeColor: themeColor,
                    siteBgImage: siteBgDataUrl,
                    chatBgImage: chatBgDataUrl,
                    adblocker: document.getElementById('adblockerToggle').checked ? 'on' : 'off',
                    divulgar: document.getElementById('divulgarToggle').checked ? 'on' : 'off',
                    allSeasons: document.getElementById('allSeasonsToggle').checked ? 'on' : 'off',
                    email: document.getElementById('automationEmail').value,
                    senha: document.getElementById('automationPassword').value,
                    downloadInterval: intervalValue,
                    adsBloqueados: currentAds
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
                    document.getElementById('allSeasonsToggle').checked = false;
                    document.getElementById('automationEmail').value = '';
                    document.getElementById('automationPassword').value = '';
                    document.getElementById('downloadInterval').value = '5';
                    document.getElementById('adblockCounter').textContent = 'Anúncios bloqueados nesta sessão: 0';
                    window.location.reload();
                }
            });
    
            loadSettings();
        </script>
    </body>
    </html>`;
    
    const dados = JSON.parse(localStorage.getItem('firedeluxe_codigos_html')) || {};
    dados.configuracoes = configuracoesHTML;
    localStorage.setItem('firedeluxe_codigos_html', JSON.stringify(dados));
})();

//Código do botão Contribuições
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
            icone: '💡'
        },
        {
            titulo: 'Deixar um feedback sobre o FireDeluxe no Discord',
            descricao: 'Avalie o userscript no Discord, o seu feedback vai aparecer no site para novos usuários verem!',
            icone: '⭐'
        },
        {
            titulo: 'Reportar erros',
            descricao: 'Percebeu qualquer erro no código? Algo que não está funcionando corretamente? É só reportar o erro no discord',
            icone: '🚨'
        },
        {
            titulo: 'Vídeo do FireDeluxe',
            descricao: 'Crie um vídeo do AnimeFire e promova o FireDeluxe, poste no YouTube e outras redes sociais',
            icone: '🎬'
        },
        {
            titulo: 'Doar para o Projeto',
            descricao: 'Faça uma doação para a chave pix 1cff435b-5c42-411b-9470-18aba4cd11d1',
            icone: '❤️'
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

        itemContent.appendChild(itemTitle);
        itemContent.appendChild(itemDesc);

        if (item.link && item.botaoTexto) {
            const actionButton = document.createElement('button');
            actionButton.className = 'secondary-button';
            actionButton.textContent = item.botaoTexto;
            actionButton.style.marginTop = '10px';

            actionButton.addEventListener('click', () => {
                window.open(item.link, '_blank');
            });

            itemContent.appendChild(actionButton);
        }

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

const dados = JSON.parse(localStorage.getItem('firedeluxe_codigos_js')) || {};
dados.contribuição = codigoJS;
localStorage.setItem('firedeluxe_codigos_js', JSON.stringify(dados));
})();

//Código do botão Funcionalidades
(function() {
  'use strict';

const codigoJS = `(() => {
    const fetchFeatures = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Mikill73/FireDeluxe/main/index.html');
            const text = await response.text();
            const match = text.match(/const features\\s*=\\s*(\\[[\\s\\S]*?\\n\\s*\\])/);
            if (match) {
                const featuresStr = match[1].replace(/\\s*\\/\\/.*/g, '');
                return JSON.parse(featuresStr.replace(/(\\w+)\\s*:/g, '"$1":'));
            }
            return null;
        } catch {
            return null;
        }
    };

    const getThemeColor = () => {
        try {
            const config = localStorage.getItem('firedeluxe_configuracoes');
            if (config) {
                const parsed = JSON.parse(config);
                return parsed.themeColor || '#FFA500';
            }
            return '#FFA500';
        } catch {
            return '#FFA500';
        }
    };

    const createUI = (features) => {
        const themeColor = getThemeColor();
        
        const style = document.createElement('style');
        style.textContent = \`.update-notifier-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.8);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
        }
        .update-panel {
            background-color: #222;
            border: 1px solid \${themeColor};
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 0 40px \${themeColor}30;
            width: 90%;
            max-width: 700px;
            max-height: 90vh;
            overflow: auto;
            color: #eee;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .update-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid \${themeColor};
        }
        .update-title {
            margin: 0;
            color: \${themeColor};
            font-size: 1.4em;
            font-weight: 600;
            text-shadow: 0 0 10px \${themeColor}30;
        }
        .close-button {
            padding: 6px 10px;
            background-color: #333;
            color: \${themeColor};
            border: 1px solid \${themeColor};
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 12px;
            font-weight: bold;
        }
        .close-button:hover {
            background-color: \${themeColor};
            color: #222;
            box-shadow: 0 0 10px \${themeColor}50;
        }
        .features-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .feature-item {
            padding: 10px 0;
            border-bottom: 1px solid #333;
            display: flex;
            align-items: center;
            transition: all 0.2s ease;
        }
        .feature-item:hover {
            background-color: \${themeColor}10;
        }
        .feature-item:last-child {
            border-bottom: none;
        }
        .feature-icon {
            margin-right: 12px;
            font-size: 1em;
            min-width: 16px;
            text-align: center;
        }
        .main-feature .feature-icon {
            color: \${themeColor};
        }
        .feature-text {
            flex-grow: 1;
        }\`;
        document.head.appendChild(style);

        const container = document.createElement('div');
        container.className = 'update-notifier-container';

        const panel = document.createElement('div');
        panel.className = 'update-panel';

        const header = document.createElement('div');
        header.className = 'update-header';

        const title = document.createElement('h2');
        title.className = 'update-title';
        title.textContent = 'Funcionalidades';

        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.textContent = '✕';
        closeButton.onclick = () => document.body.removeChild(container);

        header.appendChild(title);
        header.appendChild(closeButton);
        panel.appendChild(header);

        const featuresList = document.createElement('ul');
        featuresList.className = 'features-list';

        const buildFeatureTree = (parentId, level) => {
            const children = features.filter(f => f.parentId === parentId);
            if (children.length === 0) return;

            children.forEach(feature => {
                const item = document.createElement('li');
                item.className = \`feature-item \${level === 0 ? 'main-feature' : 'sub-feature'}\`;
                item.style.paddingLeft = \`\${level * 25 + 5}px\`;

                const icon = document.createElement('span');
                icon.className = 'feature-icon';
                icon.innerHTML = level === 0 ? '●' : '○';

                const text = document.createElement('span');
                text.className = 'feature-text';
                text.textContent = feature.text;

                item.appendChild(icon);
                item.appendChild(text);
                featuresList.appendChild(item);

                buildFeatureTree(feature.id, level + 1);
            });
        };

        buildFeatureTree(null, 0);
        panel.appendChild(featuresList);
        container.appendChild(panel);
        document.body.appendChild(container);
    };

    const init = async () => {
        const features = await fetchFeatures();
        if (features && features.length) {
            createUI(features);
        }
    };

    init();
})();`;

const dados = JSON.parse(localStorage.getItem('firedeluxe_codigos_js')) || {};
dados.funcionalidades = codigoJS;
localStorage.setItem('firedeluxe_codigos_js', JSON.stringify(dados));

})();

//Código do botão Bloqueados
(function() {
  'use strict';

const bloqueadosHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body {
  background-color: #111;
  margin: 0;
  padding: 0;
  color: #eee;
  font-family: Arial, sans-serif;
}

.block-container {
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
}

.block-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #444;
}

.block-title {
  margin: 0;
  color: #FFA500;
  font-size: 1.3em;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.block-input {
  flex-grow: 1;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: 1px solid #444;
  border-radius: 6px;
  font-size: 14px;
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
  background-color: #333;
  color: #fff;
  border: 1px solid #444;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.secondary-button:hover {
  background-color: #444;
}

.blocked-list {
  max-height: 50vh;
  overflow-y: auto;
  margin-top: 20px;
  border-top: 1px solid #444;
  padding-top: 15px;
}

.blocked-user {
  background-color: #333;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #444;
}

.user-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 2px solid #444;
}

.user-name {
  font-weight: bold;
  font-size: 1.1em;
  margin: 0;
}

.user-bio {
  font-size: 0.9em;
  color: #ccc;
  margin: 5px 0;
}

.user-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.remove-button {
  padding: 6px 12px;
  background-color: #522;
  color: #fff;
  border: 1px solid #733;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
}

.remove-button:hover {
  background-color: #733;
}

.cover-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}

.empty-message {
  text-align: center;
  color: #777;
  padding: 20px;
  font-style: italic;
}

.warning-message {
  background-color: #332200;
  border-left: 4px solid #FFA500;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 0.9em;
}
</style>
</head>
<body>
<div class="block-container">
  <div class="block-header">
    <h2 class="block-title">Bloquear Usuários</h2>
    <button id="backButton" class="secondary-button">Voltar</button>
  </div>

  <div class="warning-message">
    Você não vai poder ver as mensagens desse usuário nos comentários e as notificações vão ser ocultadas
  </div>

  <div class="input-container">
    <input id="userUrl" class="block-input" type="text" placeholder="https://animefire.plus/users/988233449">
    <button id="addButton" class="primary-button">Adicionar</button>
  </div>

  <div class="blocked-list" id="blockedList">
    <div class="empty-message">Nenhum usuário bloqueado</div>
  </div>

  <div class="user-actions">
    <button id="saveButton" class="primary-button">Salvar</button>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var backButton = document.getElementById('backButton');
  var addButton = document.getElementById('addButton');
  var saveButton = document.getElementById('saveButton');
  var userUrl = document.getElementById('userUrl');
  var blockedList = document.getElementById('blockedList');
  
  var blockedUsers = JSON.parse(localStorage.getItem('firedeluxe_bloqueados')) || [];

  function renderBlockedUsers() {
    if (blockedUsers.length === 0) {
      blockedList.innerHTML = '<div class="empty-message">Nenhum usuário bloqueado</div>';
      return;
    }

    blockedList.innerHTML = '';
    blockedUsers.forEach(function(user, index) {
      var userElement = document.createElement('div');
      userElement.className = 'blocked-user';
      userElement.innerHTML = (user.cover ? '<img src="' + user.cover + '" class="cover-image">' : '') +
        '<div class="user-header">' +
        (user.avatar ? '<img src="' + user.avatar + '" class="user-avatar">' : '') +
        '<h3 class="user-name">' + (user.name || 'Usuário sem nome') + '</h3>' +
        '</div>' +
        (user.bio ? '<p class="user-bio">' + user.bio + '</p>' : '') +
        '<div class="user-actions">' +
        '<button data-index="' + index + '" class="remove-button">Remover</button>' +
        '</div>';
      blockedList.appendChild(userElement);
    });

    document.querySelectorAll('.remove-button').forEach(function(button) {
      button.addEventListener('click', function(e) {
        var index = parseInt(e.target.getAttribute('data-index'));
        blockedUsers.splice(index, 1);
        renderBlockedUsers();
      });
    });
  }

  function fetchUserData(url) {
    return fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        
        var profileDiv = doc.getElementById('divProfileInfo');
        if (!profileDiv) return null;

        var coverDiv = profileDiv.querySelector('.divPimg');
        var avatarImg = profileDiv.querySelector('.imgP');
        var nameElement = profileDiv.querySelector('#checkUserName');
        var bioElement = profileDiv.querySelector('#spanBio');

        return {
          url: url,
          cover: coverDiv ? coverDiv.style.backgroundImage.replace('url("', '').replace('")', '') : null,
          avatar: avatarImg ? avatarImg.src : null,
          name: nameElement ? nameElement.textContent.trim() : null,
          bio: bioElement ? bioElement.textContent.trim() : null
        };
      })
      .catch(function(error) {
        return null;
      });
  }

  backButton.addEventListener('click', function() {
    location.reload();
  });

  addButton.addEventListener('click', function() {
    var url = userUrl.value.trim();
    if (!url) return;

    if (blockedUsers.some(function(user) { return user.url === url; })) {
      alert('Este usuário já está na lista de bloqueados.');
      return;
    }

    fetchUserData(url).then(function(userData) {
      if (!userData) {
        alert('Não foi possível obter informações do usuário. Verifique o URL.');
        return;
      }

      blockedUsers.push(userData);
      renderBlockedUsers();
      userUrl.value = '';
    });
  });

  saveButton.addEventListener('click', function() {
    localStorage.setItem('firedeluxe_bloqueados', JSON.stringify(blockedUsers));
    alert('Lista de bloqueados salva com sucesso!');
  });

  renderBlockedUsers();
});
</script>
</body>
</html>`;

var dados = JSON.parse(localStorage.getItem('firedeluxe_codigos_html')) || {};
dados.bloqueados = bloqueadosHTML;
localStorage.setItem('firedeluxe_codigos_html', JSON.stringify(dados));

})();

//Imagens de fundo Site e Chat
(function() {
  'use strict';

const aplicarImagensFundo = () => {
  if (window.location.href.startsWith('https://animefire.plus/verify')) return;
  
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
        const targetProfiles = [
            'https://animefire.plus/users/988233449',
            'https://animefire.plus/users/460906716'
        ];
        const processedComments = new Set();

        const processComment = (comment) => {
            if (processedComments.has(comment.id) || document.querySelector('a.nav-link[href="/verify/index"]')) return;

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
        };

        const checkComments = () => {
            document.querySelectorAll('a.usr_name_cmt').forEach(userLink => {
                if (targetProfiles.includes(userLink.href)) {
                    const comment = userLink.closest('.cmt');
                    if (comment) processComment(comment);
                }
            });
        };

        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length) {
                    checkComments();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        checkComments();
    }
})();

//Botão de baixar todos os episódios
(function() {
    'use strict';

const checkAndAddDownloadButtons = () => {
  if (!window.location.href.includes('todos-os-episodios')) return false;

  const themeColor = localStorage.getItem('firedeluxe_configuracoes') ? JSON.parse(localStorage.getItem('firedeluxe_configuracoes')).themeColor : '#FFA500';
  const seasonsSections = document.querySelectorAll('section.mt-3.mb-2[style*="background-color:#161616"]');
  const episodesHeader = document.querySelector('h2.tEp.py-3.mb-0');

  const currentUrl = window.location.href;
  const animeSlug = currentUrl.match(/\/animes\/(.*?)-todos-os-episodios/)?.[1] || currentUrl.match(/\/animes\/([^\/]+)/)?.[1];

  let addedButtons = 0;

  const hasMultipleSeasons = seasonsSections.length > 1;

  if (!hasMultipleSeasons) {
    const firstTarget = seasonsSections[0] || episodesHeader;
    if (firstTarget && !document.querySelector('.download-all-seasons-btn')) {
      const downloadAllSeasonsBtn = document.createElement('button');
      downloadAllSeasonsBtn.className = 'download-all-seasons-btn';
      downloadAllSeasonsBtn.textContent = 'Baixar Todos os Episódios';
      downloadAllSeasonsBtn.style.cssText = `padding:10px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;margin:10px auto;display:block;font-weight:bold;`;

      firstTarget.parentNode.insertBefore(downloadAllSeasonsBtn, firstTarget.nextSibling);
      downloadAllSeasonsBtn.addEventListener('click', () => showEpisodeSelection('all'));
      addedButtons++;
    }
  } else {
    const firstSeason = seasonsSections[0];
    if (firstSeason && !document.querySelector('.download-all-seasons-btn')) {
      const downloadAllSeasonsBtn = document.createElement('button');
      downloadAllSeasonsBtn.className = 'download-all-seasons-btn';
      downloadAllSeasonsBtn.textContent = 'Baixar Todas as Temporadas';
      downloadAllSeasonsBtn.style.cssText = `padding:10px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;margin:10px auto;display:block;font-weight:bold;`;

      firstSeason.parentNode.insertBefore(downloadAllSeasonsBtn, firstSeason);
      downloadAllSeasonsBtn.addEventListener('click', () => showEpisodeSelection('all'));
      addedButtons++;
    }

    seasonsSections.forEach((section, index) => {
      const seasonTitle = section.querySelector('h2.tEp');
      const episodesContainer = section.querySelector('.div_video_list');
      const existingButton = section.querySelector('.download-season-btn');
      if (!seasonTitle || !episodesContainer || existingButton) return;

      const seasonNumberMatch = seasonTitle.textContent.match(/Temporada (\d+)/i);
      const seasonNumber = seasonNumberMatch ? seasonNumberMatch[1] : index + 1;

      const downloadSeasonBtn = document.createElement('button');
      downloadSeasonBtn.className = 'download-season-btn';
      downloadSeasonBtn.dataset.seasonIndex = index;
      downloadSeasonBtn.textContent = `Baixar Temporada ${seasonNumber}`;
      downloadSeasonBtn.style.cssText = `padding:10px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;margin:10px auto;display:block;font-weight:bold;`;

      section.insertBefore(downloadSeasonBtn, episodesContainer);

      downloadSeasonBtn.addEventListener('click', (e) => {
        const seasonIdx = e.target.dataset.seasonIndex;
        showEpisodeSelection(seasonIdx);
      });

      addedButtons++;
    });
  }

  function showEpisodeSelection(seasonIndex) {
    let episodes = [];
    if (seasonIndex === 'all') {
      document.querySelectorAll('.div_video_list a.lEp').forEach(link => {
        episodes.push({
          href: link.href,
          title: link.textContent.trim(),
          num: link.href.split('/').pop(),
          selected: false
        });
      });
    } else {
      const seasonSection = document.querySelector(`section.mt-3.mb-2[style*="background-color:#161616"]:nth-of-type(${parseInt(seasonIndex) + 1})`);
      if (seasonSection) {
        seasonSection.querySelectorAll('a.lEp').forEach(link => {
          episodes.push({
            href: link.href,
            title: link.textContent.trim(),
            num: link.href.split('/').pop(),
            selected: false
          });
        });
      }
    }

    if (episodes.length === 0) return;

    const episodesList = episodes.map(ep => `
      <div class="episode-item" data-ep-num="${ep.num}" style="padding:10px;margin:5px 0;border-radius:4px;background:#333;cursor:pointer;transition:all 0.3s;">
        ${ep.title}
      </div>
    `).join('');

    const modalContent = `
      <div style="text-align:center;margin-bottom:15px;position:relative;">
        <button id="close-modal" style="position:absolute;right:0;top:0;background:none;border:none;color:${themeColor};font-size:1.5em;cursor:pointer;">×</button>
        <p style="margin-bottom:20px;">Clique nos episódios que deseja baixar:</p>
        <p style="font-size:12px;color:${themeColor};margin-bottom:15px;">Episódios selecionados: <span id="selected-count">0</span></p>
        <div style="max-height:300px;overflow-y:auto;margin-bottom:15px;border:1px solid #333;border-radius:4px;padding:10px;">
          ${episodesList}
        </div>
        <div style="display:flex;justify-content:center;gap:15px;">
          <button id="download-selected" style="padding:10px 20px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">Baixar Selecionados</button>
          <button id="download-all" style="padding:10px 20px;background:#444;color:#FFF;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">Baixar Todos</button>
        </div>
      </div>
    `;

    showModal('Selecionar Episódios', modalContent);

    const episodeElements = document.querySelectorAll('.episode-item');
    episodeElements.forEach(el => {
      el.addEventListener('click', () => {
        const epNum = el.dataset.epNum;
        const episodeIndex = episodes.findIndex(ep => ep.num === epNum);
        episodes[episodeIndex].selected = !episodes[episodeIndex].selected;
        el.style.borderLeft = episodes[episodeIndex].selected ? `4px solid ${themeColor}` : 'none';
        document.getElementById('selected-count').textContent = episodes.filter(ep => ep.selected).length;
      });
    });

    document.getElementById('download-selected').addEventListener('click', () => {
      const selected = episodes.filter(ep => ep.selected);
      if (selected.length === 0) return alert('Selecione pelo menos um episódio.');
      closeModal();
      showQualityModal(seasonIndex, selected);
    });

    document.getElementById('download-all').addEventListener('click', () => {
      closeModal();
      showQualityModal(seasonIndex, episodes);
    });

    document.getElementById('close-modal').addEventListener('click', closeModal);
  }

  function showQualityModal(seasonIndex, episodes) {
    const modalContent = `
      <div style="text-align:center;margin-bottom:15px;position:relative;">
        <button id="close-modal" style="position:absolute;right:0;top:0;background:none;border:none;color:${themeColor};font-size:1.5em;cursor:pointer;">×</button>
        <p style="margin-bottom:20px;">Selecione a qualidade desejada:</p>
        <div style="display:flex;justify-content:center;gap:15px;">
          <button id="quality-sd" style="padding:10px 20px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;">SD (480p)</button>
          <button id="quality-hd" style="padding:10px 20px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;">HD (720p)</button>
        </div>
      </div>
      <div id="results-container" style="max-height:400px;overflow-y:auto;margin-top:15px;border-top:1px solid #333;padding-top:15px;"></div>
    `;

    showModal('Selecionar Qualidade', modalContent, null, true);

    document.getElementById('quality-sd').addEventListener('click', () => startDownloads('SD', seasonIndex, episodes));
    document.getElementById('quality-hd').addEventListener('click', () => startDownloads('HD', seasonIndex, episodes));
    document.getElementById('close-modal').addEventListener('click', closeModal);
  }

  async function startDownloads(quality, seasonIndex, episodes) {
    const resultsContainer = document.querySelector('#results-container');
    resultsContainer.innerHTML = `
      <div style="text-align:center;padding:10px;">
        <div class="spinner"></div>
        <p>Preparando links...</p>
      </div>
    `;
    
    const downloadLinks = [];
    
    for (const [index, episode] of episodes.entries()) {
      if (!episode.selected && seasonIndex !== 'all') continue;
      
      const episodeNum = episode.num;
      const episodeTitle = episode.title;
      const downloadPageUrl = `https://animefire.plus/download/${animeSlug}/${episodeNum}`;
      
      try {
        const response = await fetch(downloadPageUrl);
        
        if (response.redirected && response.url.includes('404')) {
          downloadLinks.push({
            url: null,
            filename: `${animeSlug}-ep${episodeNum}-${quality.toLowerCase()}.mp4`,
            title: episodeTitle,
            quality: quality,
            status: 'failed',
            message: 'Erro: Página não encontrada (404)'
          });
          continue;
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const qualityContainer = doc.querySelector('.d-flex[style="flex-direction:column"]');
        if (!qualityContainer) {
          downloadLinks.push({
            url: null,
            filename: `${animeSlug}-ep${episodeNum}-${quality.toLowerCase()}.mp4`,
            title: episodeTitle,
            quality: quality,
            status: 'failed',
            message: 'Estrutura de download não encontrada'
          });
          continue;
        }

        const qualityButtons = qualityContainer.querySelectorAll('a');
        let selectedButton = Array.from(qualityButtons).find(btn => btn.textContent.trim() === quality && btn.href);
        if (!selectedButton) {
          const fallbackQuality = quality === 'HD' ? 'SD' : 'HD';
          selectedButton = Array.from(qualityButtons).find(btn => btn.textContent.trim() === fallbackQuality && btn.href);
          if (selectedButton) {
            downloadLinks.push({
              url: selectedButton.href,
              filename: `${animeSlug}-ep${episodeNum}-${fallbackQuality.toLowerCase()}.mp4`,
              title: episodeTitle,
              quality: fallbackQuality,
              status: 'success',
              message: `Qualidade ${quality} indisponível, usando ${fallbackQuality}`
            });
          } else {
            downloadLinks.push({
              url: null,
              filename: `${animeSlug}-ep${episodeNum}-${quality.toLowerCase()}.mp4`,
              title: episodeTitle,
              quality: quality,
              status: 'failed',
              message: 'Nenhuma qualidade disponível'
            });
          }
        } else if (selectedButton && selectedButton.href) {
          downloadLinks.push({
            url: selectedButton.href,
            filename: `${animeSlug}-ep${episodeNum}-${quality.toLowerCase()}.mp4`,
            title: episodeTitle,
            quality: selectedButton.textContent.trim(),
            status: 'success',
            message: 'Link preparado com sucesso'
          });
        } else {
          downloadLinks.push({
            url: null,
            filename: `${animeSlug}-ep${episodeNum}-${quality.toLowerCase()}.mp4`,
            title: episodeTitle,
            quality: quality,
            status: 'failed',
            message: `Qualidade ${quality} não disponível`
          });
        }
      } catch (error) {
        downloadLinks.push({
          url: null,
          filename: `${animeSlug}-ep${episodeNum}-${quality.toLowerCase()}.mp4`,
          title: episodeTitle,
          quality: quality,
          status: 'failed',
          message: 'Erro ao processar'
        });
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    saveToLocalStorage(downloadLinks);
    showDownloadResults(downloadLinks);
  }

  function saveToLocalStorage(downloadLinks) {
    const currentDownloads = JSON.parse(localStorage.getItem('firedeluxe_downloads') || '[]');
    const successfulDownloads = downloadLinks.filter(link => link.status === 'success' && link.url);
    
    successfulDownloads.forEach(download => {
      const existingIndex = currentDownloads.findIndex(item => item.url === download.url);
      if (existingIndex === -1) {
        currentDownloads.push({
          url: download.url,
          filename: download.filename,
          title: download.title,
          quality: download.quality,
          addedAt: Date.now()
        });
      }
    });
    
    localStorage.setItem('firedeluxe_downloads', JSON.stringify(currentDownloads));
  }

  function showDownloadResults(downloadLinks) {
    const resultsContainer = document.querySelector('#results-container');
    
    const successfulDownloads = downloadLinks.filter(link => link.status === 'success');
    const failedDownloads = downloadLinks.filter(link => link.status === 'failed');
    
    let resultsHTML = '';
    
    if (successfulDownloads.length > 0) {
      resultsHTML += `
        <div style="background:#333;padding:15px;border-radius:4px;margin-bottom:15px;">
          <p style="color:#4CAF50;font-weight:bold;margin:0 0 10px 0;">✓ ${successfulDownloads.length} links salvos com sucesso</p>
          <p style="font-size:12px;margin:0;color:#fff;">Os downloads serão iniciados automaticamente em segundo plano enquanto você navega no site.</p>
          <p style="font-size:12px;margin:10px 0 0 0;color:${themeColor};font-weight:bold;">Você pode fechar esta janela e continuar navegando normalmente.</p>
        </div>
      `;
    }
    
    downloadLinks.forEach(link => {
      const color = link.status === 'success' ? '#4CAF50' : '#F44336';
      const icon = link.status === 'success' ? '✓' : '✗';
      
      resultsHTML += `
        <div style="display:flex;align-items:center;padding:8px 0;border-bottom:1px solid #333;">
          <div style="width:30px;text-align:center;font-weight:bold;color:${color};">${icon}</div>
          <div style="flex:1;">
            <div style="font-weight:bold;">${link.title}</div>
            <div style="font-size:0.9em;color:#aaa;">${link.message}</div>
          </div>
        </div>
      `;
    });
    
    resultsContainer.innerHTML = resultsHTML;
  }

  function showModal(title, content, actionUrl = null, keepOpen = false) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-panel';
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    modal.innerHTML = `
      <div class="modal-header" style="position:relative;">
        <button id="close-modal-top" style="position:absolute;right:15px;top:15px;background:none;border:none;color:${themeColor};font-size:1.5em;cursor:pointer;font-weight:bold;">×</button>
        <h3>${title}</h3>
      </div>
      <div class="modal-content" style="max-height:80vh;overflow-y:auto;">
        ${content}
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .modal-overlay {position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:10000;}
      .modal-panel {background-color:#222;border:2px solid ${themeColor};border-radius:8px;width:90%;max-width:600px;color:#EEE;box-shadow:0 0 20px rgba(${hexToRgb(themeColor)},0.3);max-height:90vh;display:flex;flex-direction:column;}
      .modal-header {padding:15px;border-bottom:1px solid ${themeColor};background:rgba(${hexToRgb(themeColor)},0.1);position:relative;}
      .modal-header h3 {margin:0;color:${themeColor};text-align:center;font-size:1.3em;font-weight:bold;}
      .modal-content {padding:15px;line-height:1.6;overflow-y:auto;}
      #close-modal, #close-modal-top {font-weight:bold;padding:0 10px;}
      #close-modal:hover, #close-modal-top:hover {color:#fff;}
      .spinner {border:3px solid rgba(${hexToRgb(themeColor)},0.3);border-radius:50%;border-top:3px solid ${themeColor};width:20px;height:20px;animation:spin 1s linear infinite;margin:0 auto 10px;}
      .episode-item:hover {background:#444 !important;}
      @keyframes spin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
    `;

    overlay.appendChild(modal);
    document.body.appendChild(style);
    document.body.appendChild(overlay);

    document.getElementById('close-modal-top').addEventListener('click', closeModal);
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
  
  return addedButtons > 0;
};

const observer = new MutationObserver(() => {
  checkAndAddDownloadButtons();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

let checkCount = 0;
const maxChecks = 30;
const checkInterval = 1000;

const checkIntervalId = setInterval(() => {
  if (checkAndAddDownloadButtons()) {
    clearInterval(checkIntervalId);
  } else if (checkCount >= maxChecks) {
    clearInterval(checkIntervalId);
  }
  checkCount++;

}, checkInterval);

})();

//Função para baixar os episódios salvos
(function() {
    'use strict';

const startAutoDownload = () => {
  const downloadQueue = JSON.parse(localStorage.getItem('firedeluxe_downloads') || '[]');
  const lastDownloadTime = parseInt(localStorage.getItem('firedeluxe_last_download') || '0');
  const currentTime = Date.now();
  
  const settings = JSON.parse(localStorage.getItem('firedeluxe_configuracoes') || '{}');
  const downloadInterval = (settings.downloadInterval || 5) * 60 * 1000;

  if (currentTime - lastDownloadTime < downloadInterval) {
    return;
  }

  if (downloadQueue.length === 0) return;

  const episodeNumbers = downloadQueue.map(item => {
    const epMatch = item.filename.match(/ep(\d+)/);
    return epMatch ? parseInt(epMatch[1]) : 999;
  });

  const minEpisode = Math.min(...episodeNumbers);
  const closestToEpisode1 = downloadQueue.find(item => {
    const epMatch = item.filename.match(/ep(\d+)/);
    return epMatch && parseInt(epMatch[1]) === minEpisode;
  });

  if (!closestToEpisode1) return;

  try {
    const a = document.createElement('a');
    a.href = closestToEpisode1.url;
    a.download = closestToEpisode1.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    const updatedQueue = downloadQueue.filter(item => item.url !== closestToEpisode1.url);
    localStorage.setItem('firedeluxe_downloads', JSON.stringify(updatedQueue));
    localStorage.setItem('firedeluxe_last_download', currentTime.toString());
  } catch (error) {
  }
};

setInterval(startAutoDownload, 60000);
startAutoDownload();
    
})();

//Se parar em um dowload com o episódio com erro, volta para a página anterior, onde está sendo realizado o dowload de todos os eps (é uma função pro botão de baixar todos os eps)
(function() {
    'use strict';

if (document.body.innerHTML.includes('<h1>404 Not Found</h1>') && location.href.includes('https://lightspeedst.net/')) {
  window.history.back();
}

})();

//Divulgar discord's
(function() {
    'use strict';

    const config = JSON.parse(localStorage.getItem('firedeluxe_configuracoes') || '{}');
        const themeColor = config.themeColor || '#FFA500';
        const hasDiscordModalCookie = /(^|;\s*)firedeluxe_discord_modal=/.test(document.cookie);
        const hasWelcomeCookie = /(^|;\s*)firedeluxe_welcome=(true|1)/.test(document.cookie);
    
        if (!hasDiscordModalCookie && hasWelcomeCookie) {
            const style = document.createElement('style');
            style.textContent = `
                .firedeluxe-modal-btn { 
                    padding: 8px 16px; 
                    border: none; 
                    border-radius: 4px; 
                    cursor: pointer; 
                    transition: all 0.2s ease;
                    font-size: 14px;
                }
                .firedeluxe-modal-btn:hover { 
                    transform: translateY(-1px); 
                }
                .firedeluxe-server-card {
                    background: #333;
                    border-radius: 6px;
                    padding: 15px;
                    margin: 10px 0;
                    border: 1px solid #444;
                }
            `;
            document.head.appendChild(style);
    
            const modal = document.createElement('div');
            Object.assign(modal.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: '9999'
            });
    
            const modalContent = document.createElement('div');
            Object.assign(modalContent.style, {
                backgroundColor: '#222',
                padding: '25px',
                borderRadius: '8px',
                width: '400px',
                textAlign: 'center',
                color: '#eee',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1px solid #444'
            });
    
            const title = document.createElement('h2');
            title.textContent = 'Entre nos servidores';
            Object.assign(title.style, {
                color: themeColor,
                margin: '0 0 15px 0',
                fontSize: '20px'
            });
    
            const serversContainer = document.createElement('div');
    
            const servers = [
                {
                    name: 'AnimeFire',
                    description: 'Servidor do MrKalangot (maior atualmente)',
                    invite: 'https://discord.gg/PTnkFaNR8Y',
                    color: '#5865F2'
                },
                {
                    name: 'FireDeluxe',
                    description: 'Servidor do FireDeluxe',
                    invite: 'https://discord.com/invite/ZtwHK3Aqrz',
                    color: themeColor
                }
            ];
    
            servers.forEach((server) => {
                const serverCard = document.createElement('div');
                serverCard.className = 'firedeluxe-server-card';
    
                const serverName = document.createElement('h3');
                serverName.textContent = server.name;
                Object.assign(serverName.style, {
                    color: themeColor,
                    margin: '0 0 5px 0',
                    fontSize: '16px'
                });
    
                const serverDesc = document.createElement('p');
                serverDesc.textContent = server.description;
                Object.assign(serverDesc.style, {
                    color: '#aaa',
                    margin: '0 0 10px 0',
                    fontSize: '13px'
                });
    
                const joinBtn = document.createElement('button');
                joinBtn.className = 'firedeluxe-modal-btn';
                joinBtn.textContent = 'Entrar';
                Object.assign(joinBtn.style, {
                    backgroundColor: server.color,
                    color: 'white'
                });
    
                joinBtn.addEventListener('click', () => {
                    window.open(server.invite, '_blank');
                    document.cookie = 'firedeluxe_discord_modal=shown; expires=Fri, 31 Dec 2999 23:59:59 GMT; path=/';
                    document.body.removeChild(modal);
                    document.head.removeChild(style);
                });
    
                serverCard.appendChild(serverName);
                serverCard.appendChild(serverDesc);
                serverCard.appendChild(joinBtn);
                serversContainer.appendChild(serverCard);
            });
    
            const closeButton = document.createElement('button');
            closeButton.className = 'firedeluxe-modal-btn';
            closeButton.textContent = 'Fechar';
            Object.assign(closeButton.style, {
                backgroundColor: '#555',
                color: 'white',
                marginTop: '15px'
            });
    
            closeButton.addEventListener('click', () => {
                const date = new Date();
                date.setDate(date.getDate() + 5);
                document.cookie = `firedeluxe_discord_modal=shown; expires=${date.toUTCString()}; path=/`;
                document.body.removeChild(modal);
                document.head.removeChild(style);
            });
    
            modalContent.appendChild(title);
            modalContent.appendChild(serversContainer);
            modalContent.appendChild(closeButton);
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
/*
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
*/

//Contar tempo gasto no site
(function() {
    'use strict';

const dbName = "FireDeluxeRankDB";
let db;
const request = indexedDB.open(dbName, 1);
request.onupgradeneeded = e => {
    db = e.target.result;
    if (!db.objectStoreNames.contains("timeData")) {
        const store = db.createObjectStore("timeData", { keyPath: "id" });
        store.createIndex("years", "years", { unique: false });
        store.createIndex("months", "months", { unique: false });
        store.createIndex("weeks", "weeks", { unique: false });
        store.createIndex("days", "days", { unique: false });
        store.createIndex("hours", "hours", { unique: false });
        store.createIndex("minutes", "minutes", { unique: false });
        store.createIndex("seconds", "seconds", { unique: false });
    }
};
request.onsuccess = e => {
    db = e.target.result;
    setInterval(updateTime, 1000);
};

function updateTime() {
    const transaction = db.transaction(["timeData"], "readwrite");
    const store = transaction.objectStore("timeData");
    const getRequest = store.get(1);
    
    getRequest.onsuccess = () => {
        let data = getRequest.result || { id: 1, seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0, months: 0, years: 0 };
        
        data.seconds++;
        
        const timeUnits = [
            { current: "seconds", next: "minutes", max: 60 },
            { current: "minutes", next: "hours", max: 60 },
            { current: "hours", next: "days", max: 24 },
            { current: "days", next: "months", max: 30 },
            { current: "months", next: "years", max: 12 }
        ];
        
        for (const unit of timeUnits) {
            if (data[unit.current] >= unit.max) {
                data[unit.current] = 0;
                data[unit.next]++;
            } else {
                break;
            }
        }
        
        if (data.days >= 7) {
            data.weeks = Math.floor(data.days / 7);
            data.days = data.days % 7;
        }
        
        store.put(data);
    };
}

})();

//Salvar tempo
(function() {
    'use strict';

const supabaseUrl = 'https://hzslgydylfheyzurkotd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c2xneWR5bGZoZXl6dXJrb3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NjY0NDgsImV4cCI6MjA3MTA0MjQ0OH0.G9DIdCvM-M4MqSadw4qpc82z6G479tc9moCvpLU7jDQ';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

if (!getCookie("firedeluxe_rank_atualizado")) {
    const userData = JSON.parse(localStorage.getItem('firedeluxe_chat') || '{}');
    
    if (userData.nome) {
        const dbName = "FireDeluxeRankDB";
        const request = indexedDB.open(dbName, 1);
        
        request.onsuccess = function(e) {
            const db = e.target.result;
            const transaction = db.transaction(["timeData"], "readonly");
            const store = transaction.objectStore("timeData");
            const getRequest = store.get(1);
            
            getRequest.onsuccess = function() {
                if (getRequest.result) {
                    const timeData = getRequest.result;
                    const totalSeconds = timeData.seconds + (timeData.minutes * 60) + (timeData.hours * 3600) + (timeData.days * 86400) + (timeData.weeks * 604800) + (timeData.months * 2592000) + (timeData.years * 31536000);
                    
                    fetch(`${supabaseUrl}/rest/v1/user_time_tracking?name=eq.${encodeURIComponent(userData.nome)}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'apikey': supabaseKey,
                            'Authorization': `Bearer ${supabaseKey}`,
                            'Prefer': 'return=minimal'
                        },
                        body: JSON.stringify({
                            seconds: timeData.seconds,
                            minutes: timeData.minutes,
                            hours: timeData.hours,
                            days: timeData.days,
                            weeks: timeData.weeks,
                            months: timeData.months,
                            years: timeData.years,
                            total_seconds: totalSeconds,
                            last_updated: new Date().toISOString()
                        })
                    }).then(response => {
                        if (response.ok) {
                            setCookie("firedeluxe_rank_atualizado", "true", 5);
                        }
                    });
                }
            };
        };
    }
}

})();

//Todas as temporadas do anime em uma página (não funciona para todos)
(function() {
    'use strict';

const currentHref = window.location.href;
const matchResult = currentHref.match(/\/animes\/(.+)-todos-os-episodios/);

const getThemeColor = () => {
  try {
    const config = localStorage.getItem('firedeluxe_configuracoes');
    if (config) {
      const parsedConfig = JSON.parse(config);
      return parsedConfig.themeColor || '#FFA500';
    }
  } catch (e) {
    return '#FFA500';
  }
  return '#FFA500';
};

const shouldRunAllSeasons = () => {
  try {
    const config = localStorage.getItem('firedeluxe_configuracoes');
    if (config) {
      const parsedConfig = JSON.parse(config);
      return parsedConfig.allSeasons === 'on';
    }
  } catch (e) {
    return false;
  }
  return false;
};

const createLoadingOverlay = () => {
  const themeColor = getThemeColor();
  
  const overlay = document.createElement('div');
  overlay.id = 'season-loader-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '99999';
  overlay.style.color = themeColor;
  overlay.style.fontSize = '24px';
  overlay.style.fontWeight = 'bold';
  overlay.style.fontFamily = 'Arial, sans-serif';
  overlay.style.transition = 'opacity 0.3s ease';
  
  const loadingText = document.createElement('div');
  loadingText.id = 'season-loader-text';
  loadingText.textContent = 'Carregando';
  loadingText.style.marginBottom = '20px';
  loadingText.style.textShadow = `0 0 10px ${themeColor}70`;
  
  const dotsAnimation = document.createElement('div');
  dotsAnimation.id = 'season-loader-dots';
  dotsAnimation.style.display = 'flex';
  dotsAnimation.style.justifyContent = 'center';
  
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.backgroundColor = themeColor;
    dot.style.borderRadius = '50%';
    dot.style.margin = '0 5px';
    dot.style.opacity = '0.3';
    dot.style.transform = 'translateY(0)';
    dot.style.animation = `pulse 1.5s infinite ${i * 0.2}s`;
    dotsAnimation.appendChild(dot);
  }
  
  overlay.appendChild(loadingText);
  overlay.appendChild(dotsAnimation);
  
  const style = document.createElement('style');
  style.textContent = `@keyframes pulse{0%,100%{opacity:0.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-5px)}}`;
  
  document.head.appendChild(style);
  document.body.appendChild(overlay);
  
  return overlay;
};

const showLoader = () => {
  createLoadingOverlay();
};

const hideLoader = () => {
  const overlay = document.getElementById('season-loader-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
      const style = document.head.querySelector('style');
      if (style) style.remove();
    }, 300);
  }
};

if (matchResult && shouldRunAllSeasons()) {
    const fullPath = matchResult[1];
    let baseName = '';
    let currentSeason = 1;
    let isNumberedSeason = false;
    let isDubbed = fullPath.includes('-dublado');
    let seasonPrefix = '';

    const cleanBaseName = (name) => name ? name.replace(/--+/g, '-').replace(/-+$/, '') : '';
    const extractSeasonFromRoman = (str) => (str?.match(/(i+)$/i) || [])[1]?.length || 0;

    const seasonPatterns = [
        { regex: /(.+?)-(2nd|3rd|\d+th)-season(-dublado)?$/, type: 'suffix' },
        { regex: /(.+?)-season-(\d+)(-dublado)?$/, type: 'season' },
        { regex: /(.+?)-part-(\d+)(-dublado)?$/, type: 'part' },
        { regex: /(.+?)-part-(\d+th)(-dublado)?$/, type: 'part-th' },
        { regex: /(.+?)-(second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth)-season(-dublado)?$/, type: 'word' },
        { regex: /(.+?)(i{1,3})(-dublado)?$/, type: 'roman' },
        { regex: /(.+?)-(\d+)(-dublado)?$/, type: 'number' }
    ];

    const bestMatch = seasonPatterns.reduce((best, pattern) => {
        const match = fullPath.match(pattern.regex);
        if (match) {
            const matchEnd = match.index + match[0].length;
            return matchEnd > (best?.index || -1) ? { ...pattern, match, index: matchEnd } : best;
        }
        return best;
    }, null);

    if (bestMatch?.match) {
        baseName = cleanBaseName(bestMatch.match[1]);
        isDubbed = isDubbed || (bestMatch.match[bestMatch.match.length - 2] === '-dublado');
        
        switch (bestMatch.type) {
            case 'roman': 
                currentSeason = extractSeasonFromRoman(bestMatch.match[2]); 
                seasonPrefix = bestMatch.match[2];
                break;
            case 'number': 
                currentSeason = parseInt(bestMatch.match[2]); 
                isNumberedSeason = true;
                seasonPrefix = `-${bestMatch.match[2]}`;
                break;
            case 'part': 
            case 'part-th': 
                currentSeason = parseInt(bestMatch.match[2]); 
                seasonPrefix = `-part-${bestMatch.match[2]}`;
                break;
            case 'season': 
                currentSeason = parseInt(bestMatch.match[2]); 
                seasonPrefix = `-season-${bestMatch.match[2]}`;
                break;
            case 'suffix': 
                const num = bestMatch.match[2];
                currentSeason = num === '2nd' ? 2 : num === '3rd' ? 3 : parseInt(num);
                seasonPrefix = `-${num}-season`;
                break;
            case 'word': 
                const words = ['second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];
                currentSeason = words.indexOf(bestMatch.match[2]) + 2;
                seasonPrefix = `-${bestMatch.match[2]}-season`;
                break;
        }
    } else {
        const numberMatch = fullPath.match(/(.+?)-(\d+)(-dublado)?$/);
        if (numberMatch) {
            baseName = cleanBaseName(numberMatch[1]);
            currentSeason = parseInt(numberMatch[2]);
            isNumberedSeason = true;
            seasonPrefix = `-${numberMatch[2]}`;
            isDubbed = isDubbed || (numberMatch[3] !== undefined);
        } else {
            baseName = cleanBaseName(fullPath.replace(/-dublado$/, ''));
            isDubbed = fullPath.endsWith('-dublado');
        }
    }

    const checkSeasonExists = async (season, prefix = '') => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const dubbedSuffix = isDubbed ? '-dublado' : '';
        const seasonUrl = `https://animefire.plus/animes/${baseName}${prefix}${dubbedSuffix}-todos-os-episodios`.replace(/--+/g, '-');
        try {
            const response = await fetch(seasonUrl, { method: 'HEAD' });
            return response.ok ? seasonUrl : false;
        } catch (error) {
            return false;
        }
    };

    const getSeasonContent = async (url) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        try {
            const response = await fetch(url);
            if (response.ok) {
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const section = doc.querySelector('section.mt-3.mb-2');
                if (section) {
                    return { 
                        section: section.cloneNode(true), 
                        episodes: Array.from(section.querySelectorAll('a.lEp')) 
                    };
                }
            }
        } catch (error) {
            return null;
        }
        return null;
    };

    const existingSeasons = new Set();
    const currentSections = Array.from(document.querySelectorAll('section.mt-3.mb-2'));
    currentSections.forEach(section => {
        const match = section.querySelector('h2.tEp')?.textContent.match(/Temporada (\d+)/);
        if (match) existingSeasons.add(parseInt(match[1]));
    });

    if (!existingSeasons.has(currentSeason) && currentSections[0]) {
        currentSections[0].querySelector('h2.tEp').textContent = `Temporada ${currentSeason}`;
        existingSeasons.add(currentSeason);
    }

    const processSeason = async (season) => {
        if (existingSeasons.has(season)) return null;
        
        let seasonUrl;
        
        if (season === 1) {
            seasonUrl = await checkSeasonExists(1);
            if (!seasonUrl) seasonUrl = await checkSeasonExists(1, isDubbed ? '-dublado' : '');
        } else {
            const prefixes = [];
            
            if (seasonPrefix.includes('ii')) prefixes.push(`-${'i'.repeat(season)}`);
            if (seasonPrefix.includes('part')) prefixes.push(`-part-${season}`, `-part-${season}th`);
            if (seasonPrefix.includes('season')) prefixes.push(`-season-${season}`);
            if (isNumberedSeason) prefixes.push(`-${season}`);
            if (prefixes.length === 0) prefixes.push(`-${season}th-season`, `-season-${season}`, `-part-${season}`, `-${season}`);
            
            const ordinalSuffixes = [];
            if (season === 1) ordinalSuffixes.push('1st');
            else if (season === 2) ordinalSuffixes.push('2nd');
            else if (season === 3) ordinalSuffixes.push('3rd');
            else ordinalSuffixes.push(`${season}th`);
            
            const wordSeasons = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];
            if (season <= wordSeasons.length) prefixes.push(`-${wordSeasons[season-1]}-season`);
            
            for (const suffix of ordinalSuffixes) {
                prefixes.push(`-${suffix}-season`);
            }
            
            for (const prefix of prefixes) {
                seasonUrl = await checkSeasonExists(season, prefix);
                if (seasonUrl) break;
            }
        }
        
        return seasonUrl ? await getSeasonContent(seasonUrl) : null;
    };

    const collectSeasons = async (seasonsToCheck) => {
        const results = [];
        for (const season of seasonsToCheck) {
            const content = await processSeason(season);
            if (content) results.push({ season, content });
            else if (season !== currentSeason) break;
        }
        return results;
    };

    (async () => {
        showLoader();
        
        try {
            const seasonsToCheck = [];
            if (!existingSeasons.has(1)) seasonsToCheck.push(1);
            for (let i = currentSeason - 1; i >= 2; i--) seasonsToCheck.push(i);
            for (let i = currentSeason + 1; i <= currentSeason + 15; i++) seasonsToCheck.push(i);

            const collectedSeasons = await collectSeasons(seasonsToCheck);
            const uniqueSeasons = collectedSeasons.filter((v, i, a) => a.findIndex(t => t.season === v.season) === i);

            if (uniqueSeasons.length > 0) {
                const fragment = document.createDocumentFragment();
                uniqueSeasons
                    .sort((a, b) => a.season - b.season)
                    .forEach(({season, content}) => {
                        const newSection = content.section;
                        newSection.querySelector('h2.tEp').textContent = `Temporada ${season}`;
                        const episodesDiv = newSection.querySelector('.div_video_list');
                        episodesDiv.innerHTML = '';
                        content.episodes.forEach(ep => episodesDiv.appendChild(ep.cloneNode(true)));
                        fragment.appendChild(newSection);
                    });

                if (currentSections[0]) {
                    currentSections[0].parentNode.insertBefore(fragment, currentSections[0]);
                } else {
                    document.body.appendChild(fragment);
                }
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
        } finally {
            hideLoader();
        }
    })();
}

})();

//Aviso de novos episódios e adição dos mesmos sem reiniciar a página
(function() {
    'use strict';

const styleElement = document.createElement('style');
styleElement.innerHTML = `
  .animefire-notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    z-index: 9999;
    font-weight: bold;
    animation: animefireFadeIn 0.3s ease-out;
    display: flex;
    align-items: center;
    max-width: 90%;
    backdrop-filter: blur(5px);
  }
  @keyframes animefireFadeIn {
    from { opacity: 0; transform: translate(-50%, -20px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
  @keyframes animefireFadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(styleElement);

let notificationQueue = [];
let isNotificationActive = false;
let initialEpisodesLoaded = false;
let notifiedEpisodes = new Set();

const showNotification = (title) => {
  const config = JSON.parse(localStorage.getItem('firedeluxe_configuracoes')) || {};
  const themeColor = config.themeColor || '#21D3FF';
  
  const notification = document.createElement('div');
  notification.className = 'animefire-notification';
  notification.style.backgroundColor = `${themeColor}40`;
  notification.style.border = `1px solid ${themeColor}`;
  notification.style.color = '#fff';
  notification.textContent = `Novo episódio: ${title}`;
  
  document.body.appendChild(notification);
  isNotificationActive = true;
  
  setTimeout(() => {
    notification.style.animation = 'animefireFadeOut 0.5s ease-in';
    setTimeout(() => {
      notification.remove();
      isNotificationActive = false;
      processQueue();
    }, 500);
  }, 5000);
};

const processQueue = () => {
  if (notificationQueue.length > 0 && !isNotificationActive) {
    const nextEpisode = notificationQueue.shift();
    showNotification(nextEpisode);
  }
};

const addToQueue = (titles) => {
  const newTitles = titles.filter(title => !notifiedEpisodes.has(title));
  newTitles.forEach(title => notifiedEpisodes.add(title));
  notificationQueue = [...notificationQueue, ...newTitles];
  processQueue();
};

const getEpisodesList = async () => {
  const response = await fetch('https://animefire.plus/');
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  return {
    elements: Array.from(doc.querySelectorAll('.divCardUltimosEpsHome')),
    data: Array.from(doc.querySelectorAll('.divCardUltimosEpsHome')).map(ep => ({
      title: ep.getAttribute('title'),
      href: ep.querySelector('a').href,
      time: ep.querySelector('.ep-dateModified').getAttribute('data-date-modified')
    }))
  };
};

const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  
  if (diff < 60) return `${diff} segundos atrás`;
  if (diff < 3600) return `${Math.floor(diff/60)} minutos atrás`;
  if (diff < 86400) return `${Math.floor(diff/3600)} horas atrás`;
  if (diff < 2592000) return `${Math.floor(diff/86400)} dias atrás`;
  if (diff < 31536000) return `${Math.floor(diff/2592000)} meses atrás`;
  return `${Math.floor(diff/31536000)} anos atrás`;
};

const updateTimeElements = () => {
  document.querySelectorAll('.ep-dateModified').forEach(el => {
    const dateModified = el.getAttribute('data-date-modified');
    if (dateModified) {
      el.textContent = formatTimeAgo(dateModified);
    }
  });
};

const updateHomePageEpisodes = (newEpisodes) => {
  const row = document.querySelector(".card-group .row");
  if (!row) return;

  newEpisodes.reverse().forEach(episode => {
    const clonedEpisode = episode.cloneNode(true);
    const lazyImages = clonedEpisode.querySelectorAll('.lazy');
    
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      }
    });
    
    const timeElement = clonedEpisode.querySelector('.ep-dateModified');
    if (timeElement) {
      const dateModified = timeElement.getAttribute('data-date-modified');
      if (dateModified) {
        timeElement.textContent = formatTimeAgo(dateModified);
      }
    }
    
    row.insertBefore(clonedEpisode, row.firstChild);
  });
};

const updateLocalStorageEpisodes = async () => {
  const { elements, data } = await getEpisodesList();
  localStorage.setItem('firedeluxe_episodios', JSON.stringify(data));
  
  if (window.location.href === 'https://animefire.plus/') {
    const storedTitles = JSON.parse(localStorage.getItem('firedeluxe_episodios_prev') || '[]');
    const newEpisodes = elements.filter(ep => 
      !storedTitles.some(storedEp => storedEp.title === ep.getAttribute('title'))
    );
    
    if (newEpisodes.length > 0) {
      updateHomePageEpisodes(newEpisodes);
    }
    updateTimeElements();
  }
  
  localStorage.setItem('firedeluxe_episodios_prev', JSON.stringify(data));
  return data;
};

const checkForNewEpisodes = async () => {
  const { data: currentEpisodes } = await getEpisodesList();
  const storedEpisodes = JSON.parse(localStorage.getItem('firedeluxe_episodios')) || [];
  
  if (window.location.href !== 'https://animefire.plus/') {
    const newEpisodes = currentEpisodes.filter(ep => 
      !storedEpisodes.some(storedEp => storedEp.title === ep.title)
    );
    
    if (newEpisodes.length > 0) {
      addToQueue(newEpisodes.map(ep => ep.title));
    }
  } else {
    updateTimeElements();
  }
};

const initialize = async () => {
  if (!initialEpisodesLoaded) {
    await updateLocalStorageEpisodes();
    initialEpisodesLoaded = true;
    
    if (window.location.href !== 'https://animefire.plus/') {
      setInterval(checkForNewEpisodes, 6000);
    }
    
    setInterval(updateLocalStorageEpisodes, 30000);
    setInterval(checkForNewEpisodes, 30000);
  }
};

initialize();

})();

//Agradecimento nas notificações
(function() {
    'use strict';

const NOTIFICATION_ID = 'fire-deluxe-custom-notification';
const BELL_SELECTOR = '.dropdown_notification_bell';
const MAX_ATTEMPTS = 100;
const CHECK_INTERVAL = 100;
let attempts = 0;

function addNotification() {
    const cardGroup = document.getElementById('card_group_notification');
    if (!cardGroup || document.getElementById(NOTIFICATION_ID)) return;
    const themeColor = localStorage.getItem('firedeluxe_configuracoes') ? JSON.parse(localStorage.getItem('firedeluxe_configuracoes')).themeColor : '#BB0BD1';

    const notificationHTML = '<hr class="rmvLinha_cmt_msg my-0" data-tema-processado="true"><a id="' + NOTIFICATION_ID + '" class="dropdown-item px-2 py-2" href="https://animefire.plus/animes/dantalian-no-shoka/11#cmt-1072284" style="white-space:unset !important" data-tema-processado="true"><div class="d-flex" data-tema-processado="true"><div style="width:115px" data-tema-processado="true"><img class="img_cmt_noti mr-2" src="data:image/webp;base64,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" data-tema-processado="true"></div><div class="spanTextNT" style="width:100%;display:flex;flex-direction:column;justify-content:space-between" data-tema-processado="true"><div style="overflow:hidden;text-align:left" data-tema-processado="true"><div class="d-flex" data-tema-processado="true"><div data-tema-processado="true"><span class="mr-2 noti_us" data-tema-processado="true" style="color: ' + themeColor + ';">FireDeluxe</span><span class="span_rspd" data-tema-processado="true">respondeu:</span></div></div><span class="reply_noti_span my-2 noti_texto_1" style="line-height:18px;display:block;word-wrap:break-word;overflow-wrap:break-word;white-space:normal" data-tema-processado="true">Obrigado por utilizar o FireDeluxe, clique aqui para marcar presença</span></div><div class="d-flex justify-content-between" style="margin-bottom:-3px" data-tema-processado="true"><span class="span_icon_lk_noti" data-tema-processado="true"><img class="mr-1" src="https://animefire.plus/img/icons/link.png" data-tema-processado="true"><span class="slug_reply_1" data-tema-processado="true">dantalian-no-shoka/11</span></span><span class="pl-2 noti_data d-flex" data-tema-processado="true" style="color: ' + themeColor + ';">4 anos atrás</span></div></div></div></a>';

    cardGroup.insertAdjacentHTML('afterbegin', notificationHTML);
}

function handleBellClick() {
    setTimeout(addNotification, 1);
}

function setupBellListener() {
    const bell = document.querySelector(BELL_SELECTOR);
    if (bell) {
        bell.addEventListener('click', handleBellClick);
        return true;
    }
    return false;
}

function checkForBell() {
    if (attempts++ >= MAX_ATTEMPTS) return;
    if (!setupBellListener()) {
        setTimeout(checkForBell, CHECK_INTERVAL);
    }
}

checkForBell();
    
})();

//Apagar episódios duplicados
(function() {
    'use strict';

const observer = new MutationObserver(() => {
    const elementos = document.querySelectorAll('.divCardUltimosEpsHome');
    const episodiosUnicos = new Set();

    elementos.forEach(elemento => {
        const titulo = elemento.querySelector('.animeTitle')?.textContent.trim();
        const numeroEpisodio = elemento.querySelector('.numEp')?.textContent.trim();
        if (!titulo || !numeroEpisodio) return;
        
        const chave = `${titulo}-${numeroEpisodio}`;
        if (episodiosUnicos.has(chave)) {
            elemento.remove();
        } else {
            episodiosUnicos.add(chave);
        }
    });
});

observer.observe(document, { childList: true, subtree: true });

})();

//Ocultar notificações/comentários/replys de usuários bloqueados
(function() {
    'use strict';

(function() {
    const blockedUsers = JSON.parse(localStorage.getItem('firedeluxe_bloqueados')) || [];
    if (!blockedUsers.length) return;

    const hideBlockedElements = () => {
        blockedUsers.forEach(user => {
            const userId = user.url.split('/').pop();

            document.querySelectorAll('.us_reply[href*="/users/"], .usr_name_cmt[href*="/users/"]').forEach(el => {
                if (el.getAttribute('href').includes(userId)) {
                    el.closest('.cmt_reply_div, .cmt')?.style.setProperty('display', 'none', 'important');
                }
            });
        });
    };

    const observer = new MutationObserver(hideBlockedElements);
    observer.observe(document.body, { childList: true, subtree: true });

    const bell = document.querySelector('.dropdown_notification_bell');
    if (bell) {
        bell.addEventListener('click', () => {
            setTimeout(() => {
                blockedUsers.forEach(user => {
                    const userId = user.url.split('/').pop();
                    document.querySelectorAll('.noti_us').forEach(el => {
                        if (el.textContent.trim() === user.name) {
                            el.closest('.dropdown-item')?.style.setProperty('display', 'none', 'important');
                        }
                    });
                });
            }, 200);
        });
    }

    hideBlockedElements();
})();

})();

//Salvar nome e foto de perfil do usuário (para usar no chat do FireDeluxe)
(function() {
    'use strict';

let tentativas = 0;
const maxTentativas = 10;

function tentarBuscarPerfil() {
    const perfilLink = document.querySelector("a.meu-perfil")?.getAttribute("href");
    if (perfilLink) {
        fetch(perfilLink)
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const nome = doc.querySelector("#checkUserName")?.innerText.trim();
                const valor = { nome };
                localStorage.setItem('firedeluxe_chat', JSON.stringify(valor));
            });
    } else if (tentativas < maxTentativas) {
        tentativas++;
        setTimeout(tentarBuscarPerfil, 1000);
    }
}

tentarBuscarPerfil();

})();

//Botão de bloquear no FireDeluxe no perfil dos usuários
(function() {
    'use strict';
(function() {
  if (!window.location.href.includes('/users/')) return;

  const checkElement = setInterval(() => {
    const blockButton = document.querySelector('[data-action="block_user"]');
    if (!blockButton) return;

    clearInterval(checkElement);
    
    const newButton = blockButton.cloneNode(true);
    newButton.innerHTML = `<svg style="height:16px;margin:-3px 8px 0 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-ban fa-w-16"><path fill="currentColor" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path></svg> Bloquear com o FireDeluxe`;
    newButton.removeAttribute('data-action');
    newButton.addEventListener('click', handleBlockAction);
    blockButton.parentNode.insertBefore(newButton, blockButton.nextSibling);

    if (isUserBlocked()) {
      const unblockButton = blockButton.cloneNode(true);
      unblockButton.innerHTML = `<svg style="height:16px;margin:-3px 8px 0 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-ban fa-w-16"><path fill="currentColor" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path></svg> Desbloquear do FireDeluxe`;
      unblockButton.removeAttribute('data-action');
      unblockButton.addEventListener('click', handleUnblockAction);
      blockButton.parentNode.insertBefore(unblockButton, blockButton.nextSibling);
    }
  }, 1000);

  setTimeout(() => clearInterval(checkElement), 10000);

  function isUserBlocked() {
    const blocked = JSON.parse(localStorage.getItem('firedeluxe_bloqueados') || '[]');
    return blocked.some(user => user.url === window.location.href);
  }

  function handleBlockAction() {
    const currentUrl = window.location.href;
    const blocked = JSON.parse(localStorage.getItem('firedeluxe_bloqueados') || '[]');
    
    if (blocked.some(user => user.url === currentUrl)) return;

    fetchUserData(currentUrl).then(userData => {
      if (!userData) return;
      blocked.push(userData);
      localStorage.setItem('firedeluxe_bloqueados', JSON.stringify(blocked));
      location.reload();
    });
  }

  function handleUnblockAction() {
    const currentUrl = window.location.href;
    let blocked = JSON.parse(localStorage.getItem('firedeluxe_bloqueados') || '[]');
    blocked = blocked.filter(user => user.url !== currentUrl);
    localStorage.setItem('firedeluxe_bloqueados', JSON.stringify(blocked));
    location.reload();
  }

  function fetchUserData(url) {
    return fetch(url)
      .then(response => response.text())
      .then(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const profileDiv = doc.getElementById('divProfileInfo');
        if (!profileDiv) return null;
        const coverDiv = profileDiv.querySelector('.divPimg');
        const avatarImg = profileDiv.querySelector('.imgP');
        const nameElement = profileDiv.querySelector('#checkUserName');
        const bioElement = profileDiv.querySelector('#spanBio');
        return {
          url: url,
          cover: coverDiv ? coverDiv.style.backgroundImage.replace('url("', '').replace('")', '') : null,
          avatar: avatarImg ? avatarImg.src : null,
          name: nameElement ? nameElement.textContent.trim() : null,
          bio: bioElement ? bioElement.textContent.trim() : null
        };
      })
      .catch(() => null);
  }
})();
})();

//Botão de Assistir Dublado/Legendado nas páginas dos animes
(function() {
    'use strict';

const href = window.location.href;
if (href.includes('animes')) {
    const config = localStorage.getItem('firedeluxe_configuracoes');
    const themeColor = config ? JSON.parse(config).themeColor : '#ffffff';
    
    if (href.includes('dublado')) {
        const legendadoUrl = href.replace('-dublado-', '-');
        const btn = document.createElement('button');
        btn.className = 'watch-legendado-btn';
        btn.textContent = 'Assistir Legendado';
        btn.style.cssText = `padding:10px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;margin:10px auto;display:block;font-weight:bold;`;
        btn.onclick = () => window.location.href = legendadoUrl;
        const target = document.querySelector('h2.tEp.py-3.mb-0');
        if (target) target.parentNode.insertBefore(btn, target);
    } else {
        const dubladoUrl = href.replace('-todos-os-episodios', '-dublado-todos-os-episodios');
        fetch(dubladoUrl, { method: 'HEAD' }).then(response => {
            if (response.ok) {
                const btn = document.createElement('button');
                btn.className = 'watch-dublado-btn';
                btn.textContent = 'Assistir Dublado';
                btn.style.cssText = `padding:10px;background:${themeColor};color:#000;border:none;border-radius:4px;cursor:pointer;margin:10px auto;display:block;font-weight:bold;`;
                btn.onclick = () => window.location.href = dubladoUrl;
                const target = document.querySelector('h2.tEp.py-3.mb-0');
                if (target) target.parentNode.insertBefore(btn, target);
            }
        }).catch(() => {});
    }
}

})();

//Welcome do botão principal (alguns usuários não sabiam onde configurar)
(function() {
    'use strict';

    const welcomeCookie = document.cookie.split('; ').find(row => row.startsWith('firedeluxe_welcome='));
if (!welcomeCookie || welcomeCookie.split('=')[1] !== 'true') {
    const THEME_COLOR = localStorage.getItem('firedeluxe_configuracoes') ? JSON.parse(localStorage.getItem('firedeluxe_configuracoes')).themeColor || '#FFA500' : '#FFA500';
    
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: '9998',
        pointerEvents: 'none'
    });
    
    const tooltip = document.createElement('div');
    Object.assign(tooltip.style, {
        position: 'fixed',
        top: '15px',
        left: '70px',
        background: '#222',
        border: `1px solid ${THEME_COLOR}`,
        borderRadius: '8px',
        padding: '15px',
        color: '#EEE',
        zIndex: '9999',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        maxWidth: '250px',
        pointerEvents: 'none'
    });
    
    const arrow = document.createElement('div');
    Object.assign(arrow.style, {
        position: 'absolute',
        right: '100%',
        top: '20px',
        width: '0',
        height: '0',
        borderRight: `10px solid ${THEME_COLOR}`,
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent'
    });
    
    const arrowInner = document.createElement('div');
    Object.assign(arrowInner.style, {
        position: 'absolute',
        right: '-9px',
        top: '1px',
        width: '0',
        height: '0',
        borderRight: '9px solid #222',
        borderTop: '7px solid transparent',
        borderBottom: '7px solid transparent'
    });
    
    const content = document.createElement('div');
    Object.assign(content.style, {
        fontWeight: 'bold',
        fontSize: '14px',
        textAlign: 'center',
        color: '#FFF'
    });
    content.textContent = 'Esse é o botão principal do FireDeluxe!';
    
    tooltip.appendChild(arrow);
    tooltip.appendChild(arrowInner);
    tooltip.appendChild(content);
    
    const closeWelcome = () => {
        document.body.removeChild(overlay);
        document.body.removeChild(tooltip);
        document.cookie = 'firedeluxe_welcome=true; max-age=31536000; path=/';
        mainButton.removeEventListener('click', closeWelcome);
    };
    
    const mainButton = document.getElementById('menuPrincipal');
    if (mainButton) {
        document.body.appendChild(overlay);
        document.body.appendChild(tooltip);
        mainButton.addEventListener('click', closeWelcome);
    }
}
    
})();

//Amizades para Mikill e conta do FireDeluxe
(function() {
    'use strict';

    const TARGET_IDS = ['988233449', '460906716'];
    const COOKIE_NAME = 'amizades_direcionadas';
    const DAILY_INTERVAL_MS = 86400000;

    const getCsrfToken = async (userId) => {
        try {
            const response = await fetch(`https://animefire.plus/users/${userId}`);
            const html = await response.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return doc.getElementById('dd_guest_actions_token')?.dataset?.csrf;
        } catch (error) {
            return null;
        }
    };

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 86400000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.trim().split('=');
            if (cookieName === name) return cookieValue;
        }
        return null;
    };

    const loadCookieData = () => {
        const cookieData = getCookie(COOKIE_NAME);
        if (cookieData) {
            try {
                return JSON.parse(cookieData);
            } catch (e) {
                return null;
            }
        }
        return null;
    };

    const saveCookieData = (data) => {
        setCookie(COOKIE_NAME, JSON.stringify(data), 30);
    };

    const sendFriendRequest = async (userId) => {
        const csrfToken = await getCsrfToken(userId);
        if (!csrfToken) return false;

        try {
            const response = await fetch('https://animefire.plus/edit/friend', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: new URLSearchParams({
                    action: 'send_friend_request',
                    id: userId,
                    dd_guest_actions_token: csrfToken
                })
            });

            return response.ok;
        } catch (error) {
            return false;
        }
    };

    const shouldSendToId = (id, lastSentData) => {
        if (!lastSentData) return true;
        const lastSentTime = lastSentData[id];
        if (!lastSentTime) return true;
        const timeSinceLast = Date.now() - lastSentTime;
        return timeSinceLast >= DAILY_INTERVAL_MS;
    };

    const updateSentTime = (id) => {
        const currentData = loadCookieData() || {};
        currentData[id] = Date.now();
        saveCookieData(currentData);
    };

    const processFriendRequests = async () => {
        const lastSentData = loadCookieData();
        
        for (const id of TARGET_IDS) {
            if (shouldSendToId(id, lastSentData)) {
                const success = await sendFriendRequest(id);
                if (success) {
                    updateSentTime(id);
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    };

    const init = () => {
        processFriendRequests();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

//Pedir doações
(function() {
  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, ...cookieValueParts] = cookie.trim().split('=');
      if (cookieName === name) return cookieValueParts.join('=');
    }
    return null;
  };

  if (getCookie('firedeluxe_donation') !== null || getCookie('firedeluxe_discord_modal') === null) return;

  const getThemeColor = () => {
    try {
      const config = localStorage.getItem('firedeluxe_configuracoes');
      if (config) {
        const parsed = JSON.parse(config);
        if (parsed.themeColor) return parsed.themeColor;
      }
    } catch {}
    return '#FFA500';
  };

  const setCookie = () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    document.cookie = `firedeluxe_donation=shown; expires=${date.toUTCString()}; path=/`;
  };

  const themeColor = getThemeColor();
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      to { opacity: 0; }
    }
    .firedeluxe-donation {
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: #222;
      border: 1px solid #444;
      border-radius: 8px;
      padding: 20px;
      max-width: 500px;
      width: 90%;
      z-index: 9999;
      box-shadow: 0 0 40px rgba(0,0,0,0.8);
      animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .firedeluxe-donation.fade-out {
      animation: fadeOut 0.5s ease forwards;
    }
    .firedeluxe-donation h3 {
      color: ${themeColor};
      margin: 0 0 15px 0;
      font-weight: bold;
      font-size: 18px;
    }
    .firedeluxe-donation p {
      color: #eee;
      margin: 0 0 10px 0;
      font-size: 14px;
      line-height: 1.5;
    }
    .firedeluxe-donation small {
      color: #ccc;
      font-size: 12px;
      display: block;
      margin-bottom: 15px;
    }
    .firedeluxe-pix {
      background: #333;
      border: 1px solid #444;
      border-radius: 4px;
      padding: 12px;
      margin: 15px 0;
      color: #fff;
      font-family: monospace;
      font-size: 13px;
      word-break: break-all;
      transition: all 0.3s ease;
    }
    .firedeluxe-pix:hover {
      border-color: ${themeColor}50;
      box-shadow: 0 0 10px ${themeColor}20;
    }
    .firedeluxe-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .firedeluxe-btn {
      background: ${themeColor};
      border: none;
      border-radius: 6px;
      color: #222;
      padding: 8px 16px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      flex: 1;
      min-width: 120px;
    }
    .firedeluxe-btn:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 5px 15px ${themeColor}50;
    }
    .firedeluxe-btn-copy {
      background: #444;
      color: #eee;
    }
    .firedeluxe-btn-copy:hover {
      background: #555;
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.className = 'firedeluxe-donation';
  container.innerHTML = `
    <h3>Apoie o FireDeluxe</h3>
    <p>Se você gosta do FireDeluxe e tem condições, considere apoiar o projeto com uma doação, de qualquer valor.</p>
    <small>Sua contribuição ajuda a manter o FireDeluxe ativo, melhorando recursos e garantindo que ele continue evoluindo.</small>
    <div class="firedeluxe-pix">1cff435b-5c42-411b-9470-18aba4cd11d1</div>
    <div class="firedeluxe-buttons">
      <button class="firedeluxe-btn firedeluxe-btn-copy">Copiar PIX</button>
      <button class="firedeluxe-btn firedeluxe-btn-close">Fechar</button>
    </div>
  `;

  document.body.appendChild(container);

  const copyBtn = container.querySelector('.firedeluxe-btn-copy');
  const closeBtn = container.querySelector('.firedeluxe-btn-close');

  const handleClose = () => {
    setCookie();
    container.classList.add('fade-out');
    setTimeout(() => container.remove(), 500);
  };

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('1cff435b-5c42-411b-9470-18aba4cd11d1')
      .then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copiado!';
        copyBtn.style.background = '#2ecc71';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.background = '';
        }, 2000);
      });
  });

  closeBtn.addEventListener('click', handleClose);
  setTimeout(handleClose, 60000);
})();