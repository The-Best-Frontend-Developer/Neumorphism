const themeCheckBox = document.querySelector('.theme-toggle__switch')
const root = document.documentElement
let themeColor = 0;
const figureButtons = document.querySelectorAll('.figure-button')
const figures = document.querySelectorAll('.figure')
const looking = ['high', 'deep', 'hd', 'dh']

function updateShadows() {
    document.querySelectorAll('.neumorphism').forEach(el => {
        const { width, height } = el.getBoundingClientRect();

        const shadowOffset = Math.max(width, height) * 0.035; // 3,5% от большего измерения
        const shadowBlur = Math.max(width, height) * 0.05; // 5% от большего измерения

        el.style.setProperty('--shadow-offset', `${shadowOffset}px`);
        el.style.setProperty('--shadow-blur', `${shadowBlur}px`);
        console.log(el.getBoundingClientRect())
    });
}

themeCheckBox.addEventListener('click',() => {
    if (themeColor === 0) {
        root.style.setProperty('--mainBackgroundColor', '#272929')
        root.style.setProperty('--secondBackgroundColor', '#1c1d1d')
        root.style.setProperty('--shadowColorDark', 'black')
        root.style.setProperty('--shadowColorBright', '#414545')
        root.style.setProperty('--mainTextColor', 'lightgrey')
        themeColor = 1
    } else if (themeColor === 1) {
        root.style.setProperty('--mainBackgroundColor', '#ebebeb')
        root.style.setProperty('--secondBackgroundColor', 'lightgrey')
        root.style.setProperty('--shadowColorDark', 'grey')
        root.style.setProperty('--shadowColorBright', 'white')
        root.style.setProperty('--mainTextColor', '#2a2d32')
        themeColor = 0
    }
})

figureButtons.forEach((el, index) => {
    el.addEventListener('click', () => {
        figureButtons.forEach((el) => {
            el.classList.remove('active')
        })
        figureButtons[index].classList.add('active')
        figures.forEach((element) => {
            element.classList.remove('high', 'deep', 'hd', 'dh')
            element.classList.add(looking[index])
        })
    })
})

updateShadows();
window.addEventListener('resize', updateShadows);
