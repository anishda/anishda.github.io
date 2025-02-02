document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', function() {
            project.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
        });
        project.addEventListener('mouseout', function() {
            project.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
