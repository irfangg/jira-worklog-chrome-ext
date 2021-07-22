/*global chrome */
console.log('content script');

// eslint-disable-next-line no-unused-vars
const messagesFromReactAppListener = (message, sender, response) => {
  console.log('[content.js]. Message received', {
    message,
    sender,
  });
};
/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
