// This runs when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === "install") {
        console.log("Extension installed");
        // Perform any initial setup here
    } else if (details.reason === "update") {
        console.log("Extension updated");
        // Handle any updates here
    }
});

// Listen for the extension icon click
chrome.action.onClicked.addListener((tab) => {
    // Toggle the state and store it
    chrome.storage.local.get({hidePoints: false}, function(data) {
        var newHidePointsState = !data.hidePoints;
        chrome.storage.local.set({hidePoints: newHidePointsState}, function() {
            console.log("Toggling hide points to: " + newHidePointsState);

            // Send a message to the content script with the new state
            chrome.tabs.sendMessage(tab.id, {hidePoints: newHidePointsState});
        });
    });
});