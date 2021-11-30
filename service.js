chrome.omnibox.onInputEntered.addListener((text) => {
    if (text) {
        chrome.tabs.update(undefined, { url: `https://reddit.com/r/${text}` });
    }
});
