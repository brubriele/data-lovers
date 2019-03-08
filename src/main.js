
document.getElementById('btn-topic-educa').addEventListener('click', () => {
  selectCountryEduca();
  cliqueBrasil()
})

document.getElementById('btn-topic-viol').addEventListener('click', () => {
  selectCountryViolence();
})

document.getElementById('btn-topic-pop').addEventListener('click', () => {
  selectCountryPop();
})


// Cria templates da section country-selection

function selectCountryEduca() {
  let productDiv = document.getElementById('country-selection');
  productDiv.innerHTML = `
  <div class="box-select">
<div class="box-country">
  <div class="bra">
    <a id="btn-bra" class="btn-country bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
      <p class="p-country">Brasil</p>

</div>
    <div class="mex">
      <a class="btn-country mex" href="#"><img class="img-mex" src="img/mex.png" alt=""></a>
        <p class="p-country">México</p>
</div>

      <div class="per">
        <a class="btn-country per" href=""><img class="img-per" src="img/per.png" alt=""></a>
          <p class="p-country">Perú</p>
</div>
        <div class="chi">
          <a class="btn-country chi" href=""><img class="img-chi" src="img/chi.png" alt=""></a>
            <p class="p-country">Chile</p>
</div>
        </div>

        <div class="btn country">
          <a href="#">PANORAMA GERAL</a>
          <a href="#">INICIAR</a>
        </div>

        

      </div>
      <article>
      <div class="element">
      <div class="elemA"></div>
      <div class="elemB"></div>
      </div>
      
        <div class="ball-topic"></div>
        <p class="topic-text-element">EDUCAÇÃO <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        
        
      </article>`
}

function selectCountryViolence() {
  let productDiv = document.getElementById('country-selection');
  productDiv.innerHTML = `
  <div class="box-select">
<div class="box-country">
  <div class="bra">
    <a class="btn-country bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
      <p class="p-country">Brasil</p>

</div>
    <div class="mex">
      <a class="btn-country mex" href="#"><img class="img-mex" src="img/mex.png" alt=""></a>
        <p class="p-country">México</p>
</div>

      <div class="per">
        <a class="btn-country per" href=""><img class="img-per" src="img/per.png" alt=""></a>
          <p class="p-country">Perú</p>
</div>
        <div class="chi">
          <a class="btn-country chi" href=""><img class="img-chi" src="img/chi.png" alt=""></a>
            <p class="p-country">Chile</p>
</div>
        </div>

        <div class="btn country">
          <a href="#">PANORAMA GERAL</a>
          <a href="#">INICIAR</a>
        </div>


      </div>
      <article>
      <div class="element">
      <div class="elemA"></div>
      <div class="elemB"></div>
      </div>
      
        <div class="ball-topic"></div>
        <p class="topic-text-element">VIOLÊNCIA <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        
        
      </article>`
}

function selectCountryPop() {
  let productDiv = document.getElementById('country-selection');
  productDiv.innerHTML = `
  <div class="box-select">
<div class="box-country">
  <div class="bra">
    <a class="btn-country bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
      <p class="p-country">Brasil</p>

</div>
    <div class="mex">
      <a class="btn-country mex" href="#"><img class="img-mex" src="img/mex.png" alt=""></a>
        <p class="p-country">México</p>
</div>

      <div class="per">
        <a class="btn-country per" href=""><img class="img-per" src="img/per.png" alt=""></a>
          <p class="p-country">Perú</p>
</div>
        <div class="chi">
          <a class="btn-country chi" href=""><img class="img-chi" src="img/chi.png" alt=""></a>
            <p class="p-country">Chile</p>
</div>
        </div>

        <div class="btn country">
          <a href="#">PANORAMA GERAL</a>
          <a href="#">INICIAR</a>
        </div>


      </div>
      <article>
      <div class="element">
      <div class="elemA"></div>
      <div class="elemB"></div>
      </div>
      
        <div class="ball-topic"></div>
        <p class="topic-text-element">POPULAÇÃO <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        
        
      </article>`
}


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



