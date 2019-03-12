// window.onload = function(){
//   listeners()
// }

document.getElementById('btn-topic-educa').addEventListener('click', () => {
  showIndicadoresEduca();
  activeClass()

  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', () => {
    printValue();
    event.preventDefault()
  })  
})

document.getElementById('btn-topic-viol').addEventListener('click', () => {
  showIndicadoresViol();
  activeClass()

  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', () => {
    printValue();
    event.preventDefault()
  })  
})

document.getElementById('btn-topic-pop').addEventListener('click', () => {
  showIndicadoresPop();
  activeClass()
  elements = document.getElementById("btnEscolha");
  elements.addEventListener('click', () => {
    printValue();
    event.preventDefault()
  })  
})

// function doPais(pais) {
//   WORLDBANK[pais]
// }


function activeClass() {
  document.getElementById('indicator-selection').classList.remove("hide");
  document.getElementById('indicator-selection').classList.add("indicator-selection");
}


const basePeru = WORLDBANK.PER.indicators
const baseBrasil = WORLDBANK.BRA.indicators
const baseMexico = WORLDBANK.MEX.indicators
const baseChile = WORLDBANK.CHL.indicators

function printValue() {
  let valor = document.getElementById("formIndic").indicator.value;
  let selecionadoPeru = indexIndicator(basePeru, 'indicatorName', valor)
  let selecionadoBrasil = indexIndicator(baseBrasil, 'indicatorName', valor)
  let selecionadoMexico = indexIndicator(baseMexico, 'indicatorName', valor)
  let selecionadoChile = indexIndicator(baseChile, 'indicatorName', valor)
  let escolhaPeru = WORLDBANK.PER.indicators[selecionadoPeru]
  let escolhaBrasil = WORLDBANK.BRA.indicators[selecionadoBrasil]
  let escolhaMexico = WORLDBANK.MEX.indicators[selecionadoMexico]
  let escolhaChile = WORLDBANK.CHL.indicators[selecionadoChile]
  let checkBoxBRA = document.getElementById("BRA");
  let checkBoxPER = document.getElementById("PER");
  let checkBoxMEX = document.getElementById("MEX");
  let checkBoxCHL = document.getElementById("CHL");
  if (checkBoxBRA.checked == true) {
    document.getElementById('BRA-nomePais').innerHTML = "Brasil"
    document.getElementById('BRA-2013').innerHTML = escolhaBrasil.data["2013"]
    document.getElementById('BRA-2014').innerHTML = escolhaBrasil.data["2014"]
    document.getElementById('BRA-2015').innerHTML = escolhaBrasil.data["2015"]
  } else if (checkBoxBRA.checked == false) {
    document.getElementById('BRA-nomePais').innerHTML = ""
    document.getElementById('BRA-2013').innerHTML = ""
    document.getElementById('BRA-2014').innerHTML = ""
    document.getElementById('BRA-2015').innerHTML = ""

  }
  if (checkBoxPER.checked == true) {
    document.getElementById('PER-nomePais').innerHTML = "Perú"
    document.getElementById('PER-2013').innerHTML = escolhaPeru.data["2013"]
    document.getElementById('PER-2014').innerHTML = escolhaPeru.data["2014"]
    document.getElementById('PER-2015').innerHTML = escolhaPeru.data["2015"]
  } else if (checkBoxPER.checked == false) {
    document.getElementById('PER-nomePais').innerHTML = ""
    document.getElementById('PER-2013').innerHTML = ""
    document.getElementById('PER-2014').innerHTML = ""
    document.getElementById('PER-2015').innerHTML = ""

  }
  if (checkBoxMEX.checked == true) {
    document.getElementById('MEX-nomePais').innerHTML = "México"
    document.getElementById('MEX-2013').innerHTML = escolhaMexico.data["2013"]
    document.getElementById('MEX-2014').innerHTML = escolhaMexico.data["2014"]
    document.getElementById('MEX-2015').innerHTML = escolhaMexico.data["2015"]
  } else if (checkBoxMEX.checked == false) {
    document.getElementById('MEX-nomePais').innerHTML = ""
    document.getElementById('MEX-2013').innerHTML = ""
    document.getElementById('MEX-2014').innerHTML = ""
    document.getElementById('MEX-2015').innerHTML = ""

  }
  if (checkBoxCHL.checked == true) {
    document.getElementById('CHL-nomePais').innerHTML = "Chile"
    document.getElementById('CHL-2013').innerHTML = escolhaChile.data["2013"]
    document.getElementById('CHL-2014').innerHTML = escolhaChile.data["2014"]
    document.getElementById('CHL-2015').innerHTML = escolhaChile.data["2015"]
  } else if (checkBoxCHL.checked == false) {
    document.getElementById('CHL-nomePais').innerHTML = ""
    document.getElementById('CHL-2013').innerHTML = ""
    document.getElementById('CHL-2014').innerHTML = ""
    document.getElementById('CHL-2015').innerHTML = ""

  }

  document.getElementById('btn-avrg').addEventListener('click', () => {
 
    averageMexico()
    averagePeru()
    averageChile()
    averageBrasil()
    activeAvrg()
  })

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
          <img class="img-bra" src="img/bra.png" alt="mapa do brasil">
          <input type="checkbox" id="BRA" name="BRA">
          <label for="BRA">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Brasil</span>
          </label>
      </div>

      <div class="mex">
          <img class="img-mex" src="img/mex.png" alt="mapa do méxico">
          <input type="checkbox" id="MEX" name="MEX">
          <label for="MEX">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">México</span>
          </label>
      </div>

      <div class="per">
         <img class="img-per" src="img/per.png" alt="mapa do perú">
          <input type="checkbox" id="PER" name="PER">
          <label for="PER">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Perú</span>
          </label>
      </div>
      
      <div class="chi">
          <img class="img-chi" src="img/chi.png" alt="mapa do chile">
          <input type="checkbox" id="CHL" name="CHL">
          <label for="CHL">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Chile</span>
          </label>
      </div>
  </div>

  <form id="formIndic" action="">
      <input class="radio-indicator" type="radio" name="indicator"
          value="Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)">
      Proporção de matrículas de mulheres em relação a homens no
      ensino superior (%)<br>
      <input class="radio-indicator" type="radio" name="indicator"
          value="Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)">
      Proporção de matrículas de mulheres em relação ao sexo
      masculino no ensino médio (%)<br>
      <input class="radio-indicator" type="radio" name="indicator"
          value="Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)">
      Proporção de matrículas de mulheres em relação ao sexo
      masculino no ensino fundamental (%)<br>
      <button class="btnEscolha" id="btnEscolha" type="submit">Explorar</button>
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
      <td id="BRA-nomePais" data-th="name-BRA"></td>
          <td data-th="BRA-2013" id="BRA-2013"></td>
          <td data-th="BRA-2014" id="BRA-2014"></td>
          <td data-th="BRA-2015" id="BRA-2015"></td>
      </tr>
      <tr>
      <td id="PER-nomePais" data-th="name-PER"></td>
          <td data-th="PER-2013" id="PER-2013"></td>
          <td data-th="PER-2014" id="PER-2014"></td>
          <td data-th="PER-2015" id="PER-2015"></td>
      </tr>
      <tr>
      <td id="CHL-nomePais" data-th="name-CHL"></td>
          <td data-th="CHL-2013" id="CHL-2013"></td>
          <td data-th="CHL-2014" id="CHL-2014"></td>
          <td data-th="CHL-2015" id="CHL-2015"></td>
      </tr>
      <tr>
      <td id="MEX-nomePais" data-th="name-MEX"></td>
          <td data-th="MEX-2013" id="MEX-2013"></td>
          <td data-th="MEX-2014" id="MEX-2014"></td>
          <td data-th="MEX-2015" id="MEX-2015"></td>
      </tr>
  </table>
  <button id="btn-avrg" class="show-avrg" type="submit"><span>Média </span></button>

<div id="show-avrg" class="hide">
    <p id="p-avrg-PER"></p>
    <p id="p-avrg-BRA"></p>
    <p id="p-avrg-MEX"></p>
    <p id="p-avrg-CHL"></p>
</div>
</article>
`
}

function showIndicadoresViol() {
  console.log('chegou')
  let indicaDiv = document.getElementById('indicator-selection');
  indicaDiv.innerHTML = `
  <div class="box-select">
  <div class="box-country">

      <div class="bra">
          <img class="img-bra" src="img/bra.png" alt="mapa do brasil">
          <input type="checkbox" id="BRA" name="BRA">
          <label for="BRA">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Brasil</span>
          </label>
      </div>

      <div class="mex">
          <img class="img-mex" src="img/mex.png" alt="mapa do méxico">
          <input type="checkbox" id="MEX" name="MEX">
          <label for="MEX">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">México</span>
          </label>
      </div>

      <div class="per">
         <img class="img-per" src="img/per.png" alt="mapa do perú">
          <input type="checkbox" id="PER" name="PER">
          <label for="PER">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Perú</span>
          </label>
      </div>
      
      <div class="chi">
          <img class="img-chi" src="img/chi.png" alt="mapa do chile">
          <input type="checkbox" id="CHL" name="CHL">
          <label for="CHL">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Chile</span>
          </label>
      </div>
  </div>

  <form id="formIndic" action="">
  <input class="radio-indicator" type="radio" name="indicator" value="Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)"> Mulheres que acreditam que um marido tem justificativa de bater em sua esposa (qualquer uma das cinco razões*) (%)<br>
  <input class="radio-indicator" type="radio" name="indicator" value="Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)"> Proporção de mulheres vítimas de violência física ou sexual nos últimos 12 meses (% de mulheres entre 15 e 49 anos)<br>
  <button class="btnEscolha" id="btnEscolha" type="submit">Explorar</button>
  </form>




</div>
<article>
  <h1 class="title-article">VIOLÊNCIA</h1>
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
      <td id="BRA-nomePais" data-th="name-BRA"></td>
          <td data-th="BRA-2013" id="BRA-2013"></td>
          <td data-th="BRA-2014" id="BRA-2014"></td>
          <td data-th="BRA-2015" id="BRA-2015"></td>
      </tr>
      <tr>
      <td id="PER-nomePais" data-th="name-PER"></td>
          <td data-th="PER-2013" id="PER-2013"></td>
          <td data-th="PER-2014" id="PER-2014"></td>
          <td data-th="PER-2015" id="PER-2015"></td>
      </tr>
      <tr>
      <td id="CHL-nomePais" data-th="name-CHL"></td>
          <td data-th="CHL-2013" id="CHL-2013"></td>
          <td data-th="CHL-2014" id="CHL-2014"></td>
          <td data-th="CHL-2015" id="CHL-2015"></td>
      </tr>
      <tr>
      <td id="MEX-nomePais" data-th="name-MEX"></td>
          <td data-th="MEX-2013" id="MEX-2013"></td>
          <td data-th="MEX-2014" id="MEX-2014"></td>
          <td data-th="MEX-2015" id="MEX-2015"></td>
      </tr>
  </table>
  <button id="btn-avrg" class="show-avrg" type="submit"><span>Média </span></button>

<div id="show-avrg" class="hide">
    <p id="p-avrg-PER"></p>
    <p id="p-avrg-BRA"></p>
    <p id="p-avrg-MEX"></p>
    <p id="p-avrg-CHL"></p>
</div>
</article>
  
`
}

function showIndicadoresPop() {

  let indicaDiv = document.getElementById('indicator-selection');
  indicaDiv.innerHTML = `
  <div class="box-select">
  <div class="box-country">

      <div class="bra">
          <img class="img-bra" src="img/bra.png" alt="mapa do brasil">
          <input type="checkbox" id="BRA" name="BRA">
          <label for="BRA">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Brasil</span>
          </label>
      </div>

      <div class="mex">
          <img class="img-mex" src="img/mex.png" alt="mapa do méxico">
          <input type="checkbox" id="MEX" name="MEX">
          <label for="MEX">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">México</span>
          </label>
      </div>

      <div class="per">
         <img class="img-per" src="img/per.png" alt="mapa do perú">
          <input type="checkbox" id="PER" name="PER">
          <label for="PER">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Perú</span>
          </label>
      </div>
      
      <div class="chi">
          <img class="img-chi" src="img/chi.png" alt="mapa do chile">
          <input type="checkbox" id="CHL" name="CHL">
          <label for="CHL">
          <svg class="pin" width="26" height="57" viewBox="0 0 76 107" xmlns="http://www.w3.org/2000/svg">
				<path d="M38 106.7c2.4 0 37.7-43 37.8-68.8 0-21-17-38-38-38C17 0 0 17 0 38c.4 27 35.4 68.7 38 68.7z" fill="#eeeeee" />
				<ellipse fill="#AB69D5" cx="38.1" cy="38.1" rx="23.1" ry="23.1" />
		</svg>
              <span class="label-name">Chile</span>
          </label>
      </div>
  </div>

  <form id="formIndic" action="">
  <input class="radio-indicator" type="radio" name="indicator" value="Población activa, mujeres (% de la población activa total)"> População activa, mulheres (% do total da população activa)<br>
  <input class="radio-indicator" type="radio" name="indicator" value="Población entre 15 y 64 años de edad, mujeres (% del total)"> População entre 15 e 64 anos de idade, mulheres (% do total)<br>
  <button class="btnEscolha" id="btnEscolha" type="submit">Explorar</button>
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
      <td id="BRA-nomePais" data-th="name-BRA"></td>
          <td data-th="BRA-2013" id="BRA-2013"></td>
          <td data-th="BRA-2014" id="BRA-2014"></td>
          <td data-th="BRA-2015" id="BRA-2015"></td>
      </tr>
      <tr>
      <td id="PER-nomePais" data-th="name-PER"></td>
          <td data-th="PER-2013" id="PER-2013"></td>
          <td data-th="PER-2014" id="PER-2014"></td>
          <td data-th="PER-2015" id="PER-2015"></td>
      </tr>
      <tr>
      <td id="CHL-nomePais" data-th="name-CHL"></td>
          <td data-th="CHL-2013" id="CHL-2013"></td>
          <td data-th="CHL-2014" id="CHL-2014"></td>
          <td data-th="CHL-2015" id="CHL-2015"></td>
      </tr>
      <tr>
      <td id="MEX-nomePais" data-th="name-MEX"></td>
          <td data-th="MEX-2013" id="MEX-2013"></td>
          <td data-th="MEX-2014" id="MEX-2014"></td>
          <td data-th="MEX-2015" id="MEX-2015"></td>
      </tr>
  </table>
  <button id="btn-avrg" class="show-avrg" type="submit"><span>Média </span></button>

<div id="show-avrg" class="hide">
    <p id="p-avrg-PER"></p>
    <p id="p-avrg-BRA"></p>
    <p id="p-avrg-MEX"></p>
    <p id="p-avrg-CHL"></p>
</div>
</article>
`}

function averageMexico() {
  let anoUm = parseFloat(document.getElementById("MEX-2013").innerHTML);
  let anoDois = parseFloat(document.getElementById("MEX-2014").innerHTML);
  let anoTres = parseFloat(document.getElementById("MEX-2015").innerHTML);
  let average = (anoUm + anoDois + anoTres) / 3
  if (average === NaN) {
  }
 document.getElementById('p-avrg-MEX').innerHTML = "México:" + average
}

function averageBrasil() {
  let anoUm = parseFloat(document.getElementById("BRA-2013").innerHTML);
  let anoDois = parseFloat(document.getElementById("BRA-2014").innerHTML);
  let anoTres = parseFloat(document.getElementById("BRA-2015").innerHTML);
  document.getElementById('p-avrg-BRA').innerHTML = "Brasil:" + (anoUm + anoDois + anoTres) / 3
}


function averagePeru() {
  let anoUm = parseFloat(document.getElementById("PER-2013").innerHTML);
  let anoDois = parseFloat(document.getElementById("PER-2014").innerHTML);
  let anoTres = parseFloat(document.getElementById("PER-2015").innerHTML);
  document.getElementById('p-avrg-PER').innerHTML = "Perú:" + (anoUm + anoDois + anoTres) / 3
}


function averageChile() {
  let anoUm = parseFloat(document.getElementById("CHL-2013").innerHTML);
  let anoDois = parseFloat(document.getElementById("CHL-2014").innerHTML);
  let anoTres = parseFloat(document.getElementById("CHL-2015").innerHTML);
  document.getElementById('p-avrg-CHL').innerHTML = "Chile:" + (anoUm + anoDois + anoTres) / 3
}




function activeAvrg() {
  document.getElementById('show-avrg').classList.remove("hide");
  document.getElementById('show-avrg').classList.add("visivel");
  event.preventDefault()
}

