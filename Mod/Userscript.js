// ==UserScript==
// @name         FireDeluxe
// @namespace    http://tampermonkey.net/
// @version      2025-07-05
// @description  Userscript para o site https://animefire.plus/
// @author       Mikill (discord: mikill9150)
// @match        https://animefire.plus/*
// @icon         https://animefire.plus/
// @grant        none
// ==/UserScript==

//Botão Principal
(function() {
    'use strict';

    if (document.getElementById('simple-button-manager')) return;

    const THEME_COLOR = '#FFA500';
    const container = document.createElement('div');
    container.id = 'simple-button-manager';
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.left = '20px';
    container.style.zIndex = '9999';

    const mainButton = document.createElement('button');
    mainButton.innerHTML = '<img src="data:image/webp;base64,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" style="width:50px;height:50px;">';
    mainButton.style.padding = '5px';
    mainButton.style.backgroundColor = 'transparent';
    mainButton.style.border = 'none';
    mainButton.style.cursor = 'pointer';
    mainButton.style.filter = 'drop-shadow(0 0 5px ' + THEME_COLOR + ')';
    mainButton.style.transition = 'filter 0.3s ease';

    mainButton.onmouseenter = () => {
        mainButton.style.filter = 'drop-shadow(0 0 10px ' + THEME_COLOR + ') brightness(1.2)';
    };

    mainButton.onmouseleave = () => {
        mainButton.style.filter = 'drop-shadow(0 0 5px ' + THEME_COLOR + ')';
    };

    const menuPanel = document.createElement('div');
    menuPanel.style.display = 'none';
    menuPanel.style.position = 'fixed';
    menuPanel.style.top = '50%';
    menuPanel.style.left = '50%';
    menuPanel.style.transform = 'translate(-50%, -50%)';
    menuPanel.style.backgroundColor = '#333';
    menuPanel.style.border = `1px solid ${THEME_COLOR}`;
    menuPanel.style.borderRadius = '8px';
    menuPanel.style.padding = '15px';
    menuPanel.style.boxShadow = '0 0 20px rgba(0,0,0,0.7)';
    menuPanel.style.width = '90%';
    menuPanel.style.maxWidth = '800px';
    menuPanel.style.maxHeight = '90vh';
    menuPanel.style.overflow = 'auto';
    menuPanel.style.color = '#fff';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.flexDirection = 'column';
    buttonsContainer.style.gap = '10px';
    buttonsContainer.style.width = '100%';

    function loadButtons() {
        buttonsContainer.innerHTML = '';
        const savedButtons = JSON.parse(localStorage.getItem('simpleButtonManagerButtons') || '[]');
        
        savedButtons.forEach((btn) => {
            const button = document.createElement('button');
            button.textContent = btn.name;
            button.style.padding = '10px';
            button.style.backgroundColor = '#444';
            button.style.color = '#fff';
            button.style.border = `1px solid ${THEME_COLOR}`;
            button.style.borderRadius = '4px';
            button.style.cursor = 'pointer';
            button.onclick = () => {
                try {
                    if (/^\s*</.test(btn.content)) {
                        const win = window.open('', '_blank');
                        win.document.write(btn.content);
                    } else {
                        new Function(btn.content)();
                    }
                } catch (e) {
                    console.error('Error executing button:', e);
                }
            };
            buttonsContainer.appendChild(button);
        });
    }

    mainButton.onclick = () => {
        menuPanel.style.display = menuPanel.style.display === 'none' ? 'block' : 'none';
        if (menuPanel.style.display === 'block') {
            loadButtons();
        }
    };

    menuPanel.appendChild(buttonsContainer);
    container.appendChild(mainButton);
    container.appendChild(menuPanel);
    document.body.appendChild(container);

    if (window.location.search.includes('menu')) {
        menuPanel.style.display = 'block';
        loadButtons();
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
