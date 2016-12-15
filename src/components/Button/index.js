import Inferno from 'inferno';

import styles from './styles.scss';

export default function Button({ children, ...props }) {
  return (
    <button class={ styles.button } { ...props }>{ children }</button>
  );
}
