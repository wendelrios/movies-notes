let pai = document.getElementById('right-side')

    function createCard(){

      let name = document.getElementById('name').value
      let genre = document.getElementById('genre').value
      let director = document.getElementById('director').value
      let year = document.getElementById('year').value
      let grade = document.getElementById('grade').value

      let allValues = [name,genre, director, year, grade]
      

      // if(name && genre && director && year && grade){

        let card = document.createElement('div');
        card.setAttribute('class', 'card-style')

        allValues.forEach(value => {
          let div = document.createElement('div');
          let input = document.createElement('input')
          input.value = value
          input.setAttribute('disabled', 'true')
          div.setAttribute('class', 'input-boxx')
          div.appendChild(input)
          card.appendChild(div)
        })
        
        pai.insertBefore(card,null)

        let inputBox = document.querySelectorAll('.input-box > input')
        console.log(inputBox)
        for(let i = 0; i<inputBox.length;i++){
          inputBox[i].value = '';
        }
      }