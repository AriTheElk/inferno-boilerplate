/* This is the template is used by the mkcomponent command */
import Inferno from 'inferno';

// import styles from './styles.scss';

/**
 * COMPONENT_DESCRIPTION
 *
 * @export
 * @param {object} props
 * @returns
 */
export default function COMPONENT_NAME({ children, ...props }) {
  return (
    <div { ...props }>
      {children}
    </div>
  );
}
