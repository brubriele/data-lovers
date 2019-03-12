// window.onload = function(){
//   listeners()
// }

document.getElementById('btn-topic-educa').addEventListener('click', () => {
  showIndicadoresEduca();
  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', printValue);
  // printValue()
})

document.getElementById('btn-topic-viol').addEventListener('click', () => {
  showIndicadoresViol();
  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', printValue);
  printValue()
})

document.getElementById('btn-topic-pop').addEventListener('click', () => {
  showIndicadoresPop();
  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', printValue);
  printValue()
  // doPais("BRA")
})

// function doPais(pais) {
//   WORLDBANK[pais]
// }

function printValue() {

  let valor = document.getElementById("formIndic").indicator.value;
  let basePeru = WORLDBANK.PER.indicators
  let baseBrasil = WORLDBANK.BRA.indicators
  let baseMexico = WORLDBANK.MEX.indicators
  let baseChile = WORLDBANK.CHL.indicators
  let selecionadoPeru = indexIndicator(basePeru, 'indicatorName', valor)
  let selecionadoBrasil = indexIndicator(baseBrasil, 'indicatorName', valor)
  let selecionadoMexico = indexIndicator(baseMexico, 'indicatorName', valor)
  let selecionadoChile = indexIndicator(baseChile, 'indicatorName', valor)
  let escolhaPeru = WORLDBANK.PER.indicators[selecionadoPeru]
  let escolhaBrasil = WORLDBANK.BRA.indicators[selecionadoBrasil]
  let escolhaMexico = WORLDBANK.BRA.indicators[selecionadoMexico]
  let escolhaChile = WORLDBANK.BRA.indicators[selecionadoChile]

  console.log("PErú", escolhaPeru.data["2013"], escolhaPeru.data["2014"], escolhaPeru.data["2015"])
  console.log(escolhaBrasil.data["2013"], escolhaBrasil.data["2014"], escolhaBrasil.data["2015"])

  arrayBra = [
    escolhaBrasil.data["2013"],
    escolhaBrasil.data["2014"],
    escolhaBrasil.data["2015"]
  ]
  document.getElementById('BRA-2013').innerHTML = arrayBra[0]
  document.getElementById('BRA-2014').innerHTML = arrayBra[1]
  document.getElementById('BRA-2015').innerHTML = arrayBra[2]


  document.getElementById('PER-2013').innerHTML = escolhaPeru.data["2013"]
  document.getElementById('PER-2014').innerHTML = escolhaPeru.data["2014"]
  document.getElementById('PER-2015').innerHTML = escolhaPeru.data["2015"]


  document.getElementById('MEX-2013').innerHTML = escolhaMexico.data["2013"]
  document.getElementById('MEX-2014').innerHTML = escolhaMexico.data["2014"]
  document.getElementById('MEX-2015').innerHTML = escolhaMexico.data["2015"]


  document.getElementById('CHL-2013').innerHTML = escolhaChile.data["2013"]
  document.getElementById('CHL-2014').innerHTML = escolhaChile.data["2014"]
  document.getElementById('CHL-2015').innerHTML = escolhaChile.data["2015"]


  // descobrir como se livrar do maldito undefined
  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', printValue);

  function indexIndicator(array, attr, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][attr] === value) {
        return i;
      }
    }
  }

}

function showIndicadoresEduca() {
  let indicaDiv = document.getElementById('indicator-selection');
  indicaDiv.innerHTML = `
  <div class="box-select">
      <div class="box-country">
        <div class="bra">
          <a class="btn-coun*4try bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
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

      <form id="formIndic" action="">
        <input class="radio-indicator" type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)"> Proporção de matrículas de mulheres em relação a homens no
        ensino superior (%)<br>
        <input class="radio-indicator" type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)"> Proporção de matrículas de mulheres em relação ao sexo
        masculino no ensino médio (%)<br>
        <input class="radio-indicator" type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)"> Proporção de matrículas de mulheres em relação ao sexo
        masculino no ensino fundamental (%)<br>
        <input class="menu" id="btnEscolha" type="button" value="Explorar">
      </form>

     


    </div>
    <article>
      <h1 class="title-article">EDUCAÇÃO</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
        fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        <div id="indicators-div-peru"></div>
        <div id="indicators-div-brasil"></div>
        
<table class="rwd-table">
<tr>
  <th>País</th>
  <th>2013</th>
  <th>2014</th>
  <th>2015</th>
</tr>
<tr>
  <td data-th="name-BRA">Brasil</td>
  <td data-th="BRA-2013" id="BRA-2013">2013</td>
  <td data-th="BRA-2014" id="BRA-2014">2014</td>
  <td data-th="BRA-2015" id="BRA-2015">2015</td>
</tr>
<tr>
    <td data-th="name-PER">Perú</td>
    <td data-th="PER-2013" id="PER-2013">2013</td>
    <td data-th="PER-2014" id="PER-2014">2014</td>
    <td data-th="PER-2015" id="PER-2015">2015</td>
</tr>
<tr>
    <td data-th="name-CHL">Chile</td>
    <td data-th="CHL-2013" id="CHL-2013">2013</td>
    <td data-th="CHL-2014" id="CHL-2014">2014</td>
    <td data-th="CHL-2015" id="CHL-2015">2015</td>
</tr>
<tr>
    <td data-th="name-MEX">México</td>
    <td data-th="MEX-2013" id="MEX-2013">2013</td>
    <td data-th="MEX-2014" id="MEX-2014">2014</td>
    <td data-th="MEX-2015" id="MEX-2015">2015</td>
</tr>
</table>
    </article>
`
}

