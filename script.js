    // captura evento de submit no furmulário.
    const form = document.querySelector('#form');

    form.addEventListener('submit', calc_imc);
    // Restante da funcão.
    function calc_imc(event){
      event.preventDefault();
      
    const peso = event.target.querySelector('#peso').value;
    const altura = event.target.querySelector('#altura').value;
    // ou form.querySelector('');    
        
    // formula para calcular o imc.    
    const imc = peso / (altura * altura);
    const calc = imc.toFixed(1);

    // condições.
    if (calc <= 18.5){
        show_result.innerHTML = `Resultado:`;
        result.innerHTML = `<p style="background-color: #fce6af;padding: 5px;border-radius: 5px;">Seu IMC é <strong>${calc} kg/m2</strong> - Abaixo do peso</p>`;
    } if (calc >= 18.5 && calc <= 24.9){
        show_result.innerHTML = `Resultado:`;
        result.innerHTML = `<p style="background-color: #bbefc0;padding: 5px;border-radius: 5px;">Seu IMC é <strong>${calc} kg/m2</strong> - Peso normal</p>`;
    } if (calc >= 25 && calc <= 29.9){
        show_result.innerHTML = `Resultado:`;
        result.innerHTML = `<p style="background-color: #fce6af;padding: 5px;border-radius: 5px;">Seu IMC é <strong>${calc} kg/m2</strong> - Sobrepeso</p>`;
    } if (calc >= 30 && calc <= 34.9){
        show_result.innerHTML = `Resultado:`;
        result.innerHTML = `<p style="background-color: #ffa2a2;padding: 5px;border-radius: 5px;">Seu IMC é <strong>${calc} kg/m2</strong> - Obesidade grau 1</p>`; 
    } if (calc >= 35 && calc <= 39.9){
        show_result.innerHTML = `Resultado:`;
        result.innerHTML = `<p style="background-color: #ffa2a2;padding: 5px;border-radius: 5px;">Seu IMC é <strong>${calc} kg/m2</strong> - Obesidade grau 2</p>`;
    } if (calc >= 40){
        show_result.innerHTML = `Resultado:`;
        result.innerHTML = `<p style="background-color: #ffa2a2;padding: 5px;border-radius: 5px;">Seu IMC é <strong>${calc} kg/m2</strong> - Obesidade grau 3</p>`;
    }
} 