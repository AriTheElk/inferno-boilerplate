import Inferno from 'inferno';

import styles from './styles.scss';

/**
 * Renders a wrapper div to keep the page narrow
 *
 * @export
 * @param {any} {
 * @param {any} props
 * @returns
 */
export default function Modal({ ...props }) {
  return <div class={ styles.wrapper } { ...props }/>;
}
