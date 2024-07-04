let olho = document.getElementById('iconEye');
let btn = document.querySelector('#iconEye');
btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        olho.className = 'bi bi-eye-fill';
    } else {
        input.setAttribute('type', 'password');
        olho.className = 'bi bi-eye-slash-fill';
    }
});