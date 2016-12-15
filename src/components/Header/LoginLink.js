import Inferno from 'inferno';

import Button from '../Button';

export default function LoginLink({ signIn, ...props }) {
  return (
    <span>
      <Button onClick={ signIn } { ...props }>Login</Button>
    </span>
  );
}
