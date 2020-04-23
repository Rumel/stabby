console.log("Stabby");

var regex = /https?\:\/\/[^\<\s]+/g;
var imageRegex = /(\.(jpg|gif|png|jpeg|webp))/;

function addLinksAndImages() {
    console.log("Going to add");
    var thread = document.querySelector("#press-thread");
    if(thread) {
        var html = thread.innerHTML;
        var linkMatches = html.match(regex);
        if(linkMatches) {
            linkMatches.forEach(function(match) {
                var isImage = match.match(imageRegex);
                if(isImage) {
                    html = html.replace(match, 
                        '<a href="' + match + '" target="_blank">' + match + '</a><img class=".stabby-image" src="' + match + '" />');
                } else {
                    html = html.replace(match, '<a href="' + match + '" target="_blank">' + match + '</a>');
                }
            });
            thread.innerHTML = html;
        }
    }
}

var text = '';

window.setInterval(function() {
    var newText = document.querySelector('#press-messages').innerText;
    
    if (newText !== text) {
        console.log(newText);
        text = newText;
        addLinksAndImages();
    }
}, 1000);
