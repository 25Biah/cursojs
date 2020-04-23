/* LISTAS
var lista = ["maça", "pera", "laranja"];
console.log(lista);
console.log(lista[1]);
lista.push("Uva");
lista.pop();// retira o ultimo item
console.log(lista.join(" - "));
reverse
length 
toString
join
var frutas = [ {nome: "maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}];
 console.log(frutas[1].nome);*/
 
 /* IF ELSE
 
 var idade =  prompt("Qual a sua Idade?");
 if (idade >= 18){
	 alert("Maior de idade");
	 
 }
 else{
	 alert("menor de idade");
	 
 }
 */
 
 /* WHILE
 var count = 0;
 while (count <= 5){
	 console.log(count);
	 count = count + 1;
	 
 }*/
 
 /*FOR
 
 var count;
 for (count=0; count <=5; count++){
	alert(count);
	 
 }*/
 
 /* DATAS
 var d = new Date;
 alert(d.getMonth()+1);
 alert(d.getHours()+1);
 alert(d.getMinutes()+1);
 */
 
 /* IDADE
 function validar(idade){
	 if (idade >= 18){
		return true;
	 }
	 else{
		 return false;
	 }
	 
 }
 
 idade = prompt("Qual a sua idade?");
 alert(validar(idade));*/
 // FUNCOES
 function soma(n1, n2){
	return n1 + n2;
	 
 }
 function sub(n1, n2){
	return n1 - n2;
	 
 }
 function mult(n1, n2){
	return n1 * n2;
	 
 }
 function div(n1, n2){
	return n1 / n2;
	 
 }
 
 
 function limpar(){
	h2 = document.getElementById("titulo2");
	p = document.getElementById("paragrafo");
	op = document.getElementById("select");
	h2.innerHTML = "";
	op.innerHTML = "";
	p.innerHTML = "";
 }
 function btnSoma(){
	 limpar();
	var n1 = prompt("Primeiro numero: ");
	var n2 = prompt("Segundo numero: ");
	alert("A soma é " + soma(parseInt(n1), parseInt(n2)));
 }
 function btnSub(){
	 	 limpar();
	var n1 = prompt("Primeiro numero: ");
	var n2 = prompt("Segundo numero: ");
	alert("A subitração é " + sub(parseInt(n1), parseInt(n2)));
 }
 function btnMult(){
	 limpar();
	var n1 = prompt("Primeiro numero: ");
	var n2 = prompt("Segundo numero: ");
	alert("A multiplicação é " + mult(parseInt(n1), parseInt(n2)));
 }
 function btnDiv(){
	 limpar();
	var n1 = prompt("Primeiro numero: ");
	var n2 = prompt("Segundo numero: ");
	alert("A divisão é " + div(parseInt(n1), parseInt(n2)));
 }
 function btnFace(){
	 limpar();
	window.open("https://www.facebook.com/profile.php?id=100017538755985");
	 }
function btnInsta(){
	 limpar();
	window.open("https://www.instagram.com/25biah/");
	 }


 
 function btnSobre(){
	 limpar();
	h2 = document.getElementById("titulo2");
	p = document.getElementById("paragrafo");
	h2.innerHTML = "SOBRE";
	p.innerHTML = "Essa é uma página HTML produzida por <a href='#beatriz' onclick='btnBia()'>Beatriz Ribeiro</a> durante a quarentena de 2020.";
 }
 function btnBia(){
	limpar();
	h2 = document.getElementById("titulo2");
	p = document.getElementById("paragrafo");
	h2.innerHTML = "BEATRIZ RIBEIRO";
	p.innerHTML = "Eu sou a Beatriz Ribeiro, mas pode me chamar de Bia, nasci em 2005 na cidade de Bauru, me identifico com a área de TI há 2 anos, e ando me especializando nela. Fiz Programação no <a target='_blank' href='http://www.prepara.com.br/assis-sp'>Prepara Cursos</a> e hoje estou cursando Informatica para Internet na <a target='_blank' href='https://www.etecassis.net/'> Etec Pedro D'arcádia Neto</a>"
	
 }
 function mouseEmCima(imagem) {
   
   imagem.src="imagens/imagem1.jpg";
   
   }
   
function mouseFora(imagem) {
   
   imagem.src="imagens/imagem2.jpg";
   
   }
 function load(){
	 alert("Página carregada");
 }
 function btnMusica(){
	 limpar();
	op = document.getElementById("select");
	op.innerHTML = "<select onchange='mus(this)'> <option value='sel' selected>Selecione uma Tonalidade</option><option value='do'>Dó</option> <option value='re' >Ré</option><option value='mi'>Mi</option><option value='fa'>Fá</option><option value='sol'>Sol</option><option value='la'>Lá</option><option value='si'>Si</option></select><p></p>";
 }
 function mus(elemento){
	
	console.log(elemento.value);
	
	 p = document.getElementById("paragrafo");
     p.innerHTML = "";
	 if (elemento.value == "do"){
		  p.innerHTML = "C - Dm - Em - F - G - Am - Bm7(b5)";
	 }
	 if (elemento.value == "re"){
		  p.innerHTML = "D - Em - F#m - G - A - Bm - C#m7(b5)";
	 }
	 if (elemento.value == "mi"){
		  p.innerHTML = "E - F#m - G#m - A - B - C#m - D#m7(b5)";
	 }
	 if (elemento.value == "fa"){
		  p.innerHTML = "F - Gm - Am - B - C - Dm - Em7(b5)";
	 }
	 if (elemento.value == "sol"){
		  p.innerHTML = "G - Am - Bm - C - D - Em - F#m7(b5)";
	 }
	 if (elemento.value == "la"){
		  p.innerHTML = "A - Bm - C#m - D - E - F#m - G#m7";
	 }
	 if (elemento.value == "si"){
		  p.innerHTML = " B -  C#m - D#m - E - F# - G#m - A#m7(b5)";
	 }
	 	
	 }
 