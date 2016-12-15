/* This is the template is used by the mkcontainer command */
import Inferno from 'inferno';
import Component from 'inferno-component';


/**
 * COMPONENT_DESCRIPTION
 *
 * @export
 * @class COMPONENT_NAME
 * @extends {Component}
 */
export default class COMPONENT_NAME extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initialize state here
    }
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
