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




function success_load() {
    console.log("success");
}
function fail_load() {
    console.log("fail");

}


function readFile() {
    return new Promise((resolve, reject) => {
        // Create a fetch Promise
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => {
                // Get a random project from the data
                const projects = json.projects;
                const randomIndex = Math.floor(Math.random() * projects.length);
                const project = projects[randomIndex];

                // Create the HTML structure for the project
                const projectCard = document.createElement('div');
                projectCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-4');
                projectCard.innerHTML = `
            <div class="card">
              <div class="card-img-top video-container">
                <iframe src="${project.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                ${project.content.map((paragraph) => `<p class="card-text">${paragraph}</p>`).join('')}
              </div>
            </div>
          `;

                // Append the project card to the container
                const projectContainer = document.getElementById('projectContainer');
                projectContainer.innerHTML = '';
                projectContainer.appendChild(projectCard);

                resolve();
            })
            .catch(() => {
                reject("Fetch data error");
            });
    });
}
