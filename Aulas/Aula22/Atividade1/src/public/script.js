document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Token recebido:', data.token); // Token do cookie

            // Exibir o cookie associado ao token
            // console.log('Cookie:', document.cookie);
        } else {
            console.error('Erro ao fazer login:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
    }
});
