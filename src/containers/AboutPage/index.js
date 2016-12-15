import Inferno from 'inferno';

export default function HomePage({ children }) {
  return (
    <div>
      built by <a href='https://twitter.com/garetmckinley' target='_blank'>Garet McKinley</a>
      { children }
    </div>
  );
}
