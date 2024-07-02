let btnTema = document.getElementById('btnTema');
let fundo = document.getElementById('fundo');
let main = document.getElementById('main');


function trocaTema() {
  if (btnTema.className == 'btnDarkTheme') {
    btnTema.className = 'btnLightTheme';
    fundo.className = 'darkTheme';
    main.style.color = 'white';
  }else if (btnTema.className == 'btnLightTheme') {
    btnTema.className = 'btnDarkTheme';
    fundo.className = 'lightTheme';
    main.style.color = 'black';

  };
};

