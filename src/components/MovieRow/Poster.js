import Inferno from 'inferno';

import styles from './styles.scss';

/**
 * Renders a movie poster
 *
 * @export
 * @param {object} props
 * @returns
 */
export default function Poster({ ...props }) {
  return <img class={ styles.poster } { ...props }/>;
}
