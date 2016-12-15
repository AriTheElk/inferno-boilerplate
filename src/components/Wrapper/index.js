import Inferno from 'inferno';

import styles from './styles.scss';

export default function Modal({ ...props }) {
  return <div class={ styles.wrapper } { ...props }/>;
}
