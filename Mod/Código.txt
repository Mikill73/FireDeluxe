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

//Possível AdBlocker
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
