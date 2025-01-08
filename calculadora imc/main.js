const calcular = document.querySelector(".calcular");

calcular.addEventListener("click", () => {  
    const nome = document.querySelector(".nome").value;
    const altura = document.querySelector(".altura").value;
    const peso = document.querySelector(".peso").value;
    const resultado = document.querySelector(".resultado");
    
    if(nome === "" || altura === "" || peso === ""){
        resultado.textContent = "Preencha todos os campos";
        return;
    } else {
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let calcularImc = "";
        if (valorImc < 18.5) {
            calcularImc = "abaixo do peso. É importante cuidar da sua alimentação e, se possível, buscar orientação de um nutricionista.";
        } else if (valorImc >= 18.5 && valorImc < 24.9) {
            calcularImc = "com o peso ideal. Parabéns! Continue mantendo um estilo de vida saudável.";
        } else if (valorImc >= 25 && valorImc < 29.9) {
            calcularImc = "levemente acima do peso. Considere revisar sua alimentação e praticar atividades físicas regularmente.";
        } else if (valorImc >= 30 && valorImc < 34.9) {
            calcularImc = "com obesidade grau I. É recomendável consultar um profissional de saúde para orientações específicas.";
        } else if (valorImc >= 35 && valorImc < 39.9) {
            calcularImc = "com obesidade grau II. Buscar acompanhamento médico é essencial para melhorar sua saúde.";
        } else {
            calcularImc = "com obesidade grau III. Procure assistência médica para cuidar da sua saúde e qualidade de vida.";
        }
        

        resultado.textContent = `${nome} seu IMC é  ${valorImc} e você está ${calcularImc} `;

    }


});
















