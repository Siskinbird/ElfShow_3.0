function expand() {
    //let programs = document.getElementById('programs')
	let itemButtons = document.querySelectorAll('.programs-item_main-button');
    let innerShow = document.querySelector('.program-item_expand');
    let one = document.querySelector('#one');
    let two = document.querySelector('#two');
    let three = document.querySelector('#three');
    let fohr = document.querySelector('#fohr');
    let five = document.querySelector('#five');
    let six = document.querySelector('#six');

	
    itemButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if(`${index}` === '0'){
                //innerShow.classList.toggle('show'); 
                   one.classList.toggle('show');
            }else if (`${index}` === '1'){
                two.classList.toggle('show');
            }
            else if (`${index}` === '2'){
                three.classList.toggle('show');
            }
            else if (`${index}` === '3'){
                fohr.classList.toggle('show');
            }
            else if (`${index}` === '4'){
                five.classList.toggle('show');
            }
            else if (`${index}` === '5'){
                six.classList.toggle('show');
            }

            


           
            
            //console.log("Индекс кликнутого элемента:" + `${index}`);
        });
      });
    }

export default expand;