// Introducción a JavaScript
// Proyecto Final : 
function agregarComentario(commentText) {
    if (commentText.trim() !== "") {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        const commentContent = document.createElement('p');
        commentContent.textContent = commentText;
        commentElement.appendChild(commentContent);

        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.textContent = new Date().toLocaleString();
        commentElement.appendChild(dateElement);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteBtn');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function(){
            commentElement.remove();
            console.log(`Comentario borrado: "${commentText}"`);
        });
        commentElement.appendChild(deleteButton);

        document.getElementById('commentsContainer').appendChild(commentElement);
        document.getElementById('commentInput').value = '';
        console.log(`Comentario agregado: "${commentText}"`);
    }
}

document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    agregarComentario(commentText);
});

document.getElementById('commentInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const commentInput = document.getElementById('commentInput');
        const commentText = commentInput.value.trim();
        agregarComentario(commentText);
    }
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Gracias ${name}, tu mensaje ha sido enviado.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

//Viva Batiz y ESCOM <3<3<3
