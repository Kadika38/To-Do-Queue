const loginHandler = async (event) => {
    event.preventDefault();

    const username = 'tester';
    const password = 'tester';

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    };
}

document.querySelector('#testerLoginBtn').addEventListener('click', loginHandler);