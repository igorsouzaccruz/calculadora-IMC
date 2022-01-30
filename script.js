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
    var IMC = p /(a * a)

    //document.getElementById('res').innerHTML = `O sexo é ${sex} `

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
        <tr>
            <td>Abaixo de 20,7 </td>
            <td>Abaixo do Peso</td>
        </tr>
        <tr>
            <td>20,7 a 26,4 </td>
            <td>Peso Ideal</td>
        </tr>
        <tr>
            <td>26,5 a 27,8 </td>
            <td>Pouco acima do peso</td>
        </tr>
        <tr>
            <td>27,9 a 31,1 </td>
            <td>Acima do peso</td>
        </tr>
        <tr>
            <td>31,2 e acima </td>
            <td>Obesidade</td>
        </tr>
    </table>`
    }
    else{
    document.getElementById('res').innerHTML = 
    `<p>Feminino - Se resultado de IMC foi <strong>${IMC.toFixed(2)} kg/m2</strong></p>
    
    <table>
        <tr>
            <td>IMC</td>
            <td>Categoria</td>
        </tr>
        <tr>
            <td>Abaixo de 19,1 </td>
            <td>Abaixo do Peso</td>
        </tr>
        <tr>
            <td>19,1 a 25,8 </td>
            <td>Peso Ideal</td>
        </tr>
        <tr>
            <td>25,9 a 27,3 </td>
            <td>Pouco acima do peso</td>
        </tr>
        <tr>
            <td>27,4 a 32,3 </td>
            <td>Acima do peso</td>
        </tr>
        <tr>
            <td>32,4 e acima </td>
            <td>Obesidade</td>
        </tr>
    </table>`
    }   
}

