/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';



const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: () => {
        personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    
    },

    rememberMyFilms: () => {
        if (personaMovieDB.count > 30) {
            alert('Вы киноман!');
        } else if (personaMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else {
            alert('Произошла ошибка');
        }
    },

    detectPersonalLevel: () => {
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
    },

    showMyDB: (hidden) => {
        if (!hidden) {
             console.log(personaMovieDB);
        }
    },

    writeYourGenres: () => {
        for (let i = 1; i < 4; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`);
            if (a != null && a != '') {
                personaMovieDB.genres[i-1] = a;
            } else {
                i--;
            }
        }
        personaMovieDB.genres.forEach((genre, index) => {
            console.log(`Любимый жанр номер ${index + 1} - это ${genre}`);
        });
    },

    toggleVisibleMyDB: () => {
        if (personaMovieDB.privat) {
            personaMovieDB.privat = false;
        } else {
            personaMovieDB.privat = true;
        }
    }

};
