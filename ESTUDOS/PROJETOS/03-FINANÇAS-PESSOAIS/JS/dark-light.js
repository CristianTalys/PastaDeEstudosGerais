let btnTema = document.getElementById('btnTema');
let fundo = document.getElementById('fundo');


function trocaTema() {
  if (btnTema.className == 'btnDarkTheme') {
    btnTema.className = 'btnLightTheme';
    fundo.className = 'darkTheme';
  }else if (btnTema.className == 'btnLightTheme') {
    btnTema.className = 'btnDarkTheme';
    fundo.className = 'lightTheme';
  };
}