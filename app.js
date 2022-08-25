import ancients from './assets/Ancients';
import brownCards from './brown';
import blueCards from './blue';
import greenCards from './green';
import difficulties from './data/difficulties';

const cardSelector = document.querySelector('.ancient-card');

cardSelector.addEventListener('click', () => {
    cardSelector.classList.add('.active');
    console.log('click');
})

