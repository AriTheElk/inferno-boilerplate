import Inferno from 'inferno';

import styles from './styles.scss';

export default function Nav(props) {
  return (
    <ul class={ styles.nav } { ...props }/>
  );
}
