const React = require('react');
const Component = require('react-pure-render/component');
const syntaxHighlight = require('../js/functions').syntaxHighlight;

class ExampleObject extends Component {

  static propTypes = {
    example: React.PropTypes.string.isRequired,
  };

  render() {
    const { example } = this.props;
    return (
      <div>
        <div>
          <h5>Example object</h5>
        </div>
        <div>
          <pre className="json" dangerouslySetInnerHTML={{ __html: syntaxHighlight(example)}}></pre>
        </div>
      </div>
    );
  }

}

module.exports = ExampleObject;
