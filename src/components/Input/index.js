import Inferno from 'inferno';

import styles from './styles.scss';

export default function Input({ ...props }) {
  return (
    <input class={ styles.input } { ...props }/>
  );
}
