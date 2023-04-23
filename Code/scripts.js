function toggleIntro() {
    var intro = document.getElementById('intro');
    var btn = document.querySelector('button.btn');
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
        btn.style.display = 'none';
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