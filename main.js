const button = document.getElementById('button');
button.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
        .then(data => {
            const imageUrl = data.message;
            const image = document.getElementById('dog');
            image.src = imageUrl;
        }
        )
        .catch(error => console.error(error));
});
