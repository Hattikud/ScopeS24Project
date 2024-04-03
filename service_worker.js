let dataForPopup;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "dataForPopup") {
    dataForPopup = message.data;
  } else if (message.message === "openPopupRequest") {
    // Check if dataForPopup exists and send it to the popup if it does
    if (dataForPopup) {
      chrome.runtime.sendMessage({
        message: "popupData",
        data: dataForPopup
      });
      dataForPopup = null; // Clear data after sending
    }
  }
});