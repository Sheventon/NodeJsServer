bodyParser = require('body-parser').json();
const fs = require("fs");

module.exports = function (app) {
    app.get('/JSONResume', (request, response) => {
        var result = {
            "name": "Шеверда Антон Игоревич",

            "description": "Студент КФУ, высшая школа информационных технологий и " +
                "интеллектуальных систем. Мне 19 лет. Java one love! Очень " +
                "классный, очень удобный язык программирования. Буду жава " +
                "девелопером! Вторая моя любовь - это футбол. Это лучший вид " +
                "спорта в мире (по моему субъективному мнению). Являюсь " +
                "игроком мини-футбольной сборной КФУ.",

            "image": "https://sun9-41.userapi.com/c830308/v830308701/d6f86/TnOcuhqyc8U.jpg",

            "themes": [
                "Математический анализ (шучу)",
                "Фильмы Marvel",
                "Европейский футбол",
                "Программирование на Java",
                "Смартфоны",
                "История (слегка)"
            ],

            "phone": "+7 (937) 623-70-20",

            "email": "tores.fernando.real@gmail.com",

            "discord": "_Shevanton_#7865",

            "telegram": "@Shevantonio",
        };
        response.send(JSON.stringify(result));
    });

    app.get('/users1', (request, response) => {
        let arr = fs.readFileSync('app/data/requests.txt').toString().trim().split("\n");
        for(let i = 0; i < arr.length; i++){
            arr[i] = JSON.parse(arr[i]);
        }
        response.setHeader('Content-Type', 'application/json');
        response.send(arr);
    });

    app.post('/request', bodyParser, (request, response) =>{
        let user = request.body;
        fs.appendFileSync('app\\data\\requests.txt', JSON.stringify({full_name: user.full_name, email: user.email}) + "\n");
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(user));
    });
};
