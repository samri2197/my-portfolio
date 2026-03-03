document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
function filterProjects(category) {
  const projects = document.querySelectorAll('.project');
  projects.forEach(p => {
    if(category === 'all' || p.classList.contains(category)) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
}