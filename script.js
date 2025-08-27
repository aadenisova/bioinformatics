// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Initialize projects
    initializeProjects();
    
    // Initialize project form
    initializeProjectForm();
    
    // Add scroll animations
    addScrollAnimations();
});

// Sample projects data
const sampleProjects = [
    {
        name: "Анализ микробиома кишечника",
        author: "Иван Петров",
        topic: "metagenomics",
        description: "Исследование состава микробиома кишечника у здоровых добровольцев с использованием 16S rRNA секвенирования и биоинформатического анализа.",
        github: "https://github.com/ivan-petrov/gut-microbiome",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop"
    },
    {
        name: "GWAS анализ роста растений",
        author: "Мария Сидорова",
        topic: "gwas",
        description: "Поиск генетических маркеров, ассоциированных с высотой растений Arabidopsis thaliana в различных условиях выращивания.",
        github: "https://github.com/maria-sidorova/plant-height-gwas",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=200&fit=crop"
    },
    {
        name: "Сборка генома бактерии",
        author: "Алексей Козлов",
        topic: "assembly",
        description: "De novo сборка генома некультивируемой бактерии из образца почвы с использованием данных Illumina и PacBio.",
        github: "https://github.com/alexey-kozlov/bacterial-genome",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=200&fit=crop"
    }
];

// Initialize projects display
function initializeProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    // Load projects from localStorage or use sample data
    let projects = JSON.parse(localStorage.getItem('bioinformatics-projects')) || sampleProjects;
    
    // Display projects
    displayProjects(projects);
}

// Display projects in the grid
function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const topicLabels = {
        'metagenomics': 'Анализ метагенома',
        'gwas': 'GWAS анализ',
        'alignment': 'Выравнивание последовательностей',
        'assembly': 'Сборка геномов',
        'microbiome': 'Анализ микробиома',
        'programming': 'Программирование'
    };
    
    const topicLabel = topicLabels[project.topic] || project.topic;
    
    card.innerHTML = `
        <div class="project-image">
            ${project.image ? `<img src="${project.image}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover;">` : '<i class="fas fa-project-diagram"></i>'}
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-author">Автор: ${project.author}</p>
            <p class="project-description">${project.description}</p>
            <span class="project-topic">${topicLabel}</span>
            ${project.github ? `<a href="${project.github}" class="project-github" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
        </div>
    `;
    
    return card;
}

// Initialize project form
function initializeProjectForm() {
    const projectForm = document.getElementById('project-form');
    if (!projectForm) return;
    
    projectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const projectData = {
            name: formData.get('name'),
            author: formData.get('author'),
            topic: formData.get('topic'),
            description: formData.get('description'),
            github: formData.get('github'),
            image: formData.get('image')
        };
        
        // Add project
        addProject(projectData);
        
        // Reset form
        this.reset();
        
        // Show success message
        showNotification('Проект успешно добавлен!', 'success');
    });
}

// Add new project
function addProject(projectData) {
    // Load existing projects
    let projects = JSON.parse(localStorage.getItem('bioinformatics-projects')) || sampleProjects;
    
    // Add new project
    projects.unshift(projectData);
    
    // Save to localStorage
    localStorage.setItem('bioinformatics-projects', JSON.stringify(projects));
    
    // Refresh display
    displayProjects(projects);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.topic-card, .project-card, .resource-card, .feature, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to topic cards
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add particle effect to hero section
    addParticleEffect();
});

// Add particle effect to hero section
function addParticleEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(hero);
    }
}

// Create a single particle
function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: float 6s ease-in-out infinite;
    `;
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    // Add floating animation
    const keyframes = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
    `;
    
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = keyframes;
        document.head.appendChild(style);
    }
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 6000);
}

// Add search functionality for projects
function addProjectSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Поиск проектов...';
    searchInput.className = 'project-search';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 12px 16px;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        font-size: 1rem;
        margin-bottom: 2rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
    `;
    
    const projectsSection = document.querySelector('#projects .container');
    if (projectsSection) {
        const title = projectsSection.querySelector('.section-title');
        title.parentNode.insertBefore(searchInput, title.nextSibling);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const projects = JSON.parse(localStorage.getItem('bioinformatics-projects')) || sampleProjects;
            
            const filteredProjects = projects.filter(project => 
                project.name.toLowerCase().includes(searchTerm) ||
                project.author.toLowerCase().includes(searchTerm) ||
                project.description.toLowerCase().includes(searchTerm) ||
                project.topic.toLowerCase().includes(searchTerm)
            );
            
            displayProjects(filteredProjects);
        });
    }
}

// Initialize search when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addProjectSearch, 1000);
});

// Add export functionality for projects
function exportProjects() {
    const projects = JSON.parse(localStorage.getItem('bioinformatics-projects')) || sampleProjects;
    const dataStr = JSON.stringify(projects, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'bioinformatics-projects.json';
    link.click();
}

// Add import functionality for projects
function importProjects(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const projects = JSON.parse(e.target.result);
            localStorage.setItem('bioinformatics-projects', JSON.stringify(projects));
            displayProjects(projects);
            showNotification('Проекты успешно импортированы!', 'success');
        } catch (error) {
            showNotification('Ошибка при импорте файла', 'error');
        }
    };
    reader.readAsText(file);
}

// Add export/import buttons
function addExportImportButtons() {
    const projectsSection = document.querySelector('#projects .container');
    if (!projectsSection) return;
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        text-align: center;
        margin-bottom: 2rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    `;
    
    const exportBtn = document.createElement('button');
    exportBtn.textContent = 'Экспорт проектов';
    exportBtn.className = 'btn btn-secondary';
    exportBtn.onclick = exportProjects;
    
    const importBtn = document.createElement('button');
    importBtn.textContent = 'Импорт проектов';
    importBtn.className = 'btn btn-secondary';
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.style.display = 'none';
    fileInput.onchange = function(e) {
        if (e.target.files.length > 0) {
            importProjects(e.target.files[0]);
        }
    };
    
    importBtn.onclick = () => fileInput.click();
    
    buttonContainer.appendChild(exportBtn);
    buttonContainer.appendChild(importBtn);
    buttonContainer.appendChild(fileInput);
    
    const title = projectsSection.querySelector('.section-title');
    title.parentNode.insertBefore(buttonContainer, title.nextSibling);
}

// Initialize export/import buttons
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addExportImportButtons, 1500);
}); 