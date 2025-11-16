'use strict'

let hunger = 50;
let happiness = 50;
let health = 50;
let isRunning = true;

while (isRunning) {

let menu = 
    `
Ваш питомец:
Голод: ${hunger}
Счастье: ${happiness}
Здоровье: ${health}
---
Чем займемся?
1. Кормить
2. Играть
3. Уложить спать
4. Выход
    `;

const choise = (prompt(menu));

switch (choise) {
    case '1':
        (hunger += 10);
        (happiness -= 5);
        (health -= 5);
        if (hunger <= 0, happiness <= 0, health <= 0) {
            alert('Вы проиграли')
            isRunning = false;
        }
    break;

    case '2':
        (happiness += 10);
        (hunger -= 5);
        (health -= 5);
        if (hunger <= 0, happiness <= 0, health <= 0) {
            alert('Вы проиграли')
            isRunning = false;
        }
    break;
}

}