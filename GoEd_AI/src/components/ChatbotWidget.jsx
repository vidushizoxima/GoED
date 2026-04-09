import { useEffect } from 'react';

const CHATBOT_SCRIPT_URL = 'https://go-ed-ai-hcdzfpctfyf6fjf9.southindia-01.azurewebsites.net/static/widget/chatbot-widget.min.js';
const SCRIPT_ID = 'goed-chatbot-script';

export default function ChatbotWidget() {
  useEffect(() => {
    // If already loaded, just (re)init
    if (window.ChatbotWidget) {
      window.ChatbotWidget.init();
      return;
    }

    // If script tag already in DOM (e.g. HMR), wait for it
    if (document.getElementById(SCRIPT_ID)) {
      const poll = setInterval(() => {
        if (window.ChatbotWidget) {
          clearInterval(poll);
          window.ChatbotWidget.init();
        }
      }, 100);
      return () => clearInterval(poll);
    }

    // First time — inject the script
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = CHATBOT_SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      if (window.ChatbotWidget) {
        window.ChatbotWidget.init();
      }
    };

    script.onerror = () => {
      console.error('[ChatbotWidget] Failed to load script:', CHATBOT_SCRIPT_URL);
    };

    document.body.appendChild(script);

    // Cleanup: hide widget when leaving home page
    return () => {
      if (window.ChatbotWidget) {
        if (typeof window.ChatbotWidget.hide === 'function') {
          window.ChatbotWidget.hide();
        } else if (typeof window.ChatbotWidget.destroy === 'function') {
          window.ChatbotWidget.destroy();
        }
      }
    };
  }, []);

  return null; // renders nothing — widget injects its own DOM
}


