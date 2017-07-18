# doca-node-docson-theme

Simple [Node-Docson](https://github.com/TexKiller/node-docson) theme for [doca](https://github.com/cloudflare/doca), based on [doca-bootstrap-theme](https://github.com/cloudflare/doca-bootstrap-theme).

It's supposed to be used in combination with [doca](https://github.com/cloudflare/doca) - a tool that scaffolds API documentation based on JSON HyperSchemas.

## Usage

```
npm install -g doca
doca init -t node-docson
```

This creates a new API documentation with `doca-node-docson-theme` as a dependency.

## Special properties

The `_schema` property placed on an object or link schema will, if present, be passed to [Node-Docson](https://github.com/TexKiller/node-docson) instead of the processed properties.

The `_targetSchema` property placed on a link schema will, if present, be passed to [Node-Docson](https://github.com/TexKiller/node-docson) to document the schema for the response of the link. If this property is not set, the response schema will not be passed to [Node-Docson](https://github.com/TexKiller/node-docson), since `targetSchema` properties are not normally available to the theme.