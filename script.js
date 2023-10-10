let formulario = document.querySelector("form");
let aciertos = 0;
let errores = 0;
//let labels = document.querySelectorAll("label");

const respuestas = {
	pregunta01: "dios",
	pregunta02: "monje",
	pregunta03: "mordedor",
	pregunta04: "dormir",
	pregunta05: "aprieta",
	pregunta06: "rabilargo",
	pregunta07: "dinero",
	pregunta08: "astilla",
	pregunta09: "librillo",
	pregunta10: "leña",
}

formulario.addEventListener("submit", function(event) {
	event.preventDefault();

	//recopilar respuestas usuario
	const pregunta1 = event.target.pregunta1.value;
	//el value de cada respuesta enviada por el usuario es igual que la id del botón que ha pinchado
	let label1= document.getElementById(`${pregunta1}`);
	//con la id del boton y parentNode llegamos al label lo contiene y que habra que colorear
	label1 = label1.parentNode;

	const pregunta2 = event.target.pregunta2.value;
	let label2= document.getElementById(`${pregunta2}`);
	label2 = label2.parentNode;
	
	const pregunta3 = event.target.pregunta3.value;
	let label3= document.getElementById(`${pregunta3}`);
	label3 = label3.parentNode;

	const pregunta4 = event.target.pregunta4.value;
	let label4= document.getElementById(`${pregunta4}`);
	label4 = label4.parentNode;

	const pregunta5 = event.target.pregunta5.value;
	let label5= document.getElementById(`${pregunta5}`);
	label5 = label5.parentNode;

	const pregunta6 = event.target.pregunta6.value;
	let label6= document.getElementById(`${pregunta6}`);
	label6 = label6.parentNode;

	const pregunta7 = event.target.pregunta7.value;
	let label7= document.getElementById(`${pregunta7}`);
	label7 = label7.parentNode;

	const pregunta8 = event.target.pregunta8.value;
	let label8= document.getElementById(`${pregunta8}`);
	label8 = label8.parentNode;

	const pregunta9 = event.target.pregunta9.value;
	let label9= document.getElementById(`${pregunta9}`);
	label9 = label9.parentNode;

	const pregunta10 = event.target.pregunta10.value;
	let label10= document.getElementById(`${pregunta10}`);
	label10 = label10.parentNode;
	
	//meter en un array las respuestas
	const elegidas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10];
	console.log(elegidas);

	//meter en array las label que las contienen
	const labels = [label1, label2, label3, label4, label5, label6, label7, label8, label9, label10]
	//pasar objeto de respuestas a array
	const comparar =  Object.values(respuestas);

	//comparar las de usuario con las respuesta correctas
	for (let i = 0; i <elegidas.length ; i++){
		if (elegidas[i] == comparar[i]){
			console.log (`Has acertado la pregunta ${i+1}`)
			labels[i].className = "correcta";
			aciertos ++;
		} else {
			console.log (`Has fallado la pregunta ${i+1}`)
			labels[i].className = "incorrecta";
			errores++;
		}
	
	}
	

})