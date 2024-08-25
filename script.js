// Registration and Login Validation
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('registration-feedback').innerText = `Welcome, ${username}! You have registered successfully.`;
        document.getElementById('registration-feedback').style.color = 'green';
    } else {
        document.getElementById('registration-feedback').innerText = 'Please fill in all fields.';
        document.getElementById('registration-feedback').style.color = 'red';
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === 'testuser' && password === 'password') {
        document.getElementById('login-feedback').innerText = 'Login successful!';
        document.getElementById('login-feedback').style.color = 'green';
    } else {
        document.getElementById('login-feedback').innerText = 'Invalid username or password.';
        document.getElementById('login-feedback').style.color = 'red';
    }
});

// Self-Assessment Handling
document.getElementById('assessment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback');
    const question1 = document.getElementById('question1').value;

    if (question1 === 'always' || question1 === 'often') {
        feedback.innerText = 'It might be helpful to speak with a mental health professional.';
        feedback.style.color = 'red';
    } else {
        feedback.innerText = 'Keep practicing self-care and monitor your feelings.';
        feedback.style.color = 'green';
    }
});

// Progress Tracking
let completedModules = 0;
document.querySelectorAll('.complete-module').forEach(button => {
    button.addEventListener('click', function() {
        completedModules += 1;
        document.getElementById('completed-modules').innerText = completedModules;
        alert('Module marked as complete!');
    });
});

// Basic Notification
if (Notification.permission === 'granted') {
    new Notification('Time for your next session!');
} else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('You will receive notifications from us.');
        }
    });
}
