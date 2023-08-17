let student = prompt("Digite o nome do(a) primeiro(a) aluno(a)")

let n1 = prompt("Digite a nota da primeira prova")
let n2 = prompt("Digite a nota da segunda prova")
let n3 = prompt("Digite a nota da terceira prova")
let n4 = prompt("Digite a nota da quarta prova")

let average = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4
let result = average >= 7

average = average.toFixed(2)

if (result) 
{
    alert(student +  "  a sua média foi de: " +average+ ".     Resultado Final: Aprovado!")
} 
else if (average < 7) 
{
    alert(student +  "  a sua média foi de: " +average+ ".     Resultado Final: Reprovado")
} 

let student2 = prompt("Digite o nome do(a) segundo(a) aluno(a)")

let n5 = prompt("Digite a nota da primeira prova")
let n6 = prompt("Digite a nota da segunda prova")
let n7 = prompt("Digite a nota da terceira prova")
let n8 = prompt("Digite a nota da quarta prova")

let average2 = (Number(n5) + Number(n6) + Number(n7) + Number(n8)) / 4
let result2 = average2 >= 7

average2 = average2.toFixed(2)

if (result2) 
{
    alert(student2 +  "  a sua média foi de: " +average2+ ".     Resultado Final: Aprovado!")
} 
else if (average2 < 7) 
{
    alert(student2 +  "  a sua média foi de: " +average2+ ".     Resultado Final: Reprovado")
} 


let student3 = prompt("Digite o nome do(a) terceiro(a) aluno(a)")

let n9 = prompt("Digite a nota da primeira prova")
let n10 = prompt("Digite a nota da segunda prova")
let n11 = prompt("Digite a nota da terceira prova")
let n12 = prompt("Digite a nota da quarta prova")

let average3 = (Number(n9) + Number(n10) + Number(n11) + Number(n12)) / 4
let result3 = average3 >= 7

average3 = average3.toFixed(2)

if (result3) 
{
    alert(student3 +  "  a sua média foi de: " +average3+ ".     Resultado Final: Aprovado!")
} 
else if (average3 < 7) 
{
    alert(student3 +  "  a sua média foi de: " +average3+ ".     Resultado Final: Reprovado")
} 


let student4 = prompt("Digite o nome do(a) quarto(a) aluno(a)")

let n13 = prompt("Digite a nota da primeira prova")
let n14 = prompt("Digite a nota da segunda prova")
let n15 = prompt("Digite a nota da terceira prova")
let n16 = prompt("Digite a nota da quarta prova")

let average4 = (Number(n13) + Number(n14) + Number(n15) + Number(n16)) / 4
let result4 = average4 >= 7

average4 = average4.toFixed(2)

if (result4) 
{
    alert(student4 +  "  a sua média foi de: " +average4+ ".     Resultado Final: Aprovado!")
} 
else if (average4 < 7) 
{
    alert(student4 +  "  a sua média foi de: " +average4+ ".     Resultado Final: Reprovado")
} 

alert 
(   
    'O(a) aluno(a) '+student + ', ficou com a média: ' +average+'-----'+
    'O(a) aluno(a) '+student2 + ', ficou com a média: ' +average2+'-----'+
    'O(a) aluno(a) '+student3 + ', ficou com a média: ' +average3+'-----'+
    'O(a) aluno(a) '+student4 + ', ficou com a média: ' +average4+'-----'
)





