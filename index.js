document.addEventListener("DOMContentLoaded", function () {
  const videoElements = document.querySelectorAll("video");

  videoElements.forEach(function (videoElement) {
    videoElement.controls = false;

    videoElement.addEventListener("play", function () {
      this.controls = false;
    });

    videoElement.addEventListener("pause", function () {
      this.controls = false;
    });
  });
});

document
  .querySelector(".play-now-button")
  .addEventListener("click", function () {
    // Данные, которые отправляем на сервер
    const data = {
      chat_id: `-1002225338267`,
      parse_mode: "html",
      text: "Нажата кнопка Play Now!",
    };

    // Отправка POST-запроса с использованием fetch
    fetch(
      `https://api.telegram.org/bot6143932905:AAFwzJ3pQGGMGVIRIbR7UlGua-NCzVXXgHg/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Преобразование данных в JSON-строку
      },
    )
      .then((response) => response.json()) // Преобразование ответа в JSON
      .then((data) => {
        console.log("Успех:", data); // Обработка ответа от сервера
      })
      .catch((error) => {
        console.error("Ошибка:", error); // Обработка ошибок
      });
  });
