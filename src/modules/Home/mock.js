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
    cssOverlay: css.preciousrascals__overlay,
  },
  {
    id: uuidv4(),
    cssImage: css.fruitycutie,
    cssOverlay: css.fruitycutie__overlay,
  },
  {id: uuidv4(), cssImage: css.oneoffs, cssOverlay: css.oneoffs__overlay},
];
