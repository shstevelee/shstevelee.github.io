// Load projects from JSON file
async function loadProjects() {
  try {
    const response = await fetch("projects.json");
    const projects = await response.json();
    displayProjects(projects);
  } catch (error) {
    console.error("Error loading projects:", error);
    // Fallback content if JSON fails to load
    document.getElementById("projectGrid").innerHTML =
      "<p>Projects coming soon...</p>";
  }
}

// Display projects in the grid
function displayProjects(projects) {
  const projectGrid = document.getElementById("projectGrid");
  projectGrid.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
                    ${
                      project.thumbnail
                        ? `<img src="${project.thumbnail}" alt="${project.name}" class="project-thumbnail">`
                        : ""
                    }
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="project-links">
                        ${
                          project.projectUrl
                            ? `<a href="${project.projectUrl}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>`
                            : ""
                        }
                        ${
                          project.githubUrl
                            ? `<a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>`
                            : ""
                        }
                    </div>
                `;

    projectGrid.appendChild(projectCard);
  });
}

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  document.getElementById(sectionId).classList.add("active");

  // Load projects when projects section is shown
  if (sectionId === "projects") {
    loadProjects();
  }
}

// Load projects on page load if projects section is active
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("projects").classList.contains("active")) {
    loadProjects();
  }
});
