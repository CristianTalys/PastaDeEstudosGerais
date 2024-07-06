let btn = document.querySelector('#eye');
btn.addEventListener('click', function() {
    let input = document.querySelector('#ipass');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        btn.className = 'bi bi-eye-fill';
    } else {
        input.setAttribute('type', 'password');
        btn.className = 'bi bi-eye-slash-fill';
    }
});