function hideCommentCount(hide) {
    const commentLinks = Array.from(document.querySelectorAll('a[href^="item?id="]')).filter(link => link.textContent.includes('comments'));
    commentLinks.forEach(link => {
        // Ensure we're working with the text node directly
        const textNode = link.childNodes[0];
        if (textNode.nodeType === Node.TEXT_NODE) {
            if (hide) {
                // Store original text only if it hasn't been stored yet
                if (!link.dataset.originalText) {
                    link.dataset.originalText = textNode.textContent;
                }
                // Replace the numeric part of the comment count with an empty string
                textNode.textContent = textNode.textContent.replace(/^\d+\s+/, '');
            } else {
                // Restore the original text if it was stored
                if (link.dataset.originalText) {
                    textNode.textContent = link.dataset.originalText;
                    // Consider removing the stored original text if you don't plan to toggle again
                    // delete link.dataset.originalText;
                }
            }
        }
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.hidePoints !== undefined) {
        const pointsAndKarmaSelectors = ['.score', '#karma'];
        const elementsToHide = pointsAndKarmaSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));

        elementsToHide.forEach(el => {
            el.style.display = request.hidePoints ? 'none' : '';
        });

        hideCommentCount(request.hidePoints);
    }
});

chrome.storage.local.get({hidePoints: false}, function(data) {
    const pointsAndKarmaSelectors = ['.score', '#karma'];
    const elementsToHide = pointsAndKarmaSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
    elementsToHide.forEach(el => el.style.display = data.hidePoints ? 'none' : '');

    hideCommentCount(data.hidePoints);
});