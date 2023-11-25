// const themeBtn = document.querySelector('.theme');

// function getCurrentTheme(){
//     let theme = window.matchMedia('prefers-color-scheme: dark')
//     .matches ? 'dark' : 'light';
//     localStorage.getItem('am-theme') ? theme = 
//     localStorage.getItem('am-theme') : null;
//     return theme;
// }

// function loadTheme(theme){
//     const root = document.querySelector(':root');
//     if(theme === "light"){
//         themeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--background)" viewBox="0 0 16 16"><path d="M14.682 10.765c-5.787 0-9.448-2.673-9.448-9.447 0-1.13-.743-1.618-1.458-1.13A8.659 8.659 0 1 0 15.81 12.223c.49-.713.004-1.457-1.128-1.457Z"/></svg>';
//     } else {
//         themeBtn.innerHTML = '<svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="var(--background)"><path d="M10 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm4 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-3 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm9-7a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM3 11a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2h2Zm13.364 5.364a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM4.344 5.757a1 1 0 0 0 1.413-1.414l-.707-.707A1 1 0 1 0 3.636 5.05l.707.707Zm-.708 10.607a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0Zm10.607-12.02a1 1 0 0 0 1.414 1.413l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707Z"/></svg>';
//     }
//     root.setAttribute('color-scheme', `${theme}`);
//     root.setAttribute('data-theme', `${theme}`);
// }

// themeBtn.addEventListener('click', () => {
//     let theme = getCurrentTheme();
//     if(theme === 'dark'){
//         theme = 'light';
//     } else {
//         theme = 'dark';
//     }
//     localStorage.setItem('am-theme', `${theme}`);
//     loadTheme(theme)
// })

// window.addEventListener('DOMContentLoaded', () => {
//     loadTheme(getCurrentTheme());
// })