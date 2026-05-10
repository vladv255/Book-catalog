export function initTheme () {
    const themeBtn = document.querySelector('#theme-toggle');
    if (!themeBtn) return;

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateButton(themeBtn, savedTheme);

themeBtn.addEventListener('click', () => {
    const curTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = curTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    updateButton(themeBtn, newTheme);
});

}

function updateButton(btn, theme) {
    btn.textContent = theme === 'light' ? 'dark' : 'light';
}