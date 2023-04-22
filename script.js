//  Todos los elementos de la paguina
const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color-number");
const colorCard = document.querySelector(".color-card");

// Logica para generar los colores que da un valor entre 1 a 256
// Son solo 3 letras primero el rojo, luego el verde de ultimo el azul
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  //Asignar cada uno de los valores a las letras que permiten dar el color
  const rbgColor = `rgb(${r},${g},${b})`;

  // Devuelve el nuevo valor de rgb con los parametros del nuevo color
  return rbgColor;
};

const setBackgrount = () => {
  //Genera el nuevo color de manera Ramdom con los palamtros de arriba
  const newColor = generateRandomColor();
  console.log(newColor);
  colorNumber.innerHTML = newColor;

  //Cambia el color del fondo
  body.style.backgroundColor = newColor;
  colorCard.style.backgroundColor = newColor;
};
//Boton dentro del renglon que cambia el color del background y el color de la izquierda
button.addEventListener("click", setBackgrount);