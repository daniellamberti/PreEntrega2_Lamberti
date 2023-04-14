
           /* ===================== Se declaran los ARRAYS y variables ==================== */
const instrumento = [];
const teoria = [];
const armonia = [];
const ensamble = [];

let promedioInst = 0;
let promedioTeor = 0;
let promedioArm = 0;
let promedioEns = 0;
let notaPromFinal = 0;


					  /* Primera interacción con el usuario, se le pide sus datos. */

alert("¿Queres saber si aprobaste tu curso?")

const nombre = prompt("Hola! por favor ingresa tu nombre y apellido");

                            /* =====<<<  FUNCIONES  ======>>>  */

    /* funcion para obtener las notas de los exámenes (y su nota promedio) de las distintas asignaturas. */

function promedioExamenes(materia, cantExamenes,asignatura) {
	let suma = 0;
	let i = 0;

	while (i <= (cantExamenes-1)) {
		let notaExamen = parseFloat(prompt("Ingresa la nota de tu examen " + (i + 1) + " de " + asignatura));
		if (isNaN(notaExamen) || notaExamen > 10 || notaExamen < 0) {
			alert("La nota ingresada debe ser un número entre 0 y 10");
			continue
		}
		suma = suma + notaExamen;
		materia[i] = notaExamen;
		i++

	}

	alert(`La suma de tus ${cantExamenes} exámenes de ${asignatura} es ${suma.toFixed(2)}`);
	promedio = suma / cantExamenes;

	return promedio;
}

		/* Se obtienen las notas de los 3 exámenes de INSTRUMENTO  utilizando la función correspondiente y
      		              se realiza el promedio de las mismas. */

alert("Hola " + nombre + " , comenzaremos por la materia INSTRUMENTO, ingresá las 3 calificaciones obtenidas");
promedioExamenes(instrumento, 3,"instrumento");
promedioInst = promedio;

alert("El promedio de tus tres notas de exámenes de instrumento es " + promedioInst.toFixed(2));

if (promedio >= 6) {
	alert("Tu promedio es igual o mayor que 6 por lo tanto tenés esta materia aprobada");
}
else {
	alert("Tu promedio es menor que 6 por lo tanto debés repetir el examen o exámenes reprobados para poder aprobar la materia");
}


        /* Se obtienen las notas de los 5 exámenes de TEORÍA y se realiza el promedio de las mismas. */

alert("Ahora continuaremos con tus 5 notas de Teoría");
promedioExamenes(teoria,5,"teoria");

promedioTeor = promedio;

alert("El promedio de tus cinco notas de exámenes de teoría es " + promedioTeor.toFixed(2));

if (promedio >= 6) {
	alert("Tu promedio es igual o mayor que 6 por lo tanto tenés esta materia aprobada");
}
else {
	alert("Tu promedio es menor que 6 por lo tanto debés repetir el examen o exámenes reprobados para poder aprobar la materia");
}



         /* Se obtienen las notas de los 4 exámenes de ARMONIA y se realiza el promedio de las mismas. */

 alert("Ahora veamos las 4 notas de Armonía");
 promedioExamenes(armonia, 4,"armonia" );

 promedioArm = promedio;

 alert("El promedio de tus cuatro notas de exámenes de armonía es " + promedioArm.toFixed(2));

if (promedio >= 6) {
	alert("Tu promedio es igual o mayor que 6 por lo tanto tenés esta materia aprobada");
}
else {
	alert("Tu promedio es menor que 6 por lo tanto debés repetir el examen o exámenes reprobados para poder aprobar la materia");
}


       /* Se obtienen las notas de los 3 examenes de ENSAMBLE y se realiza el promedio de las mismas. */
alert("Y ahora, por último, ingresa las 3 notas de Ensamble");
promedioExamenes(ensamble, 3,"ensamble");

promedioEns = promedio;

alert("El promedio de tus tres notas de exámenes de ensamble es " + promedioEns.toFixed(2));

if (promedio >= 6) {
	alert("Tu promedio es igual o mayor que 6 por lo tanto tenés esta materia aprobada");
}
else {
	alert("Tu promedio es menor que 6 por lo tanto debés repetir el examen o exámenes reprobados para poder aprobar la materia");
}

                                  /* Se crea el OBJETO alumno */

const alumno = {
	nombre: nombre,
	puntoExtra: 0,
	faltas: 0,
	promediosAsig: [promedioInst, promedioTeor, promedioArm, promedioEns],
	notaFinal () {
		nota = 0;
	notaPromFinal = [(promedioInst + promedioTeor + promedioArm + promedioEns) / 4] + puntoExtra - faltas;
	return notaPromFinal.toFixed(2);
	}
}
               /* Se averigua si el usuario asistio alguna o algunas clases extras del curso. */
let opt = 0;
let puntoExtra = 0;

do {
	let opt = parseInt(prompt("Asististe a alguna / algunas clases extras del curso? " + "\n" + "1 - SI"  + "\n" + "2 - NO"));
	if(opt != 1 && opt !=2) {
		alert("Debés seleccionar una opción válida");
		continue;
	}

	else if(opt === 1) {
		alumno.puntoExtra = 1;
		alert("Por haber asistido a alguna / algunas clases extras obtuviste " + alumno.puntoExtra + " punto a sumar a tu nota promedio final");
		break;
	}

	else if (opt === 2) {
		alumno.puntoExtra = 0;
		break;
	}
}
while((opt != 1) && (opt != 2));

                    /* Se averigua si el usuario faltó a más de 3 clases del curso */
