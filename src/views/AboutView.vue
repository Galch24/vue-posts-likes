<template>
  <div class="about max-w-2xl mx-auto bg-white rounded-md shadow-md p-6">
    <h1>Задание:</h1>
    <p>
      - В среде https://codesandbox.io/ или любой другой подобной, реализовать
      задачу
    </p>
    <p>
      - Ниже описанная задача несет в себе абстрактный пример, для проверки
      навыков
    </p>
    <p>Стек:</p>
    <p>Frontend: Vue 3</p>
    <p>Store: Pinia VUEX</p>
    <p>CSS: Tailwind</p>
    <p>Данные: https://jsonplaceholder.typicode.com/</p>
    <p>Функционал:</p>
    <p>
      - На странице выводится по 5 записей = post
      (https://jsonplaceholder.typicode.com/)
    </p>
    <p>- На странице есть пагинация</p>
    <p>- Ниже общего списка записей есть набор</p>
    <p>- Записи, которые понравились</p>
    <p>- Записи, которые не понравились</p>
    <p>
      - У записи есть возможность выбрать варианты, нравится или нет. При выборе
      одного из вариантов запись попадает в соответсвующий список и исчезает из
      общего.
    </p>
    <p>
      - Записи можно возвращать из списков "Понравилось" или "Не понравилось" в
      общий список
    </p>
    <p>- Визуальные решения = дизайн на ваш выбор</p>
  </div>
</template>

<style scoped lang="scss">
.about {
  text-align: left;
}
</style>
