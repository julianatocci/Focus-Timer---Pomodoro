let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');

    const mode = darkMode ? 'light' : 'dark'; // se eu tiver o dark mode eu vou aplicar 'light', se não vou aplicar 'dark'.

    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado!`;

        darkMode = !darkMode;
})