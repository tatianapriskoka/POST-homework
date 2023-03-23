const post = document.querySelector('.post');
const title = document.querySelector('.input__name');
const text = document.querySelector('.input__text');
const button = document.querySelector('.input__button');

//функция для создания шаблона поста

function makeTemplate(title, body) {
    let template = `
    <div class = 'post__title'>${title}</div>
    <div class = 'post__body'>${body}</div>
`
    post.innerHTML += template;
}


//функция для создания поста

function makePost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: text.value
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
            makeTemplate(data.title, data.body);

        })
}

//функция для удаления предыдущего поста

function removePost() {
    post.innerHTML = '';
}

//создание поста при клике на кнопку и удаление предыдущего
button.addEventListener('click', () => {
    makePost();
    removePost();
});




