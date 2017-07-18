const React = require('react');

const Head = ({ cssBundle, title }) =>
  <head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
    />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
    {cssBundle && <link href={cssBundle} rel="stylesheet" />}
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://github.com/TexKiller/node-docson/releases/download/v0.4.6/node-docson.min.js"></script>
    <script type="text/javascript">
      var docson = nodeDocson();
    </script>
  </head>;


Head.propTypes = {
  cssBundle: React.PropTypes.string,
  title: React.PropTypes.string,
};

Head.displayName = 'Head';
module.exports = Head;
