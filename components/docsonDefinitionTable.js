const React = require('react');
const Constraints = require('./constraints');
const MarkdownPreview = require('react-marked-markdown').MarkdownPreview;
const List = require('immutable').List;
const ImmutablePropTypes = require('react-immutable-proptypes');
const Component = require('react-pure-render/component');

class DocsonDefinitionTable extends Component {

  static propTypes = {
    properties: ImmutablePropTypes.map,
    required: ImmutablePropTypes.map,
    schema: ImmutablePropTypes.map
  };

  componentDidMount() {
      if (this.props.schema) {
        docson.doc(JSON.stringify(this.props.schema), this.div);
      } else {
        docson.doc(JSON.stringify(this.props), this.div);
      }
  }

  render() {
    return (
      <div ref={(input) => {this.div = input }}></div>
    );
  }

}

module.exports = DocsonDefinitionTable;
