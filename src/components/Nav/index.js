import Inferno from 'inferno';

import styles from './styles.scss';

/**
 * Renders an inline navigation list
 *
 * @export
 */
export default function Nav(props) {
  return (
    <ul class={ styles.nav } { ...props }/>
  );
}
