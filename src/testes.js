
// console.log(Object.entries(WORLDBANK.BRA['indicators']))

// console.log(WORLDBANK.BRA['indicators'][74].data[2013])
=======
// tenta identificar valor do radio
// values = [];

// function addRecord() {
//   var inp = document.getElementById('inputtext');
//   values.push(inp.value);
//   inp.value = "";  
// }

// function displayRecord() {
//   document.getElementById("values").innerHTML = values.join(", ");
// }


// var form = document.getElementById('formEduca')
// for (buttons of form) {
//   console.log(buttons.checked = true)
// }





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



  // trash 08/03/2019 -sexta

  
// function indexIndicator(array, attr, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i][attr] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// const arrayIndicaBra = WORLDBANK.BRA.indicators
// const arrayIndicaPer = WORLDBANK.PER.indicators
// const arrayIndicaMex = WORLDBANK.MEX.indicators
// const arrayIndicaChi = WORLDBANK.CHL.indicators

// function getEducaBra() {
//   return indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

//   indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

//   indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// }

// function getEducaChl() {
//   indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

//   indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

//   indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// }

// function getEducaMex() {
//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// }


// function getEducaPer() {
//   indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

//   indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

//   indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// }


// let educaBraUm = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

// let educaBraDois = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

// let educaBraTres = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// console.log(educaBraUm, educaBraDois, educaBraTres)



// function cliqueBrasil() {
//   return WORLDBANK.BRA['indicators']  
// }



// // console.log(WORLDBANK.BRA['indicators'][74])



// // document.getElementById("btnEscolha").addEventListener('click', funcaozinha)

// // function funcaozinha(e){
// //   let listaRadios = document.getElementsByTagName('input')
// //   for (radio of listaRadios){
// //     if (radio.getAttribute('type')==='radio'){
// //       console.log('foi')
      
// //     }  
// //   }
// // }


// // if(document.getElementById("c").checked==false && document.getElementById("i").checked==false && document.getElementById("l").checked==false) {
// // 	alert( "Preencha o campo LOCALIZAÇÃO corretamente." );
// // 	return false;
// // }



// // function printValue() {
// //   valor = document.getElementById("formEduca").indicator.value;
// //   document.getElementById('escolha').innerHTML = valor;
// // }

// // function getContent() {
// //   return document.getElementById("escolha").innerHTML;
// // }

// //   // return WORLDBANK["BRA"]["indicators"][num]["data"][2015]


// // const verData = WORLDBANK["BRA"]["indicators"][72]['indicatorName']

// // console.log(verData)



//PERU

// const dataPaisUm = WORLDBANK["PER"]["indicators"][104]["data"][2013]
// const dataDoisPaisUm = WORLDBANK["PER"]["indicators"][104]["data"][2014]
// const dataTresPaisUm = WORLDBANK["PER"]["indicators"][104]["data"][2015]
// const indPaisUm = WORLDBANK["PER"]["indicators"][104]["indicatorName"]
// const nomePaisUm = WORLDBANK["PER"]["indicators"][104]["countryName"]

// //BRASIL

// const dataUmPaisDois = WORLDBANK["BRA"]["indicators"][74]["data"][2013]
// const dataDoisPaisDois = WORLDBANK["BRA"]["indicators"][74]["data"][2014]
// const dataTresPaisDois = WORLDBANK["BRA"]["indicators"][74]["data"][2015]
// const nomeIndicPaisDois = WORLDBANK["BRA"]["indicators"][74]["indicatorName"]
// const nomePaisPaisDois = WORLDBANK["BRA"]["indicators"][74]["countryName"]

// //BRASIL

// const nomePaisPaisTres = ''
// const dataUmsPaisTres = ''
// const dataDoisPaisTres = ''
// const dataTresPaisTres = ''


//       google.charts.load('current', {'packages':['bar']});
//       google.charts.setOnLoadCallback(drawChart);

//       function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//           ['Year', nomePaisUm, nomePaisPaisDois, nomePaisPaisTres],
//           ['2013', dataPaisUm, dataUmPaisDois, dataUmsPaisTres],
//           ['2014', dataDoisPaisUm, dataDoisPaisDois, dataDoisPaisTres],
//           ['2015', dataTresPaisUm, dataTresPaisDois, dataTresPaisTres]
//         ]);

//         var options = {
//           chart: {
//             title: indPaisUm,
//             subtitle: 'Nome Traduzido do Indicador',
//           },
//           bars: 'horizontal' // Required for Material Bar Charts.
//         };

//         var chart = new google.charts.Bar(document.getElementById('barchart_material'));

//         chart.draw(data, google.charts.Bar.convertOptions(options));
//       }

      

