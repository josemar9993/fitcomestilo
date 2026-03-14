(function () {
  var CONFIG = {
    projectId: 'fitcomestilo-merchant',
    location: 'global',
    agentId: '74cd0b52-a966-4970-98bb-740a734ff203',
    languageCode: 'pt-br',
    chatTitle: 'Fit com Estilo',
  };

  if (!CONFIG.agentId) {
    console.log('Dialogflow widget desativado: configure agentId em site/dialogflow-widget.js');
    return;
  }

  var script = document.createElement('script');
  script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
  script.async = true;
  document.head.appendChild(script);

  var style = document.createElement('style');
  style.textContent = 'df-messenger{z-index:999999;--df-messenger-button-titlebar-color:#10b981;--df-messenger-chat-background-color:#0f172a;--df-messenger-font-color:#e2e8f0;--df-messenger-send-icon:#22c55e;}';
  document.head.appendChild(style);

  var messenger = document.createElement('df-messenger');
  messenger.setAttribute('location', CONFIG.location);
  messenger.setAttribute('project-id', CONFIG.projectId);
  messenger.setAttribute('agent-id', CONFIG.agentId);
  messenger.setAttribute('language-code', CONFIG.languageCode);
  messenger.setAttribute('chat-title', CONFIG.chatTitle);
  document.body.appendChild(messenger);
})();
