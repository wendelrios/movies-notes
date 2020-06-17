let pai = document.getElementById('right-side')
const spans = document.querySelectorAll('.input-box > span')
let clickedOn = false;

    function createCard(){

      let name = document.getElementById('name').value
      let genre = document.getElementById('genre').value
      let director = document.getElementById('director').valuex
      let year = document.getElementById('year').value
      

      let allValues = [name,genre, director, year, spans]
      

      // if(name && genre && director && year && grade){

        let card = document.createElement('div');
        card.setAttribute('class', 'card-style')

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

        let inputBox = document.querySelectorAll('.input-box > input')
        for(let i = 0; i<inputBox.length;i++){
          inputBox[i].value = '';
        }
      }

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

      function starClick(i){
        if(spans[i].classList.contains('checked') && clickedOn){
          if((i<spans.length - 1)){
            if(spans[i+1].classList.contains('checked')){
              return
            }
          }
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

      

       

      

      