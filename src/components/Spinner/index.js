import Inferno from 'inferno';

import styles from './styles.scss';

/**
 * Renders a spinning css progress indicator
 *
 * @export
 * @returns
 */
export default function Spinner({ ...props }) {
  return (
    <div class={ styles.spinner } { ...props }/>
  );
}
