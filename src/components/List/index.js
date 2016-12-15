import Inferno from 'inferno';

import styles from './styles.scss';

export default function List({ items, ...props }) {
  const listItems = [];
  for (let i = 0; i < items.length; i++) {
    listItems.push(
      <li class={ styles.li }>{ items[i] }</li>
    );
  }
  return (
    <ul class={ styles.ul } { ...props }>
      { listItems }
    </ul>
  );
}
