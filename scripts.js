// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const projectList = document.getElementById('project-list');

    function saveUserData(data) {
        console.log('Saving user data:', data);
        // Here you would typically send data to a server
    }

    function updateProjectList(projects) {
        projectList.innerHTML = ''; // Clear existing projects
        projects.forEach(project => {
            const li = document.createElement('li');
            li.textContent = project;
            projectList.appendChild(li);
        });
    }

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const bio = document.getElementById('bio').value;
        const projects = document.getElementById('projects').value.split(',').map(project => project.trim()).filter(Boolean);

        const userData = {
            name: name,
            email: email,
            bio: bio,
            projects: projects
        };

        saveUserData(userData);
        updateProjectList(projects);
        alert('Profile updated successfully!');
    });
});
