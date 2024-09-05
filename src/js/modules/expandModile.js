	let cardButtons = document.querySelectorAll('.card-item_main-button');
    let one = document.querySelector('#one_m');
    let two = document.querySelector('#two_m');
    let three = document.querySelector('#three_m');
    let fohr = document.querySelector('#fohr_m');
    let five = document.querySelector('#five_m');
    let six = document.querySelector('#six_m');



function expandMobile() {	
    cardButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if(`${index}` === '0'){
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
        });
      });
    }

export default expandMobile;