import Inferno from 'inferno';
import styles from './styles.scss';

export default function Wrapper({ children }) {
  return (
    <div class={ styles.wrapper }>
      { children }
    </div>
  );
}
