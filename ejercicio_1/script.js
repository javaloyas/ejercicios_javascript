//ejercicio_1
// Arrow function con parámetros por defecto
const suma = (a = 10, b = 5) => {
  console.log(a + b);
};

suma();        
suma(20);     
suma(7, 3);    