function showIndicadoresViol() {
  let indicaDiv = document.getElementById('indicator-selection');
  indicaDiv.innerHTML = `
  <div class="box-select">
      <div class="box-country">
        <div class="bra">
          <a class="btn-coun*4try bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
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

      <form id="formIndic" action="">
        <input class="radio-indicator" type="radio" name="indicator" value="Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)"> Mulheres que acreditam que um marido tem justificativa de bater em sua esposa (qualquer uma das cinco razões*) (%)<br>
        <input class="radio-indicator" type="radio" name="indicator" value="Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)"> Proporção de mulheres vítimas de violência física ou sexual nos últimos 12 meses (% de mulheres entre 15 e 49 anos)<br>
        <input class="menu" id="btnEscolha" type="button" value="Explorar">
      </form>

      

    </div>
    <article>
      <h1 class="title-article">VIOLÊNCIA</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
        fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        <p id="indicators-div-peru"></p>
        <p id="indicators-div-brasil"></p>
        
<table class="rwd-table">
<tr>
  <th>País</th>
  <th>2013</th>
  <th>2014</th>
  <th>2015</th>
</tr>
<tr>
  <td data-th="name-BRA">Brasil</td>
  <td data-th="BRA-2013" id="BRA-2013">2013</td>
  <td data-th="BRA-2014" id="BRA-2014">2014</td>
  <td data-th="BRA-2015" id="BRA-2015">2015</td>
</tr>
<tr>
    <td data-th="name-PER">Perú</td>
    <td data-th="PER-2013" id="PER-2013">2013</td>
    <td data-th="PER-2014" id="PER-2014">2014</td>
    <td data-th="PER-2015" id="PER-2015">2015</td>
</tr>
<tr>
    <td data-th="name-CHL">Chile</td>
    <td data-th="CHL-2013" id="CHL-2013">2013</td>
    <td data-th="CHL-2014" id="CHL-2014">2014</td>
    <td data-th="CHL-2015" id="CHL-2015">2015</td>
</tr>
<tr>
    <td data-th="name-MEX">México</td>
    <td data-th="MEX-2013" id="MEX-2013">2013</td>
    <td data-th="MEX-2014" id="MEX-2014">2014</td>
    <td data-th="MEX-2015" id="MEX-2015">2015</td>
</tr>
</table>

    </article>
`
}

function showIndicadoresPop() {

  let indicaDiv = document.getElementById('indicator-selection');
  indicaDiv.innerHTML = `
  <div class="box-select">
      <div class="box-country">
        <div class="bra">
          <a class="btn-coun*4try bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
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

      <form id="formIndic" action="">
        <input class="radio-indicator" type="radio" name="indicator" value="Población activa, mujeres (% de la población activa total)"> População activa, mulheres (% do total da população activa)<br>
        <input class="radio-indicator" type="radio" name="indicator" value="Población entre 15 y 64 años de edad, mujeres (% del total)"> População entre 15 e 64 anos de idade, mulheres (% do total)<br>
        <input class="menu" id="btnEscolha" type="button" value="Explorar">
      </form>

      


    </div>
    <article>
      <h1 class="title-article">POPULAÇÃO</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
        fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        <p id="indicators-div-peru"></p>
      <p id="indicators-div-brasil"></p>
      
<table class="rwd-table">
<tr>
  <th>País</th>
  <th>2013</th>
  <th>2014</th>
  <th>2015</th>
</tr>
<tr>
  <td data-th="name-BRA">Brasil</td>
  <td data-th="BRA-2013" id="BRA-2013">2013</td>
  <td data-th="BRA-2014" id="BRA-2014">2014</td>
  <td data-th="BRA-2015" id="BRA-2015">2015</td>
</tr>
<tr>
    <td data-th="name-PER">Perú</td>
    <td data-th="PER-2013" id="PER-2013">2013</td>
    <td data-th="PER-2014" id="PER-2014">2014</td>
    <td data-th="PER-2015" id="PER-2015">2015</td>
</tr>
<tr>
    <td data-th="name-CHL">Chile</td>
    <td data-th="CHL-2013" id="CHL-2013">2013</td>
    <td data-th="CHL-2014" id="CHL-2014">2014</td>
    <td data-th="CHL-2015" id="CHL-2015">2015</td>
</tr>
<tr>
    <td data-th="name-MEX">México</td>
    <td data-th="MEX-2013" id="MEX-2013">2013</td>
    <td data-th="MEX-2014" id="MEX-2014">2014</td>
    <td data-th="MEX-2015" id="MEX-2015">2015</td>
</tr>
</table>
    </article>
`
}

// Trabalhar estrutura para selecao de países
// btnSubmit.addEventListener("click", function(e){
//   let inputProdutoNome = document.getElementById('product-name').value;
//   let inputProdutoPreco = document.getElementById('product-price').value;
//   let inputProdutoFoto = document.getElementById('product-img').value;

//   let novoItem = {
//     "product": {
//       "name": "",
//       "images":[],
//       "price": {
//         "value": 0,
//       }
//     }
//   };