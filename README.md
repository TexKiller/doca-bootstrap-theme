# doca-bootstrap-theme (DEPRECATED)

The `doca` package for which this was written has been depreacted in favor of `@cloudflare/doca`,
in the [json-schema-tools](https://github.com/cloudflare/json-schema-tools) repository.
While `@cloudflare/doca` is conceptually the same, the back-end tools use a different
format that retains compatibility with JSON Schema, so the theme requirements are different

Also in that repository you will find a new `@cloudflare/doca-default-theme`, which is
currently only a bare-bones debugging display for the back end tools.  We will be expanding
it into a fully functional new theme, and feature requests will be handled there from now on.

----

The new `@cloudflare/doca` does not yet have a fully functioning theme, so this package
is still the produciton-ready one.  But we will be implementing feature requests on the new
code, and moving most open issues to the new repo whenever it makes sense.

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