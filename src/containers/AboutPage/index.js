import Inferno from 'inferno';

/**
 * The about page gives some attribution back to the authors
 *
 * @export
 */
export default function AboutPage({ children }) {
  return (
    <div>
      built by <a href='https://twitter.com/garetmckinley' target='_blank'>Garet McKinley</a>
      { children }
    </div>
  );
}
