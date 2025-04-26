
const html = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

function navigateToPage(page) {
    window.location.href = page;
}
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        console.log('Login attempt:', { email, password });
        
        alert('Login functionality would be implemented here');
    });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Signup attempt:', { name, email, password });
        
        alert('Signup functionality would be implemented here');
    });
}

const resetPasswordForm = document.getElementById('resetPasswordForm');
if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        console.log('Reset password attempt:', { email });
        alert('Password reset link would be sent to your email');
    });
}

const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.className.split(' ')[1];
        console.log(`${provider} login clicked`);
        alert(`${provider} login would be implemented here`);
    });
});
const courses = [
    {
      id: 1,
      title: 'System Design Interview Questions',
      description: 'Master system design concepts with real-world examples and hands-on practice.',

      category: 'system',
      theme: 'forest-theme',
      link: 'https://example.com/system-design'
    },
    {
      id: 2,
      title: 'Data Structures Algorithms Interview Questions',
      description: 'Comprehensive guide to data structures with practical implementations.',

      category: 'algorithms',
      theme: 'galaxy-theme',
      link: 'https://example.com/data-structures'
    },
    {
      id: 3,
      title: 'Frontend Developer Interview Questions',
      description: 'Complete guide to modern frontend development with React and TypeScript.',

      category: 'frontend',
      theme: 'ocean-theme',
      link: 'https://example.com/frontend-development'
    },
    {
      id: 4,
      title: 'Backend Developer Interview Questions',
      description: 'Prepare for backend development interviews with Java, Node.js, and databases.',
    
      category: 'backend',
      theme: 'desert-theme',
      link: 'https://example.com/backend-development'
    },
    {
      id: 5,
      title: 'Machine Learning Interview Questions',
      description: 'A complete guide to machine learning concepts and algorithms for interviews.',

      category: 'machine-learning',
      theme: 'space-theme',
      link: 'https://example.com/machine-learning'
    },
    {
      id: 6,
      title: 'DevOps Interview Questions',
      description: 'Learn DevOps tools, practices, and concepts to ace the interview.',
      category: 'devops',
      theme: 'cloud-theme',
      link: 'https://example.com/devops'
    },
    {
      id: 7,
      title: 'Cybersecurity Interview Questions',
      description: 'Master cybersecurity concepts and prepare for security interviews.',
      category: 'cybersecurity',
      theme: 'cyber-theme',
      link: 'https://example.com/cybersecurity'
    },
    {
      id: 8,
      title: 'Data Science Interview Questions',
      description: 'Prepare for data science interviews with algorithms and real-world examples.',
      category: 'data-science',
      theme: 'matrix-theme',
      link: 'https://example.com/data-science'
    },
    {
      id: 9,
      title: 'Software Engineering Interview Questions',
      description: 'Master the art of software engineering interviews with key concepts and practice.',
      category: 'software-engineering',
      theme: 'techno-theme',
      link: 'https://example.com/software-engineering'
    },
    {
      id: 10,
      title: 'Cloud Computing Interview Questions',
      description: 'Learn cloud computing concepts and prepare for cloud-related interviews.',
      category: 'cloud',
      theme: 'cloud-theme',
      link: 'https://example.com/cloud-computing'
    }
  ];
  
  function createCourseCard(course) {
    return `
      <div class="chimera ${course.theme}" data-category="${course.category}">
        <h2 class="medusa">${course.title}</h2>
        <p class="siren">${course.description}</p>
        <div class="hydra">
          <a href="${course.link}" class="minotaur" target="_blank">
            <span class="minotaur-text">View Course</span>
            <span class="minotaur-arrow">→</span>
          </a>
        </div>
      </div>
    `;
  }
  
  function renderCourses(filteredCourses = courses) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = filteredCourses
      .map(course => createCourseCard(course))
      .join('');
  }
  
  function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.category.toLowerCase().includes(searchTerm) 
    );
    renderCourses(filteredCourses);
  }
  
  document.querySelector('.titans').addEventListener('click', (e) => {
    if (e.target.classList.contains('atlas')) {
      document.querySelectorAll('.atlas').forEach(btn =>
        btn.classList.remove('selected')
      );
  
      e.target.classList.add('selected');
  
      const filter = e.target.dataset.filter;
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
      const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) ||
          course.description.toLowerCase().includes(searchTerm) ||
          course.category.toLowerCase().includes(searchTerm);
  
        if (filter === 'all') {
          return matchesSearch;
        } else {
          return matchesSearch && course.category === filter;
        }
      });
  
      renderCourses(filteredCourses);
    }
  });
  
  document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
      document.querySelectorAll('.atlas').forEach(btn =>
        btn.classList.remove('selected')
      );
    }
  });
  
  renderCourses();
  