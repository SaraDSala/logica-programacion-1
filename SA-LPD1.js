// Declaración de variables para almacenar los números ingresados y los números ordenados
let num1, num2, num3, numMayor, numMedio, numMenor;

// Solicitar al usuario que ingrese tres números y convertirlos a números enteros
num1 = "a"
num2 = 2
num3 = 5

// Verificar si las entradas son números válidos
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {

  // Determinar el número mayor, el del medio y el menor
  if (num1 > num2 && num1 > num3) {
    numMayor = num1;
    numMedio = Math.max(num3, num2);
    numMenor = Math.min(num3, num2);
    // Imprimir los números ordenados de mayor a menor y de menor a mayor
    console.log("Números ordenados de mayor a menor: " + numMayor + " " + numMedio + " " + numMenor);
    console.log("Números ordenados de menor a mayor: " + numMenor + " " + numMedio + " " + numMayor);

  } else if (num2 > num1 && num2 > num3) {
    numMayor = num2;
    numMedio = Math.max(num3, num1);
    numMenor = Math.min(num3, num1);
    // Imprimir los números ordenados de mayor a menor y de menor a mayor
    console.log("Números ordenados de mayor a menor: " + numMayor + " " + numMedio + " " + numMenor);
    console.log("Números ordenados de menor a mayor: " + numMenor + " " + numMedio + " " + numMayor);
    
  } else if (num3 > num1 && num3 > num2) {
    numMayor = num3;
    numMedio = Math.max(num2, num1);
    numMenor = Math.min(num2, num1);
    // Imprimir los números ordenados de mayor a menor y de menor a mayor
    console.log("Números ordenados de mayor a menor: " + numMayor + " " + numMedio + " " + numMenor);
    console.log("Números ordenados de menor a mayor: " + numMenor + " " + numMedio + " " + numMayor);
  }

  // Verificar si los números son iguales y mostrar mensajes correspondientes
  if (num1 === num2 && num1 === num3) {
    console.log("Todos los números son iguales.");
  } else if (num1 === num2) {
    console.log("El primer número que ingresó es igual al segundo.");
  } else if (num1 === num3) {
    console.log("El primer número que ingresó es igual al tercero.");
  } else if (num2 === num3) {
    console.log("El segundo número que ingresó es igual al tercero.");
  } else {
    console.log("Los números no son iguales")
  }
} else {
  console.log("Su entrada es errónea"); // Mostrar un mensaje si las entradas no son números válidos
}
