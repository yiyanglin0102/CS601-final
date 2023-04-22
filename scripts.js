function toggleIntro() {
    var intro = document.getElementById('intro');
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
    } else {
        intro.style.display = 'none';
    }
}

function downloadCV() {
    var link = document.createElement("a");
    link.download = "Yi-Yang_Lin-CV.pdf";
    link.href = "Yi-Yang_Lin-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}