window.onload = function(){
  listeners()
}

function listeners(){
  
document.getElementById('btn-topic-educa').addEventListener('click', () => {
  showIndicadoresEduca();
  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', printValue);
  // printValue()
})

document.getElementById('btn-topic-viol').addEventListener('click', () => {
  showIndicadoresViol();
  printValue()
})

document.getElementById('btn-topic-pop').addEventListener('click', () => {
  showIndicadoresPop();
  printValue()
  // doPais("BRA")
})

}

// function doPais(pais) {
//   WORLDBANK[pais]
// }

function printValue() {

  let valor = document.getElementById("formIndic").indicator.value;
  let basePeru = WORLDBANK.PER.indicators
  let baseBrasil = WORLDBANK.BRA.indicators
  let selecionadoPeru = indexIndicator(basePeru, 'indicatorName', valor)
  let selecionadoBrasil = indexIndicator(baseBrasil, 'indicatorName', valor)
  let escolhaPeru = WORLDBANK.PER.indicators[selecionadoPeru]
  let escolhaBrasil = WORLDBANK.BRA.indicators[selecionadoBrasil]
  console.log(selecionadoPeru);
  console.log(escolhaPeru.data["2005"])
  // console.log(base[escolha])
  //  console.log(typeof escolhaPeru)


  document.getElementById('indicators-div-peru').innerHTML = "Perú 2013:  " + escolhaPeru.data["2013"]
  document.getElementById('indicators-div-peru').innerHTML = "Perú 2014:  " + escolhaPeru.data["2014"]
  document.getElementById('indicators-div-peru').innerHTML = "Perú 2015:  " + escolhaPeru.data["2015"]

  document.getElementById('indicators-div-brasil').innerHTML = "Brasil 2013:  " + escolhaBrasil.data["2013"]
  document.getElementById('indicators-div-brasil').innerHTML ="Brasil 2014:  " + escolhaBrasil.data["2014"]
  document.getElementById('indicators-div-brasil').innerHTML = "Brasil 2015:  " + escolhaBrasil.data["2015"]

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
    </article>
`
}
