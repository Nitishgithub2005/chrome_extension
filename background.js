// background.js
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === "checkDomain") {
      const domain = request.domain;
      const backendEndpoint = "http://127.0.0.1:5000/checkDomain";

      fetch(backendEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
      })
        .then(response => response.json())
        .then(data => {
          // Handle the result from your backend
          const result = data.result;

          // Send the result to the popup
          chrome.runtime.sendMessage({ action: "showResult", result });
        })
        .catch(error => {
          console.error("Error checking domain:", error);
        });

      // Keep the messaging channel open until the fetch operation is complete
      return true;
    }
  }
);
