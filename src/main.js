document.getElementById('btn-topic-educa').addEventListener('click', () => {
  selectCountryEduca();
})

document.getElementById('btn-topic-viol').addEventListener('click', () => {
  selectCountryViolence();
})

document.getElementById('btn-topic-pop').addEventListener('click', () => {
  selectCountryPop();
})

function selectCountryEduca() {
  let productDiv = document.getElementById('country-selection');
  productDiv.innerHTML = `
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

