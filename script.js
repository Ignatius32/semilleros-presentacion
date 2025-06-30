// Script principal
document.addEventListener('DOMContentLoaded', function() {
    // Animaciones de contador
    animateCounters();
    
    // Carga dinámica del equipo
    loadTeamMembers();
    
    // Smooth scroll para navegación
    setupSmoothScroll();
    
    // Setup mobile navigation
    setupMobileNav();
});

// Función para animar contadores
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Datos del equipo (puedes editarlos aquí o cargarlos desde otra fuente)
const teamData = {
    "participantes": [
        {
            "name": "Lic. Verónica Diana Bella",
            "role": "Directora del Proyecto",
            "institution": "CRUB UNComahue",
            "bio": "Encargada de los Laboratorios de Biología CRUB - Docente de Genética y Genética de la conservación",
            "photo": "",
            "category": "docente/nodocente"
        },
        {
            "name": "Dr. Roberto Daniel García",
            "role": "Co-director del Proyecto",
            "institution": "INIBIOMA (CONICET-UNCOMAHUE)",
            "bio": "Invetigador y Divulgador Científico",
            "photo": "",
            "category": "graduado"
        },
        {
            "name": "Lic. Ignacio Basti",
            "role": "No Docente",
            "institution": "CRUB UNComahue",
            "bio": "Diseño y desarrollo de software / Programación de aplicaciones web",
            "photo": "",
            "category": "nodocente"
        },
        {
            "name": "Prof. Esp. Miguel Ernesto Petrabissi",
            "role": "No Docente",
            "institution": "CRUB UNComahue",
            "bio": "Diseño y desarrollo de software / Programación de aplicaciones web",
            "photo": "",
            "category": "nodocente"
        },
        {
            "name": "Marisa Cecilia del Petre",
            "role": "No Docente",
            "institution": "CRUB UNComahue",
            "bio": "Redes sociales / Comunicación digital",
            "photo": "",
            "category": "nodocente"
        },
        {
            "name": "Dra. Rocío Marisol Vega",
            "role": "Docente",
            "institution": "CRUB UNComahue",
            "bio": "Zoología / Biología de Vertebrados Andino Patagónicos",
            "photo": "",
            "category": "docente"
        },
        {
            "name": "Dr. Julio Cesar Painefilu",
            "role": "Docente",
            "institution": "IPATEC (CONICET-UNCOMAHUE)",
            "bio": "Histología animal / Anatomía y Fisiología Humana",
            "photo": "",
            "category": "docente"
        },
        {
            "name": "Lic. Martina Ahinoa Bramardi",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Tecnicatura en Acuicultura",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Lic. Tobías Moccia",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Tecnicatura en Acuicultura",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Ainara del Carmen Donati Helguera",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Licenciatura en Ciencias Biológicas",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "María Fernanda Chiappero",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Profesorado en Ciencias Biológicas",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Vera Palavecino",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Ingeniería Mecánica",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Felipe Gaspar Giai",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Licenciatura en Ciencias Biológicas",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Lic. Alejandra Emilce Ruffini",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Licenciatura en Historia",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Lucila Abril Rivarola Giovannini",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Licenciatura en Ciencias Biológicas",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Karla Marcela Ojeda Montesinos",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Tecnicatura en Acuicultura / Licenciatura en Ciencias Biológicas",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Angel Gabriel Sepúlveda",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Educación Física",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Morena Chiocconi",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Licenciatura en Ciencias Biológicas",
            "photo": "",
            "category": "estudiante"
        },
        {
            "name": "Esteban Alejandro Maldonado Ceballos",
            "role": "Estudiante",
            "institution": "CRUB UNComahue",
            "bio": "Profesorado Universitario en Matemática",
            "photo": "",
            "category": "estudiante"
        }
    ]
};

