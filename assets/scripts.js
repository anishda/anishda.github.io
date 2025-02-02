document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', function() {
            project.style.backgroundColor = '#2e2e2e';
        });
        project.addEventListener('mouseout', function() {
            project.style.backgroundColor = '#1e1e1e';
        });
    });
});
