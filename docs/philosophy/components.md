# Stateless Presentational Components

Stateless Presentational Components are the most common and most useful component types. They are just plain functions that
take input and give output. They do not keep track of a state, which means that they will always render the same, given the
same input.

```jsx
import Inferno from 'inferno';

import Poster from './Poster';
import styles from './styles.scss';

/**
 * Renders a single formatted movie search result
 *
 * @export
 * @param {object} props
 * @returns
 */
export default function MovieRow({ data, ...props }) {
  if (typeof data.Title == 'undefined') return;
  return (
    <div class={ styles.wrapper } { ...props }>
      <Poster src={ data.Poster }/>
      <h3 class={ styles.title }>
        { data.Title } ({ data.Year })
      </h3>
    </div>
  );
}
```

## Encapsulation is key

You should never import from beyond the `./` scope while dealing with **Stateless Presentational Components**. This is a strict
philosophy that I've applied while working on the `inferno-boilerplate` codebase. You must pass data to your presentational
components via props.


# Stateful Container Components

If you take a look at the code below, you're going to notice that there's numerous major differences from the above example

```jsx
import Inferno from 'inferno';
import Component from 'inferno-component';

import Input from '../../components/Input';
import List from '../../components/List';
import MovieRow from '../../components/MovieRow';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }
  render() {
    return (
      <div>
        <Input
          onChange={ (e) => this.setState({ query: e.target.value }) }
          placeholder='enter a movie title'/>

        <h2>search query is { this.state.query }</h2>
      </div>
    );
  }
}
```

- Lots of imports beyond the current `./` scope
- Component is initialized as a class extended from `inferno-component`
- Component uses `this.state` to keep track of it's own values

For the most part, **Stateful Container Components** are just collections of **Stateless Presentational Components**. When
building presentational components, the goal is to make them as reusable as possible. Like building blocks. Container
components are usually special one-time-use components that keep track of and display very specific data, like a `PostLoop` for
displaying formatted search results.

## Notes

(none of these are particularly new ideas, much inspiration was drawn from [Dan Abramov's post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.1iqy18m6t) on Presentational and Container components)
