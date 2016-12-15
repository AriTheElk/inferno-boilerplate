import Inferno from 'inferno';
import { Link, IndexLink } from 'inferno-router';

import Button from '../Button';
import Nav from '../Nav';

export default function HeaderNav({ ...props }) {
  return (
    <Nav { ...props }>
      <IndexLink to='/' activeClassName='active'>
        <Button>Home</Button>
      </IndexLink>

      <Link to='/about' activeClassName='active'>
        <Button>About</Button>
      </Link>
    </Nav>
  );
}
