document.getElementById('btn-topic-educa').addEventListener('click', () => {
  showIndicadoresEduca();
  printValue()
})

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

      <form id="formEduca" action="">
        <input type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)"> Proporção de matrículas de mulheres em relação a homens no
        ensino superior (%)<br>
        <input type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)"> Proporção de matrículas de mulheres em relação ao sexo
        masculino no ensino médio (%)<br>
        <input type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)"> Proporção de matrículas de mulheres em relação ao sexo
        masculino no ensino fundamental (%)
        <input id="btnEscolha" type="button" value="Explorar">
      </form>

      <p id="indicators-div-peru"></p>
      <p id="indicators-div-brasil"></p>


    </div>
    <article>
      <div class="ball-topic"></div>
      <h1>EDUCAÇÃO</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
        fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
      <div class="zig-topic"></div>
    </article>
`
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

      <form id="formEduca" action="">
        <input type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)"> Proporção de matrículas de mulheres em relação a homens no
        ensino superior (%)<br>
        <input type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)"> Proporção de matrículas de mulheres em relação ao sexo
        masculino no ensino médio (%)<br>
        <input type="radio" name="indicator" value="Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)"> Proporção de matrículas de mulheres em relação ao sexo
        masculino no ensino fundamental (%)
        <input id="btnEscolha" type="button" value="Explorar">
      </form>

      <p id="indicators-div-peru"></p>
      <p id="indicators-div-brasil"></p>


    </div>
    <article>
      <div class="ball-topic"></div>
      <h1>EDUCAÇÃO</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
        fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
      <div class="element">
          <div class="elemA"></div>
          <div class="elemB"></div>
      </div>
    </article>
`
}

