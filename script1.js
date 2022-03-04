/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms () {
    if (personaMovieDB.count > 30) {
        alert('Вы киноман!');
    } else if (personaMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else {
        alert('Произошла ошибка');
    }
};


rememberMyFilms();



function detectPersonalLevel () {
    for (let i = 0; i < 3; i++) {
        const a = prompt('Назовите один из последних фильмов', ''),
              b = prompt('Поставьте ему оценку', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personaMovieDB.movies[a] = b;
        }
        else {
            i--;
        }
    }
}

detectPersonalLevel();


function showMyDB (hidden) {
    if (!hidden) {
         console.log(personaMovieDB);
    }
}

showMyDB(personaMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        personaMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    return console.log(personaMovieDB.genres);
}

writeYourGenres ();