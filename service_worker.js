let dataForPopup;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("service_worker: top of listener");
  if (message.message === "dataForPopup") {
    dataForPopup = message.data;
  } else if (message.message === "openPopupRequest") {
    // Check if dataForPopup exists and send it to the popup if it does
    if (dataForPopup) {
      console.log("service_worker: sending to popup", dataForPopup)
      chrome.runtime.sendMessage({
        message: "popupData",
        data: dataForPopup
      });
      // dataForPopup = null; // Clear data after sending
    }
  }
});