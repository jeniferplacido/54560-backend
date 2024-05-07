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
            console.log('Cookie:', document.cookie);
        } else {
            console.error('Erro ao fazer login:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
    }
});
// Função para fazer requisições para a rota protegida /current
async function fetchCurrentUser() {
    try {
        const token = getToken(); // Função para obter o token JWT do cookie ou armazenamento local
        if (!token) {
            throw new Error('Token JWT não encontrado');
        }

        const response = await fetch('/current', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const user = await response.json();
            console.log('Usuário autenticado:', user);
        } else {
            console.error('Erro ao acessar rota protegida:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao fazer requisição para /current:', error.message);
    }
}

// Função para obter o token JWT do cookie ou armazenamento local
function getToken() {
    // Lógica para obter o token JWT do cookie ou armazenamento local
    // Exemplo com cookie:
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    return token ? token.split('=')[1] : null;
}

// Exemplo de chamada da função para fazer a requisição para a rota /current
fetchCurrentUser();

