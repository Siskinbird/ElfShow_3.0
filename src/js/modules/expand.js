function expand() {
    let programs = document.getElementById('programs')
	let itemButtons = document.querySelectorAll('.programs-item_main-button');
	

    itemButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          console.log("Индекс кликнутого элемента:" + `${index}`);
        });
      });
}

export default expand;