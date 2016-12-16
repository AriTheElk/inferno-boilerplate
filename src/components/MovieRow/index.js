import Inferno from 'inferno';

import Poster from './Poster';
import styles from './styles.scss';

/**
 * Renders a single formatted movie search result
 *
 * @export
 * @param {object} data
 * @returns
 */
export default function MovieRow({ data, ...props }) {
  if (typeof data.Title == 'undefined') return;
  return (
    <div class={ styles.wrapper } { ...props }>
      <Poster src={ data.Poster }/>
      <h3 class={ styles.title }>{ data.Title } ({ data.Year })</h3>
    </div>
  );
}
