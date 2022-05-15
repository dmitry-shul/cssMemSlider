const buttonBlocks = document.querySelectorAll(".main__buttonBlock");
const image1 = document.querySelector(".main__image1");
const text = document.querySelector(".main__text");

const mem_text = [
  "То, что вы увидите, называется МЕМЫ",
  "ты чего наделал....",
  "Где живут мемы?",
  "Жаль"
]; //массив цитат
let i = 0; // значение для анимации текста
let clientWidth = document.documentElement.clientWidth; // ширина экрана

//переключение кнопок
buttonBlocks.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    document.querySelector(".activeButton").classList.remove("activeButton");
    btn.classList.add("activeButton");
    changeSlide(index);
    changeText(index);
  })
);

//отслеживание размера экрана
window.addEventListener("resize", () => {
  clientWidth = document.documentElement.clientWidth;
  clientWidth < 480 ? changeSlide(i) : changeSlide(i);
});

//изменение картинкаи
function changeSlide(index) {
  image1.style = `margin-top: -${clientWidth > 480 ? 400 * index : 280 * index}px;`;
}

//изменение текста
function changeText(index) {
  text.style = `transform: translateY(${index > i ? "-" : ""}10px); opacity: 0;`;
  setTimeout(() => {
    text.innerText = "";
    text.innerText = mem_text[index];
    text.style = `transform: translateY(${index < i ? "-" : ""}10px); opacity: 0;`;
  }, 200);

  setTimeout(() => {
    text.style = "transform: translateY(0); opacity: 1;";
    i = index;
  }, 300);
}