// Función para cargar miembros del equipo
function loadTeamMembers() {
    try {
        const teamGrid = document.getElementById('team-grid');
        if (!teamGrid) return;
        
        teamGrid.innerHTML = '';
        
        // Orden específico de participantes
        const exactOrder = [
            'Verónica Diana Bella',
            'Roberto Daniel García',
            'Ignacio Basti',
            'Miguel Ernesto Petrabissi',
            'Marisa Cecilia del Petre',
            'Rocío Marisol Vega',
            'Julio Cesar Painefilu',
            'Martina Ahinoa Bramardi',
            'Tobías Moccia',
            'Ainara del Carmen Donati Helguera',
            'María Fernanda Chiappero',
            'Vera Palavecino',
            'Felipe Gaspar Giai',
            'Alejandra Emilce Ruffini',
            'Lucila Abril Rivarola Giovannini',
            'Karla Marcela Ojeda Montesinos',
            'Angel Gabriel Sepúlveda',
            'Morena Chiocconi',
            'Esteban Alejandro Maldonado Ceballos'
        ];
        
        const sortedParticipants = teamData.participantes.sort((a, b) => {
            const aIndex = exactOrder.indexOf(a.name);
            const bIndex = exactOrder.indexOf(b.name);
            
            // Si ambos están en la lista, usar el orden exacto
            if (aIndex !== -1 && bIndex !== -1) {
                return aIndex - bIndex;
            }
            
            // Si solo uno está en la lista, ese va primero
            if (aIndex !== -1) return -1;
            if (bIndex !== -1) return 1;
            
            // Para cualquier otro caso (no debería ocurrir), ordenar alfabéticamente
            return a.name.localeCompare(b.name);
        });
        
        sortedParticipants.forEach(member => {
            const memberCard = createMemberCard(member);
            teamGrid.appendChild(memberCard);
        });
        
    } catch (error) {
        console.error('Error cargando datos del equipo:', error);
        document.getElementById('team-grid').innerHTML = 
            '<div class="error-message">Error cargando los datos del equipo</div>';
    }
}

// Función para crear tarjeta de miembro
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'team-member';
    
    const categoryLabels = {
        'director': 'Director',
        'codirector': 'Co-Director',
        'estudiante': 'Estudiante',
        'docente': 'Docente',
        'graduado': 'Graduado/a',
        'nodocente': 'No Docente',
        'organizacion': 'Organización'
    };
    
    // Using a unified person icon for all team members
    const unifiedIcon = 'fas fa-user';
    
    card.innerHTML = `
        <div class="category-badge category-${member.category}">
            ${categoryLabels[member.category] || member.category}
        </div>
        
        ${member.photo ? 
            `<img src="${member.photo}" alt="${member.name}" class="member-photo">` :
            `<div class="member-avatar">
                <i class="${unifiedIcon}"></i>
            </div>`
        }
        
        <h4>${member.name}</h4>
        <p class="member-role">${member.role}</p>
        <p class="member-institution">${member.institution}</p>
        ${member.bio ? `<p class="member-bio">${member.bio}</p>` : ''}
    `;
    
    return card;
}

// Configurar smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup mobile navigation
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        // Mobile menu toggle
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}

// Función utilitaria para agregar nuevos miembros al equipo
function addTeamMember(member) {
    // Agregar el miembro a los datos
    teamData.participantes.push(member);
    
    // Recargar el equipo para mantener el orden correcto
    loadTeamMembers();
    
    // Mensaje de confirmación
    console.log(`Miembro agregado: ${member.name}`);
}

// Función para eliminar un miembro del equipo
function removeTeamMember(memberName) {
    const index = teamData.participantes.findIndex(member => member.name === memberName);
    if (index > -1) {
        teamData.participantes.splice(index, 1);
        loadTeamMembers();
        console.log(`Miembro eliminado: ${memberName}`);
    } else {
        console.log(`Miembro no encontrado: ${memberName}`);
    }
}

// Función para actualizar los datos del equipo
function updateTeamData(newData) {
    teamData.participantes = newData;
    loadTeamMembers();
    console.log('Datos del equipo actualizados');
}

// Función para exportar los datos actuales del equipo
function exportTeamData() {
    const dataStr = JSON.stringify(teamData, null, 2);
    console.log('Datos actuales del equipo:');
    console.log(dataStr);
    return dataStr;
}
