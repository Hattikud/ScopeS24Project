let messageData;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "popupData") {
      // Use the received data (message.data) in your popup logic
      messageData = message.data;
      handleData(messageData);
      console.log("Received data", message.data);
    }
  });
  
// Optionally, send a message to the background script requesting stored data
// when the popup opens (if needed)
chrome.runtime.sendMessage({ message: "openPopupRequest" });

function formatData(data) {
  const averagePercent = percentageFormatter(data.average_score * 100);
  const lowestPercent = percentageFormatter(data.lowest_score * 100);
  const highestPercent = percentageFormatter(data.highest_score * 100);
  const jumpPercent = percentageFormatter(data.biggest_jump * 100);
  const dropPercent = percentageFormatter(data.biggest_drop * 100);
  const dataFormatted = {
    total_assignments: data.total_assignments,
    average_score: averagePercent,
    lowest_score: lowestPercent,
    highest_score: highestPercent,
    biggest_jump: jumpPercent,
    biggest_drop: dropPercent,
  }
  return dataFormatted;
}

function handleData(data) {
  const dataFormatted = formatData(data);
  insertData(dataFormatted);
}

function insertData(dataFormatted) {
  document.getElementById("totalAssignmentsVal").innerText = dataFormatted.total_assignments;
  document.getElementById("averageVal").innerText = dataFormatted.average_score;
  document.getElementById("highestVal").innerText = dataFormatted.highest_score;
  document.getElementById("lowestScoreVal").innerText = dataFormatted.lowest_score;
  document.getElementById("biggestJumpVal").innerText = dataFormatted.biggest_jump;
  document.getElementById("biggestDropVal").innerText = dataFormatted.biggest_drop;
}

function percentageFormatter(num) {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(num / 100);
}

if (messageData) {
  handleData(data);
}