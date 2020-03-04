chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    try {
      if (tabs[0].url == "https://www.google.com/") {
        chrome.browserAction.setIcon({ path: { "19": "/images/green19.png" } });
      } else {
        chrome.browserAction.setIcon({ path: { "19": "/images/red19.png" } });
      }
    } catch (ex) {
      console.log(ex);
    }
  });
});
