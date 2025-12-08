/* ===================================
   IT 3203 - JavaScript File
   Student: Dawson Chanlyvong
   Mobile menu functionality and quiz
   =================================== */

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Toggle menu when hamburger button is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.nav-container');
        if (!isClickInside && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Quiz form submission handler
function submitQuiz(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    let score = 0;
    let totalQuestions = 10;
    
    // Check answers
    // Question 1: HTML stands for
    const q1 = form.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'hypertext') {
        score++;
    }
    
    // Question 2: CSS is used for
    const q2 = form.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'styling') {
        score++;
    }
    
    // Question 3: Which are valid HTML tags (multiple answers)
    const q3Checked = form.querySelectorAll('input[name="q3"]:checked');
    const q3Values = Array.from(q3Checked).map(cb => cb.value);
    // All options are actually valid HTML elements, but div and p are the most common structural elements
    if (q3Values.includes('div') && q3Values.includes('p')) {
        score++;
    }
    
    // Question 4: Responsive design
    const q4 = form.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'multiple') {
        score++;
    }
    
    // Question 5: Media queries
    const q5 = form.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'css') {
        score++;
    }
    
    // Question 6: CSS box model components
    const q6Checked = form.querySelectorAll('input[name="q6"]:checked');
    const q6Values = Array.from(q6Checked).map(cb => cb.value);
    // All four are correct
    if (q6Values.includes('content') && q6Values.includes('padding') && 
        q6Values.includes('border') && q6Values.includes('margin')) {
        score++;
    }
    
    // Question 7: CSS text color property
    const q7 = form.querySelector('input[name="q7"]:checked');
    if (q7 && q7.value === 'color') {
        score++;
    }
    
    // Question 8: Semantic HTML
    const q8 = form.querySelector('input[name="q8"]:checked');
    if (q8 && q8.value === 'meaning') {
        score++;
    }
    
    // Question 9: Purpose of nav element
    const q9 = form.querySelector('input[name="q9"]:checked');
    if (q9 && q9.value === 'navigation') {
        score++;
    }
    
    // Question 10: Responsive design approach
    const q10 = form.querySelector('input[name="q10"]:checked');
    if (q10 && q10.value === 'mobile') {
        score++;
    }
    
    // Calculate percentage
    const percentage = (score / totalQuestions) * 100;
    
    // Display results
    let message = `You scored ${score} out of ${totalQuestions} (${percentage}%).\n\n`;
    
    if (percentage >= 80) {
        message += 'Excellent work! You have a strong understanding of web development basics.';
    } else if (percentage >= 60) {
        message += 'Good job! You understand the fundamentals, but review the material for better mastery.';
    } else {
        message += 'Keep studying! Review the content pages to improve your understanding.';
    }
    
    alert(message);
    
    // Optionally reset the form after showing results
    // form.reset();
}

// Smooth scrolling for anchor links
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