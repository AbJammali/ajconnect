document.getElementById('helpForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = 'Submitting...';

    try {
        const response = await fetch('/api/help', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (response.ok) {
            resultMessage.textContent = result.message || 'Your request has been submitted successfully.';
            form.reset();
        } else {
            resultMessage.textContent = result.message || 'Failed to submit your request. Please try again.';
        }
    } catch (error) {
        resultMessage.textContent = 'Network error. Please try again later.';
    }
});
