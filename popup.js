chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "popupData") {
      // Use the received data (message.data) in your popup logic
      console.log("Received data from content script:", message.data);
    }
  });
  
// Optionally, send a message to the background script requesting stored data
// when the popup opens (if needed)
chrome.runtime.sendMessage({ message: "openPopupRequest" });