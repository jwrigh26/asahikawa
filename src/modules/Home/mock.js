import uuidv4 from 'uuid/v4';
import css from './components/Comics/comics.scss';

export const preciousRascals = [
  {id: uuidv4(), path: 'pr/pr_02162019_01'},
  {id: uuidv4(), path: 'pr/pr_02162019_02'},
  {id: uuidv4(), path: 'pr/pr_02162019_03'},
  {id: uuidv4(), path: 'pr/pr_02162019_04'},
];

export const comics = [
  {
    id: uuidv4(),
    cssImage: css.preciousrascals,
    cssCaption: css.preciousrascals__caption,
    cssOverlay: css.preciousrascals__overlay,
    caption: 'Precious Rascals',
  },
  {
    id: uuidv4(),
    cssImage: css.fruitycutie,
    cssCaption: css.fruitycutie__caption,
    cssOverlay: css.fruitycutie__overlay,
    caption: 'Fruity Cutie',
  },
  {
    id: uuidv4(),
    cssImage: css.oneoffs,
    cssCaption: css.oneoffs__caption,
    cssOverlay: css.oneoffs__overlay,
    caption: 'One Offs',
  },
];

export const doodles = [
  {id: uuidv4(), path: 'doodles/doodle001'},
  {id: uuidv4(), path: 'doodles/doodle002'},
  {id: uuidv4(), path: 'doodles/doodle003'},
  {id: uuidv4(), path: 'doodles/doodle004'},
  {id: uuidv4(), path: 'doodles/doodle005'},
  {id: uuidv4(), path: 'doodles/doodle006'},
];
