import Inferno from 'inferno';

import styles from './styles.scss';

/**
 * Renders a flat styled button
 *
 * @export
 */
export default function Button({ children, ...props }) {
  return (
    <button class={ styles.button } { ...props }>{ children }</button>
  );
}
