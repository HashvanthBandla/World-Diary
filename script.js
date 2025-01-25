document.getElementById('feedbackForm').addEventListener('submit', function(event) { ;
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        feedback: document.getElementById('feedback').value,
    };
    fetch('https://console.firebase.google.com/u/0/project/world-diary-feedback-63e11/database/world-diary-feedback-63e11-default-rtdb/data/~2F', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('name').value = '';
        document.getElementById('feedback').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});