document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('registroForm');

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {
            nombre: formulario.nombre.value,
            apellido: formulario.apellido.value,
            fechaNacimiento: formulario.fechaNacimiento.value
        };

        const url = 'https://jsonplaceholder.typicode.com/users';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, options);
            const responseData = await response.json();
            console.log('Respuesta del servidor:', responseData);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});