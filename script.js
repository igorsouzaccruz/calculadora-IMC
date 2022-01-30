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
       return sex = 'mulher';
    }
    else{
        document.getElementById('homem').style.background = color;
        document.getElementById('homem').style.color = 'white';
        document.getElementById('mulher').style.background = 'white';
        document.getElementById('mulher').style.color = 'black';
        return sex = 'homem';
    } 
}

function calcular(){
    let p = Number(peso.value)
    let a = Number(altura.value)
    let i = Number(idade.value)
    if(20 < i && i > 59){
        alert("ERRO idadeException! A faixa de idade deve ser entre: 20 e 59 anos. ")
    }

    var IMC = p /(a * a) //peso / (altura * altura)

    if(sex == 'homem'){
    document.getElementById('res').innerHTML = 
    `
    <p>Masculino - Seu resultado: </p>
    <p> IMC de <strong>${IMC.toFixed(2)} kg/m2.</strong></p>
    
    <table>
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
            <td>31,2 e acima </td>
            <td>Obesidade</td>
        </tr>
    </table>`
    }
    else{
    document.getElementById('res').innerHTML = 
    `<p>Feminino - Seu resultado: </p>
    <p> IMC de <strong>${IMC.toFixed(2)} kg/m2.</strong></p>
    
    <table>
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
        <tr d = "grande">
            <td>27,4 a 32,3 </td>
            <td>Acima do peso</td>
        </tr>
        <tr id = "obeso">
            <td>32,4 e acima </td>
            <td>Obesidade</td>
        </tr>
    </table>`
    }   

    /*switch(IMC){
        case (IMC <= 20,7):
            document.getElementById('abaixo').style.background = "orange";
            document.getElementById('abaixo').style.color = 'white';
        case (20,7 < IMC <= 26,4):
            document.getElementById('ideal').style.background = "orange";
            document.getElementById('ideal').style.color = 'white';
        case (26,4 < IMC <= 27,8):
            document.getElementById('acima').style.background = "orange";
            document.getElementById('acima').style.color = 'white';
        case (27,8 < IMC <= 31,1):
            document.getElementById('grande').style.background = "orange";
            document.getElementById('grande').style.color = 'white';
        case (31,1 < IMC):
            document.getElementById('obeso').style.background = "orange";
            document.getElementById('obeso').style.color = 'white';
        default:
            document.getElementById('res').innerHTML += `Fora de escala ou valor incorreto!!`
    }*/
}

