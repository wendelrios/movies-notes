let pai = document.getElementById('right-side')
const spans = document.querySelectorAll('.input-box > span')

    function createCard(){

      let name = document.getElementById('name').value
      let genre = document.getElementById('genre').value
      let director = document.getElementById('director').value
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
        if(i===0){
          spans[i].classList.add('checked')
        }
        if(0<i<=spans.length-1){
          do{
            spans[i].classList.add('checked')
            i--}
          while(i>=0);
        }
      }

      function removeChecked(i){
        if(i===0){
          spans[i].classList.remove('checked')
        }
        if(0<i<=spans.length-1){
          do{
            spans[i].classList.remove('checked')
            i--}
            while(i>=0)
        }
      }

      function checkedClick(i){
        if(i===0){
          if(spans[i].classList.contains('checked')){
            spans[i].removeAttribute('onmouseout')
            removeChecked(i)
          }
          if(!(spans[i].classList.contains('checked'))){
            spans[i].removeAttribute('onmouseout')
            addChecked(i)
          } 
        }
        if(0<i<spans.length-1){
          if(spans[i].classList.contains('checked')){
            spans[i].removeAttribute('onmouseout')
            removeChecked(i)
          }
          if(!(spans[i].classList.contains('checked'))){
            spans[i].removeAttribute('onmouseout')
            addChecked(i)
          }
        }
      }

      

      