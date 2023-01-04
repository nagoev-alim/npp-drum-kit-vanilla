// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';
import w from './assets/images/tom1.png';
import a from './assets/images/tom2.png';
import s from './assets/images/tom3.png';
import d from './assets/images/tom4.png';
import j from './assets/images/snare.png';
import k from './assets/images/crash.png';
import l from './assets/images/kick.png';
import sound1 from './assets/sounds/tom-1.mp3';
import sound2 from './assets/sounds/tom-2.mp3';
import sound3 from './assets/sounds/tom-3.mp3';
import sound4 from './assets/sounds/tom-4.mp3';
import sound5 from './assets/sounds/crash.mp3';
import sound6 from './assets/sounds/snare.mp3';
import sound7 from './assets/sounds/kick-bass.mp3';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='drum-kit'>
    <h2 class='title'>Drum 🥁 Kit</h2>
    <ul data-list=''>
      <li class='w' style="background-image: url('${w}')" data-w>w</li>
      <li class='a' style="background-image: url('${a}')" data-a>a</li>
      <li class='s' style="background-image: url('${s}')" data-s>s</li>
      <li class='d' style="background-image: url('${d}')" data-d>d</li>
      <li class='j' style="background-image: url('${j}')" data-j>j</li>
      <li class='k' style="background-image: url('${k}')" data-k>k</li>
      <li class='l' style="background-image: url('${l}')" data-l>l</li>
    </ul>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Create Class
class App {
  constructor() {
    this.DOM = {
      list: document.querySelector('[data-list]'),
    };

    this.DOM.list.addEventListener('click', this.keyHandler);
    window.addEventListener('keydown', this.keyHandler);
  }

  /**
   * @function keyHandler - Keydown and click events handler
   * @param code
   * @param target
   */
  keyHandler = ({ code, target }) => {
    if (code === 'KeyW' || target.classList.contains('w')) {
      this.animate('[data-w]');
      this.play(sound1);
    }
    if (code === 'KeyA' || target.classList.contains('a')) {
      this.animate('[data-a]');
      this.play(sound2);
    }
    if (code === 'KeyS' || target.classList.contains('s')) {
      this.animate('[data-s]');
      this.play(sound3);
    }
    if (code === 'KeyD' || target.classList.contains('d')) {
      this.animate('[data-d]');
      this.play(sound4);
    }
    if (code === 'KeyK' || target.classList.contains('k')) {
      this.animate('[data-k]');
      this.play(sound5);
    }
    if (code === 'KeyJ' || target.classList.contains('j')) {
      this.animate('[data-j]');
      this.play(sound6);
    }
    if (code === 'KeyL' || target.classList.contains('l')) {
      this.animate('[data-l]');
      this.play(sound7);
    }
  };

  /**
   * @function play - Play sound
   * @param file
   * @returns {Promise<void>}
   */
  play = (file) => new Audio(file).play();

  /**
   * @function animate - Add/Remove class name
   * @param target
   */
  animate = (target) => {
    document.querySelector(target).classList.add('pressed');
    setTimeout(() => document.querySelector(target).classList.remove('pressed'), 300);
  };
}

// ⚡️Class instance
new App();
