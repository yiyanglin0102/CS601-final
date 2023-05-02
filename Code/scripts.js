const toggleIntro = function() {
    var intro = document.getElementById('intro');
    var btn = document.querySelector('button.btn');
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
        btn.style.display = 'none';
    } else {
        intro.style.display = 'none';
    }
}

const downloadCV = () => {
    var link = document.createElement("a");
    link.download = "Yi-Yang_Lin-CV.pdf";
    link.href = "Yi-Yang_Lin-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


document.addEventListener('load', function() {
    console.log("success");
});

document.addEventListener('error', function() {
    console.log("fail");
});

function readFile() {
    document.getElementById("projectImage").style.display = "none";
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
                projectCard.classList.add('mb-4');
                projectCard.innerHTML = `
            <div class="card">
              <div class="card-img-top video-container">
                <iframe src="${project.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                ${project.content.map((paragraph) => `<p class="card-text">${paragraph}</p>`).join('')}
                <a href="${project.code}">View Project</a>
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

function readTools() {
    return new Promise((resolve, reject) => {
        // Create a fetch Promise
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => {
                // Get the tools data from the JSON file
                const tools = json.tools;

                // Get the tools unordered list HTML element
                const toolsList = document.querySelector(".tools");
                // Create an empty string to store the list items
                let toolsHTML = "";
                // Loop through the tools data and create a list item for each tool
                tools.forEach((tool) => {
                    toolsHTML += `<li>${tool}</li>`;
                });
                // Set the inner HTML of the tools list to the generated HTML code
                toolsList.innerHTML = toolsHTML;
                resolve();
            })
            .catch(() => {
                reject("Fetch data error");
            });
    });
}

readTools();

function readProgrammingLanguages() {
    return new Promise((resolve, reject) => {
      // Create a fetch Promise
      fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
          const skillBars = document.querySelector('.skill-bars');
          for (const lang of json['programming languages']) {
              const proficiency = lang.proficiency;
              const li = document.createElement('li');
              const div = document.createElement('div');
              div.classList.add('progress');
              div.classList.add(`percent${proficiency}`);
              const strong = document.createElement('strong');
              strong.textContent = lang.name;
              const span = document.createElement('span');
              span.textContent = `${proficiency}%`;
              li.appendChild(div);
              li.appendChild(strong);
              li.appendChild(span);
              skillBars.appendChild(li);
            
          }
          resolve();
        })
        .catch(() => {
          reject('Fetch data error');
        });
    });
  }
  
  readProgrammingLanguages();
  
  