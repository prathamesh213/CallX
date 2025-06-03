// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Animate elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .feature-card, .tech-card, .flow-step').forEach(el => {
    observer.observe(el);
});

// FAQ Upload Modal
const modal = document.getElementById('uploadModal');
const uploadArea = document.querySelector('.upload-area');
const fileInput = document.getElementById('faqUpload');

function openUploadModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeUploadModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function triggerFileUpload() {
    fileInput.click();
}

// Handle file selection
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
});

// Handle drag and drop
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) {
        handleFile(file);
    }
});

function handleFile(file) {
    if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file');
        return;
    }
    
    // Here you would typically handle the file upload
    console.log('File selected:', file.name);
    // TODO: Implement actual file upload logic
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeUploadModal();
    }
});

// Add animation classes
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
}); 