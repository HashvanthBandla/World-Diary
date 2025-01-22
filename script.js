document.getElementById('feedbackForm').addEventListener('submit', function(event) { ;
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        feedback: document.getElementById('feedback').value,
    };
    fetch('https://world-diary-feedback-default-rtdb.firebaseio.com', {
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