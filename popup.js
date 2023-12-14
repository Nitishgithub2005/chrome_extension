// popup.js
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === "showResult") {
      const resultMessage = document.getElementById('result-message');
      if (resultMessage) {
        resultMessage.textContent = request.result;
      }
    }
  }
);
