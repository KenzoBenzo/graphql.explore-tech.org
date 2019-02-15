---
path: '/materials/GraphQLviz'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'GraphQLviz'
  url: 'https://github.com/Macroz/GraphQLviz'
  github_url: 'https://github.com/Macroz/GraphQLviz'
  subscribers_count: '4'
  stargazers_count: '95'
  tags: ['']
  subtitle: 'GraphQLviz marries GraphQL (schemas) with Graphviz.'
  clone_url: 'https://github.com/Macroz/GraphQLviz.git'
  ssh_url: 'git@github.com:Macroz/GraphQLviz.git'
  pushed_at: '2017-04-25T09:12:54Z'
  updated_at: '2018-12-29T21:10:33Z'
  author:
    name: 'Macroz'
    avatar: 'https://avatars1.githubusercontent.com/u/823661?v=4'
    github_url: 'https://github.com/Macroz'
  latestRelease:
    tag_name: 'v0.5.0'
    name: ''
    url: 'https://github.com/Macroz/GraphQLviz/releases/tag/v0.5.0'
    created_at: '2017-04-25T09:03:05Z'
---
# GraphQLviz [![Build Status](https://travis-ci.org/Macroz/GraphQLviz.svg?branch=master)](https://travis-ci.org/Macroz/GraphQLViz)

GraphQLviz marries GraphQL (schemas) with Graphviz.

It's a tool to show you what your schema really looks like. At the moment, it's mostly useful as a complement to [GraphiQL](https://github.com/graphql/graphiql), like printing a huge poster size version to facilitate team discussions.

## Quick Usage

Requires [Graphviz](http://www.graphviz.org) and [Java Virtual Machine](http://openjdk.java.net/).

There is a convenient uberjar release available to download from the [release page](https://github.com/Macroz/GraphQLviz/releases).

Once you have Graphviz, Java and the uberjar, then you can use GraphQLviz like a regular Java app like so:

```
java -jar graphqlviz.jar https://api.digitransit.fi/routing/v1/routers/finland/index/graphql digitransit
```

[Example schema](examples/digitransit.json?raw=true) (from [Digitransit](http://digitransit.fi))

![Example graph](https://rawgit.com/Macroz/GraphQLviz/master/examples/digitransit.svg)

Run `java -jar graphqlviz.jar --help` for more options or read the Full Usage.

## Full Usage

You must have Graphviz executable from command-line. Download and install it using your package manager or go to [Graphviz](http://www.graphviz.org).

You also need [Leiningen](http://leiningen.org). Leiningen is the [Clojure](http://clojure.org) build tool that runs on the Java Virtual Machine. This means you also need Java.

If you like to use Leiningen, you can run like this:
```
lein run https://api.digitransit.fi/routing/v1/routers/finland/index/graphql digitransit
```

There is a prepackaged jar in [Clojars](https://clojars.org/macroz/graphqlviz) so you don't have to build GraphQLviz yourself.

Also there is a convenient uberjar release available to download from the [release page](https://github.com/Macroz/GraphQLviz/releases).

With these JAR files you can run like this:

```
java -jar graphqlviz.jar https://api.digitransit.fi/routing/v1/routers/finland/index/graphql digitransit
```

If you want to use the code from Clojure, perhaps from your own program, add to your project.clj:

[![Clojars Project](http://clojars.org/macroz/graphqlviz/latest-version.svg)](http://clojars.org/macroz/graphqlviz)

### Separate introspection

Instead of running against a live GraphQL server, you can use a downloaded result of an introspection query like this:

```
java -jar graphqlviz.jar examples/digitransit.json digitransit
```

Otherwise, in the case of a URL, the introspection query is executed against the GraphQL endpoint and the results visualized.

### Authentication

Since 0.4.0, you can pass options for authenticating with the server for the introspection query (`-a` or `--auth`).

The supported authentication types are `basic`, `digest` (with user and password) as well as `oauth2` (with oauth token) See also `-h` for help.

```
java -jar graphqlviz.jar http://secret.example.com/graphql secret-schema-name -abasic -utester -ppassword
```

Or with password prompt `-pp` or `--password-prompt` (since 0.5.0).

```
java -jar graphqlviz.jar http://secret.example.com/graphql secret-schema-name -abasic -utester --password-prompt
```

## Backlog

- Use dynamic graph features as in [archi](https://github.com/Macroz/archi)
- Develop a complete JavaScript solution of the same idea

## License

Copyright © 2015-2017 Markku Rontu

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
