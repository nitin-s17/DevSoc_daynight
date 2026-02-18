var slider = document.getElementsByClassName('dayNightSlider')[0];
var backgroundImg = document.getElementsByClassName('backgroundImg')[0];

slider.addEventListener('input', () => {
    const transitionValue = slider.value / 100;
    //console.log(value);
    if (transitionValue > 0.9) {
        document.body.classList.add('nightMode');
    } else {
        document.body.classList.remove('nightMode');
    }
    backgroundImg.style.setProperty('--night', transitionValue);
});