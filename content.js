// content.js
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('input[name="q"]');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const domain = extractDomainFromGoogleSearchBar();
      sendMessageToBackgroundScript({ action: "checkDomain", domain });
    });
  }
});

function extractDomainFromGoogleSearchBar() {
  const searchInput = document.querySelector('input[name="q"]');
  if (searchInput) {
    const match = searchInput.value.match(/(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/im);
    return match ? match[1] : null;
  }
  return null;
}

function sendMessageToBackgroundScript(message) {
  chrome.runtime.sendMessage(message, function (response) {
    // Handle the response if needed
    console.log("Background script response:", response);
  });
}
