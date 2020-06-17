let pai = document.getElementById('right-side') // div onde os cards serão inseridos
const spans = document.querySelectorAll('.input-box > span')// estrelas a serem inseridas no card
let clickedOn = false; // variavel que verifica se as estrelas estao no estado de clicadas 

//função responsável pela criação dos cards
    function createCard(){

      let name = document.getElementById('name').value
      let genre = document.getElementById('genre').value
      let director = document.getElementById('director').value
      let year = document.getElementById('year').value
      

      let allValues = [name,genre, director, year, spans]
      

      // if(name && genre && director && year && grade){

        let card = document.createElement('div');
        card.setAttribute('class', 'card-style')

        //trecho onde o array allValues é percorrido e os campos do card são criados e preenchidos
        allValues.forEach((value, index) => {
          let div = document.createElement('div');
          if(index === 4){
            value.forEach(value => {
              let span = document.createElement('span')
              let spanOriginal = value.cloneNode(false)
              span = spanOriginal
              div.appendChild(span)
              span.removeAttribute('onmouseover')
              span.removeAttribute('onclick')
              span.removeAttribute('onmouseout')
            })
            return card.appendChild(div)
          }
          let input = document.createElement('input')
          input.value = value
          input.setAttribute('disabled', 'true')
          div.setAttribute('class', 'input-boxx')
          div.appendChild(input)
          card.appendChild(div)
        })
        
        pai.insertBefore(card,null)

        //trecho criado para limpar campos do formulário após o card ser criado.
        let inputBox = document.querySelectorAll('.input-box > input')
        for(let i = 0; i<inputBox.length;i++){
          inputBox[i].value = '';
        }
        spans.forEach(span => {
          span.classList.remove('checked')
        })
      }

      //função responsável por adicionar classe checked(pinta estrela de amarelo) nas estrelas
      function addChecked(i){
        if(!(clickedOn)){
          if(0<i<=spans.length-1){
            do{
              spans[i].classList.add('checked')
              i--}
            while(i>=0);
          }
          if(i===0){
            spans[i].classList.add('checked')
          }
        }
      }

      //função responsável por remover classe checked das estrelas
      function removeChecked(i){
        if(!(clickedOn)){
          if(0<i<=spans.length-1){
            do{
              spans[i].classList.remove('checked')
              i--}
              while(i>=0)
          }
          if(i===0){
            spans[i].classList.remove('checked')
          }
        }
      }

      //função responsável por adicionar classe checked de acordo com estado das estrelas 
      function starClick(i){
        //Trecho que eu verifico se a sucessora de alguma estrela está clicada, 
        //Exceto a última estrela, pois essa não possui sucessora
        //Se sim, eu impeço a estrela em questão de ser clicada.
        //Só entra nesse bloco, se a estrela tem classe checked, está clicada, não é a última e a sucessora está clicada.
        if(spans[i].classList.contains('checked') && clickedOn){
          if((i<spans.length - 1)){
            if(spans[i+1].classList.contains('checked')){
              return
            }
          }
          //Se estrela está clicada, desative classe checked.
          if(0>i<=spans.length-1){
            do{
              spans[i].classList.remove('checked')
            i--}
            while(i>=0)
            clickedOn = false;
          }
          if(i===0){
            spans[i].classList.remove('checked')
            clickedOn = false;
          }
        }

        //Adiciona checked de acordo com a posição
        if(0<i<=spans.length-1){
          do{
            spans[i].classList.add('checked')
            i--}
            while(i>0);
            clickedOn = true;
        }

        if(i===0){
          spans[i].classList.add('checked')
          clickedOn = true;
        }
      }

      

       

      

      