import Inferno from 'inferno';
import Component from 'inferno-component';

import Header from './components/Header';
import Wrapper from './components/Wrapper';


/**
 * This is the main component that wraps all of our pages
 *
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  render() {
    // comment out the below lines if you need to
    // access either the store of the state.
    // const store = this.context.store;
    // const state = store.getState();

    return (
      <div>
        <Header>
          <h1>Inferno Boilerplate</h1>
        </Header>
        <Wrapper>
          { this.props.children }
        </Wrapper>
      </div>
    );
  }
}
