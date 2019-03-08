
function indexIndicator(array, attr, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

const arrayIndicaBra = WORLDBANK.BRA.indicators
const arrayIndicaPer = WORLDBANK.PER.indicators
const arrayIndicaMex = WORLDBANK.MEX.indicators
const arrayIndicaChi = WORLDBANK.CHL.indicators

function getEducaBra() {
  return indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

  indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

  indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

}

function getEducaChl() {
  indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

  indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

  indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

}

function getEducaMex() {
  indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

  indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

  indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

}


function getEducaPer() {
  indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

  indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

  indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

}


let educaBraUm = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

let educaBraDois = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

let educaBraTres = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

console.log(educaBraUm, educaBraDois, educaBraTres)



function cliqueBrasil() {
  return WORLDBANK.BRA['indicators']  
}



// console.log(WORLDBANK.BRA['indicators'][74])



// document.getElementById("btnEscolha").addEventListener('click', funcaozinha)

// function funcaozinha(e){
//   let listaRadios = document.getElementsByTagName('input')
//   for (radio of listaRadios){
//     if (radio.getAttribute('type')==='radio'){
//       console.log('foi')
      
//     }  
//   }
// }


// if(document.getElementById("c").checked==false && document.getElementById("i").checked==false && document.getElementById("l").checked==false) {
// 	alert( "Preencha o campo LOCALIZAÇÃO corretamente." );
// 	return false;
// }



// function printValue() {
//   valor = document.getElementById("formEduca").indicator.value;
//   document.getElementById('escolha').innerHTML = valor;
// }

// function getContent() {
//   return document.getElementById("escolha").innerHTML;
// }

//   // return WORLDBANK["BRA"]["indicators"][num]["data"][2015]


// const verData = WORLDBANK["BRA"]["indicators"][72]['indicatorName']

// console.log(verData)
window.onload = function(){
  printValue();
}

function printValue() {

    let valor = document.getElementById("formEduca").indicator.value;
    let basePeru = WORLDBANK.PER.indicators
    let baseBrasil = WORLDBANK.BRA.indicators
    let filtrado = WORLDBANK.BRA.indicators
    let selecionadoPeru = [indexIndicator(basePeru, 'indicatorName', valor)]
    let selecionadoBrasil = [indexIndicator(baseBrasil, 'indicatorName', valor)]

    let escolhaPeru = WORLDBANK.PER.indicators[selecionadoPeru]
     let escolhaBrasil = WORLDBANK.BRA.indicators[selecionadoBrasil]

     


    // console.log(base[escolha])



      //  console.log(typeof escolhaPeru)


      let newStringPeru = JSON.stringify(escolhaPeru, null, 2)
        document.getElementById('indicators-div-peru').innerHTML = newStringPeru

      let newStringBrasil = JSON.stringify(escolhaBrasil, null, 2)
      document.getElementById('indicators-div-brasil').innerHTML = newStringBrasil

      // descobrir como se livrar do maldito undefined
      

    

  
  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', printValue)
  



 function indexIndicator(array, attr, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
}




//   function showIndicadores(){
//   let productDiv = document.getElementById('indicators-div');
//   productDiv.innerHTML = `
//   ${getData().map((indicador) => `
//     <div class="product-item">
//       <p>${indicador["indicators"][escolha]["indicatorName"]}</p>
//       <p>${indicador["indicators"][escolha]["countryName"]}</p>
//       <p>${indicador["indicators"][escolha].data[2013]}</p>
//       <p>${indicador["indicators"][escolha].data[2014]}</p>
//       <p>${indicador["indicators"][escolha].data[2015]}</p>
//     </div>`).join('')}`
// }
}
