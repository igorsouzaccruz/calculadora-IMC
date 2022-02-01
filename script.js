let idade = document.getElementById("numIdade")
let altura =document.getElementById("numAltura")
let peso = document.getElementById("numPeso")
var sex = sexo(sexo);

function sexo(sexo){
    var color = 'rgb(240, 85, 85)'
    
    if(sexo == 'm'){
       document.getElementById('mulher').style.background = color;
       document.getElementById('mulher').style.color = 'white';
       document.getElementById('homem').style.background = 'white';
       document.getElementById('homem').style.color = 'black';
       sex = 'mulher'
       return sex;
    }
    else{
        document.getElementById('homem').style.background = color;
        document.getElementById('homem').style.color = 'white';
        document.getElementById('mulher').style.background = 'white';
        document.getElementById('mulher').style.color = 'black';
        sex = 'homem'
        return sex;
    } 
}

function calcular() {
    let weight = Number(peso.value)
    let height = Number(altura.value)
    let age = Number(idade.value)
    if (20 < age && age > 59) {
        alert("ERRO idadeException! A faixa de idade deve ser entre: 20 e 59 anos. ")
    }

    var IMC = weight / (height * height) //peso / (altura * altura)

    if (sex == 'homem') {
        //Masculino -------------------------------------------------------------
        document.getElementById('res').innerHTML =
            `<p><strong>Seu resultado: </strong></p>
            <p style="text-align:center; font-size:1.2em"> IMC de <strong>${IMC.toFixed(2)} kg/m2.</strong></p>
            <table id="tabela">
                <tr>
                    <td>IMC</td>
                    <td>Categoria</td>
                </tr>
                <tr id = "abaixo">
                    <td>Abaixo de 20,7 </td>
                     <td>Abaixo do Peso</td>
                 </tr>
                <tr id = "ideal">
                    <td>20,7 a 26,4 </td>
                    <td>Peso Ideal</td>
                </tr>
                    <tr id = "acima">
                    <td>26,5 a 27,8 </td>
                    <td>Pouco acima do peso</td>
                </tr>
                <tr id = "grande">
                    <td>27,9 a 31,1 </td>
                    <td>Acima do peso</td>
                </tr>
                <tr id = "obeso">
                    <td>31,2 e Acima </td>
                    <td>Obesidade</td>
                </tr>
            </table>`
        document.getElementById('tabela').style.background = "white"
        document.getElementById('tabela').style.borderRadius = "5px"
        if (IMC <= 20.7) {
            document.getElementById('abaixo').style.background = "blue";
            document.getElementById('abaixo').style.color = 'white';
        }
        else if (20.7 < IMC && IMC <= 26.4) {
            document.getElementById('ideal').style.background = "yellowgreen";
            document.getElementById('ideal').style.color = 'white';
        }
        else if (26.4 < IMC && IMC <= 27.8) {
            document.getElementById('acima').style.background = "orange";
            document.getElementById('acima').style.color = 'white';
        }
        else if (27.8 < IMC && IMC <= 31.1) {
            document.getElementById('grande').style.background = "orange";
            document.getElementById('grande').style.color = 'white';
        }
        else if (31.1 < IMC) {
            document.getElementById('obeso').style.background = "red";
            document.getElementById('obeso').style.color = 'white';
        }
        else {
            document.getElementById('res').innerHTML += `Fora de escala ou valor incorreto!!`
        }
    }
    else {
        //Feminio -------------------------------------------------------------
        document.getElementById('res').innerHTML =
            `<p><strong>Seu resultado: </strong></p>
            <p style="text-align:center; font-size:1.2em"> IMC de <strong>${IMC.toFixed(2)} kg/m2.</strong></p>
            <table id = "tabela">
                <tr>
                    <td>IMC</td>
                    <td>Categoria</td>
                </tr>
                <tr id = "abaixo">
                    <td>Abaixo de 19,1 </td>
                    <td>Abaixo do Peso</td>
                </tr>
                <tr id = "ideal">
                    <td>19,1 a 25,8 </td>
                    <td>Peso Ideal</td>
                </tr>
                <tr id = "acima">
                    <td>25,9 a 27,3 </td>
                    <td>Pouco acima do peso</td>
                </tr>
                <tr id = "grande">
                    <td>27,4 a 32,3 </td>
                    <td>Acima do peso</td>
                </tr>
                <tr id = "obeso">
                    <td>32,4 e Acima </td>
                    <td>Obesidade</td>
                </tr>
            </table>`
        document.getElementById('tabela').style.background = "white"
        document.getElementById('tabela').style.borderRadius = "5px"
        if (IMC <= 19.1) {
            document.getElementById('abaixo').style.background = "blue";
            document.getElementById('abaixo').style.color = 'white';
        }
        else if (19.1 < IMC && IMC <= 25.8) {
            document.getElementById('ideal').style.background = "yellowgreen";
            document.getElementById('ideal').style.color = 'white';
        }
        else if (25.8 < IMC && IMC <= 27.3) {
            document.getElementById('acima').style.background = "orange";
            document.getElementById('acima').style.color = 'white';
        }
        else if (27.3 < IMC && IMC <= 32.3) {
            document.getElementById('grande').style.background = "orange";
            document.getElementById('grande').style.color = 'white';
        }
        else if (32.3 < IMC) {
            document.getElementById('obeso').style.background = "red";
            document.getElementById('obeso').style.color = 'white';
        }
        else {
            document.getElementById('res').innerHTML += `Fora de escala ou valor incorreto!!`
        }
    }
}

