var regex = /https?\:\/\/[^\<\s]+/g;
var imageRegex = /(\.(jpg|gif|png|jpeg|webp))/;

function addLinksAndImages() {
    var thread = document.querySelector("#press-thread");
    if(thread) {
        var html = thread.innerHTML;
        var linkMatches = html.match(regex);
        if(linkMatches) {
            linkMatches.forEach(function(match) {
                var isImage = match.match(imageRegex);
                if(isImage) {
                    var replacement = `<a href="${match}" target="_blank">${match}</a><br /><img style="max-width: 100%" src="${match}" />`;
                    html = html.replace(match, replacement);
                } else {
                    var replacement = `<a href="${match}" target="_blank">${match}</a>`;
                    html = html.replace(match, replacement);
                }
            });
            thread.innerHTML = html;
        }
    }
}

var threadId = '';

window.setInterval(function() {
    var pressThread = document.querySelector("#press-thread");
    if(pressThread) {
        var newThreadId = pressThread.getAttribute('threadid');
        if (newThreadId !== threadId) {
            threadId = newThreadId;
            addLinksAndImages();
        }
    }
}, 1000);
