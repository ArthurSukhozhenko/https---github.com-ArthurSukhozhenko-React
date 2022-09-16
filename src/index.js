import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 let dialogs = [
   { id: 1, name: "Олег" },
   { id: 2, name: "Бармалей" },
   { id: 3, name: "Тоха" },
   { id: 4, name: "Аля" },
   { id: 5, name: "Света" },
   { id: 6, name: "Sasa" },
 ];

 let messages = [
   { id: 1, message: "Привіт" },
   { id: 2, message: "Я тут Босс!!!" },
   { id: 3, message: "Як справи?" },
   { id: 4, message: "Bla bla bla" },
   { id: 5, message: "Го ту ріва?" },
   { id: 6, message: "Запрошую на паті" },
 ];

let posts = [
  { id: 1, message: "Вітаю бро", likeCount: 12 },
  { id: 2, message: "Як справи?", likeCount: 11 },
  { id: 3, message: "Я вчу React", likeCount: 17 },
  { id: 4, message: "Я love JavaScript", likeCount: 78 },
  { id: 5, message: "Тобі подобається?", likeCount: 45 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
