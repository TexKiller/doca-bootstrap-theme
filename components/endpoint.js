const React = require('react');
const DocsonDefinitionTable = require('./docsonDefinitionTable');
const MarkdownPreview = require('react-marked-markdown').MarkdownPreview;
const ImmutablePropTypes = require('react-immutable-proptypes');
const Component = require('react-pure-render/component');
const syntaxHighlight = require('../js/functions').syntaxHighlight;

class Endpoint extends Component {

  static propTypes = {
    link: ImmutablePropTypes.map.isRequired,
    obj: ImmutablePropTypes.map.isRequired
  };

  render() {
    const { link, obj } = this.props;

    return (
      <section key={link.get('html_id')} id={link.get('html_id')} className="list-group-item">
        <h3>
          <div className="label label-success">{link.get('method')}</div>{' '}
          <div className="endpoint-title">{link.get('title')}</div>
        </h3>
        {link.get('description') && <MarkdownPreview value={link.get('description')} />}
        <pre>
          {link.get('method')} {link.get('uri')}
        </pre>

        {(link.getIn(['parameters', 'all_props']) || link.get('_schema')) &&
          <div>
            <h4>Request</h4>
            {link.get('_schema') &&
            <DocsonDefinitionTable
              schema={
                link.get('_schema')
              }
              contextId={link.get('title')}
              fieldPointer="/properties"
            />
            }
            {!link.get('_schema') &&
            <DocsonDefinitionTable
              properties={
                link.getIn(['parameters', 'all_props'])
              }
              required={
                link.getIn(['parameters', 'required_props'])
              }
              contextId={link.get('title')}
              fieldPointer="/properties"
            />
            }
            {link.getIn(['parameters', 'example']) &&
            <div>
              <div>
                <h5>Example request object</h5>
              </div>
              <div>
                <pre className="json" dangerouslySetInnerHTML={{ __html: syntaxHighlight(link.get('_schema') &&
                  link.getIn(['_schema', 'example']) || link.getIn(['parameters', 'example']))}}></pre>
              </div>
            </div>
            }
          </div>
        }

        <div>
          <h4>cURL</h4>
          <div>
            <pre>{link.get('curl')}</pre>
          </div>
        </div>

        <div>
          <h4>Response</h4>
          {link.get('_targetSchema') && link.getIn(['_targetSchema', 'rel']) == 'self' &&
          <DocsonDefinitionTable
              properties={
                obj.getIn(['object_definition', 'all_props'])
              }
              required={
                obj.getIn(['object_definition', 'required_props'])
              }
          />
          }
          {link.get('_targetSchema') && link.getIn(['_targetSchema', 'rel']) != 'self' &&
          <DocsonDefinitionTable
            schema={
              link.get('_targetSchema')
            }
          />
          }
          <div>
            <h5>Example response object</h5>
          </div>
          <div>
            <pre className="json" dangerouslySetInnerHTML={{ __html: syntaxHighlight(link.get('response'))}}></pre>
          </div>
        </div>
      </section>
    );
  }

}

module.exports = Endpoint;
