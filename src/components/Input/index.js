import Inferno from 'inferno';

import styles from './styles.scss';

/**
 * Renders a styled input box
 *
 * @export
 */
export default function Input({ ...props }) {
  return (
    <input class={ styles.input } { ...props }/>
  );
}