let faltas = 0;
do {
	let faltas = parseInt(prompt("Faltaste a más de 3 clases del curso? " + "\n" + "1 - SI"  + "\n" + "2 - NO"));
	if(faltas!= 1 && faltas !=2) {
		alert("Debés ingresar una opción válida");
		continue;
	}

	else if(faltas == 1) {
		alumno.faltas = 2;
		alert("Por haber faltado a más de 3 clases del curso tenés un descuento de " + alumno.faltas + " puntos en tu nota promedio final.");
		break;
	}
	else if(faltas == 2) {
		alert("No se te descontará ningún punto por faltas");
		alumno.faltas = 0;
		break;
	}
}
while((faltas != 1) && (faltas!= 2));


          /* Se recuerda al usuario cuales son los promedios de cada una de las materias rendidas. */

alert("Te recordamos que obtuviste las siguientes notas promedio a saber: " + "\n" + "Instrumento: " + promedioInst.toFixed(2) + "\n" + "Teoria: " + promedioTeor.toFixed(2) + "\n" + "Armonia: " + promedioArm.toFixed(2) + "\n" + "Ensamble: " + promedioEns.toFixed(2));

alert("Según los datos ingresados, considerando la nota promedio de las notas de Instrumento, Teoría, Armonía y Ensamble, más el agregado eventual de 1 punto por haber asistido a clases extras, más el descuento eventual de 2 puntos por faltas, tu nota promedio final del curso es " + alumno.notaFinal());

if (alumno.notaFinal() >=6) {
	alert("Tu nota promedio final de curso es igual o mayor que 6 por lo tanto estas APROBADO");
}
else {
	alert("Tu nota promedio final de curso es menor a 6 por lo tanto estas REPROBADO y debés cursarlo nuevamente");
}


/* Se ofrece al usuario un MENÚ de opciones donde puede verificar información acerca de sus notas y asignaturas */

let continuar = true;
do {
	let consultas = parseInt(prompt("Selecciona la opción u opciones del MENÚ para realizar tus consultas. Para SALIR selecciona 7\n 1 - Ver las notas de todos los exámenes por asignatura\n 2 - Verificar los PROMEDIOS de cada asignatura\n 3 - Verificar la nota más alta obtenida en los exámenes de cada asignatura\n 4 - Verificar la nota más baja obtenida en los exámenes de cada asignatura" + "\n" +  "5 - Verificar si se obtuvo un punto extra por asistir a clases especiales\n 6 - Verificar si hubo más de 3 faltas en la cursada\n 7 - SALIR"));

	if(consultas == 1) {
		alert("Las notas de todos los exámenes de las asignaturas rendidas son: " + "\n" + "\n" + "Instrumento: " + instrumento + "\n" + "Teoria: " + teoria + "\n"  + "Armonia: " + armonia + "\n" + "Ensamble: " + ensamble);
	}


	else if(consultas == 2) {
		alert("Los promedios de los exámenes por ASIGNATURA son:" + "\n" + "Instrumento : " + alumno.promediosAsig[0].toFixed(2) + "\n" + "Teoria : " + alumno.promediosAsig[1].toFixed(2) + "\n" + "Armonia : " + alumno.promediosAsig[2].toFixed(2) + "\n" + "Ensamble : " + alumno.promediosAsig[3].toFixed(2))
	}

	else if(consultas == 3) {
		function notaMaxExam(materias){
			let notaMasAlta = 0;
			for(let i = 0; i < materias.length; i++) {
				if(materias[i] > notaMasAlta) notaMasAlta = materias[i];
			}
			return notaMasAlta;
		}
		alert("La nota más alta obtenida en los exámenes de las distintas asignaturas fue:" + "\n" + "Instrumento: " + notaMaxExam(instrumento) + "\n" + "Teoria: " + notaMaxExam(teoria) + "\n" + "Armonia: " + notaMaxExam(armonia) + "\n" + "Ensamble: " + notaMaxExam(ensamble));
	}

	else if(consultas == 4) {
		function notaMinExam(materias){
			let notaMasBaja = 11;
			for(let i = 0; i < materias.length; i++) {
				if(materias[i] < notaMasBaja) notaMasBaja = materias[i];
			}
			return notaMasBaja;
		}
		alert("La notas más baja obtenida en los exámenes de las distintas asignaturas fue:" + "\n" + "Instrumento: " + notaMinExam(instrumento) + "\n" + "Teoria: " + notaMinExam(teoria) + "\n" + "Armonia: " + notaMinExam(armonia) + "\n" + "Ensamble: " + notaMinExam(ensamble));
	}

	else if(consultas == 5) {

		if(alumno.puntoExtra == 1) {
			alert("Por haber asistido alguna / algunas clases extras has obtenido 1 punto");
		}
		else {
		alert("No has obtenido ningún punto por asistencia a clases extras");
		}
	}

	else if(consultas == 6) {
		if(alumno.faltas == 2) {
			alert("Por haber faltando a más de 3 clases del curso se te han descontado 2 puntos");
		}
		else {
		alert("No se te ha descontado ningún punto por faltas.");
		}
	}

	else if(consultas == 7) {
		alert("Gracias por usar nuestro servicio");
		continuar = false;
	}
}
while(continuar);



