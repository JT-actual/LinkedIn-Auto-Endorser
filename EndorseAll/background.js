chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: autoEndorse
    });
  });
  
  function autoEndorse() {
    var aTags = document.getElementsByClassName('artdeco-button__text');
    var searchText = "Endorse";
    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i].textContent.includes(searchText)) {
        aTags[i].parentNode.click();
      }
    }
  }