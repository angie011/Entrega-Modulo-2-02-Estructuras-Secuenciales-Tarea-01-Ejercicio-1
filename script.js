let cantidadEstudiantes = 0;
let cantidadHombres = 0;
let cantidadMujeres = 0;
let porcentajeHombres = 0;
let porcentajeMujeres = 0;

cantidadEstudiantes = Number(prompt('Cantidad de estudiantes en el grupo: '));
cantidadHombres = Number(prompt('Cantidad de hombres en el grupo: '));
cantidadMujeres = Number(prompt('Cantidad de mujeres en el grupo: '));

porcentajeHombres = (cantidadHombres*100)/cantidadEstudiantes;
porcentajeMujeres = (cantidadMujeres*100)/cantidadEstudiantes;

alert(`Total estudiantes en el grupo: ${cantidadEstudiantes}
       Porcentaje hombres: ${porcentajeHombres}%
       Porcentaje mujeres: ${porcentajeMujeres}%`);
