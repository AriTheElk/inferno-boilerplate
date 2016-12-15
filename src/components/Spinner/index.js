/* This is the template is used by the mkcomponent command */
import Inferno from 'inferno';

import styles from './styles.scss';

/**
 * Renders a spinning css progress indicator
 *
 * @export
 * @param {object} props
 * @returns
 */
export default function Spinner({ ...props }) {
  return (
    <div class={ styles.spinner } { ...props }/>
  );
}
