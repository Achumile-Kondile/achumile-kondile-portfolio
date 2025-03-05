// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  updateThemeIcon(savedTheme);
} else {
  body.classList.add('light-mode'); // Default to light mode
  updateThemeIcon('light-mode');
}

// Toggle Theme
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
  updateThemeIcon(body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});

// Update Theme Icon
function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark-mode') {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

// Animate About Page Sections on Scroll
document.addEventListener('DOMContentLoaded', () => {
  const aboutSections = document.querySelectorAll('.about-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  aboutSections.forEach((section) => {
    observer.observe(section);
  });
});

// Animate Education Page Sections on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const educationItems = document.querySelectorAll('.education-item');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    educationItems.forEach((item) => {
      observer.observe(item);
    });
  });

  // Animate Timeline Items on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    timelineItems.forEach((item) => {
      observer.observe(item);
    });
  });

  // Animate Experience Items on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('.experience-item');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    experienceItems.forEach((item) => {
      observer.observe(item);
    });
  });
  
  // Animate Certification Items on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const certificationItems = document.querySelectorAll('.certification-item');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    certificationItems.forEach((item) => {
      observer.observe(item);
    });
  });