import Inferno from 'inferno';
import Button from '../Button';

export default function LogoutLink({ signOut, ...props }) {
  return <Button href='#' onClick={ signOut } { ...props }>Logout</Button>;
}
