


function dropdownMenu() {
    console.log(this.nextElementSibling);
    if (this.nextElementSibling.style.display == 'block'){
        this.nextElementSibling.style.display = 'none';
    }
    else {
        this.nextElementSibling.style.display = 'block';
    }
}



for (let button of document.querySelectorAll('.dropdown')){
    button.addEventListener('click', dropdownMenu);
}