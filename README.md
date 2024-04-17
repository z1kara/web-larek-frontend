# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Описание проекта

Проект представляет собой интернет-магазин реализованный с помощью архитектуры MVP (Model-View-Presenter)

Слой данных (Model) — между сервером и интерфейсом есть данные, в которых отражена вся ценность нашего приложения. Нередко он содержит значительную часть бизнес-логики.

Слой отображения (View) — интерфейс для взаимодействия с пользователем. Его задача — выводить что-то на экран и генерировать события с действиями пользователя.

Слой представления (Presenter), или Слой коммуникации, — для небольших приложений обычно достаточно клиента API для взаимодействия с сервером. Он будет получать данные извне и отправлять их за пределы браузера.

## Типы данных

IProduct - интерфейс карточки товара
Поля:
- `id:string;` - id товара
- `description:string;` - описание товара
- `name:string;` - название товара
- `category:string;` - категория товара
- `price:number|null;` - цена товара
- `image:string;` - картинка товара

IPage - интерфейс страницы
Поля:
- `basket:number;` кол-во товаров в корзине
- `catalog:HTMLElement[];` - массив карточек товаров на странице

IPaymentForm - интерфейс формы доставки
Поля:
- `payment: string;` - метод оплаты
- `address: string;` - адрес доставки  

IContactForm - интерфейс формы контактов покупателя
Поля:
- `email: string;` - почта покупателя
- `phone: string;` - телефон покупателя

IOrder extends IPaymentForm,IContactForm - интерфейс заказа
Поля:
- `total: number;` - сумма за все выбранные товары
- `items: string[];` - массив выбранных товаров

ISuccessfulPurchase - интерфейс удачной покупки 
Поля:
- `id:string;` - id заказа
- `total:number;` - сумма заказа

IBasket - интерфейс корзины
Поля:
- `items: HTMLElement[];` - массив товаров выбранных пользователем в корзине
- `total: number;` - общая сумма товаров в корзине 

IValidOrder extends IOrder - интерфейс валдиности заказа
Поля:
- `errormessage:string[];` - сообщение об ошибке из массива

## Класс Api
   - **baseUrl**: Базовый URL для всех запросов.
   - **options**: Настройки запроса, включая заголовки с типом содержимого 'application/json'.
   - **constructor(baseUrl, options)**: Конструктор класса, принимающий базовый URL и дополнительные параметры запроса.
   - **handleResponse(response)**: Метод для обработки ответа от сервера. Если ответ успешен, возвращает JSON-данные. В противном случае возвращает ошибку или текст ошибки.
   - **get(uri)**: Метод для выполнения GET-запроса по указанному URI.
   - **post(uri, data, method)**: Метод для выполнения POST-запроса (по умолчанию) или другого указанного метода (PUT или DELETE) с передачей данных в формате JSON.

## Класс EventEmitter

`EventEmitter` - позволяет подписываться на определенные события, отписываться от них, инициировать события и многое другое.

Класс `EventEmitter` содержит методы для управления событиями:
- `on`: устанавливает обработчик на определенное событие.
- `off`: снимает обработчик с события.
- `emit`: инициирует событие с данными.
- `onAll`: позволяет подписаться на все события.
- `offAll`: сбрасывает все обработчики.
- `trigger`: создает коллбек-триггер, который генерирует событие при вызове.
