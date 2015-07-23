# is-server-error [![Build Status](https://travis-ci.org/arthurvr/is-server-error.svg?branch=master)](https://travis-ci.org/arthurvr/is-server-error)

> Check if a number is [a HTTP server error code](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_Error)


## Install

```
$ npm install --save is-server-error
```


## Usage

```js
var isServerError = require('is-server-error');

isServerError(400);
//=> false

isServerError(500);
//=> true

isServerError(507);
//=> true
```

## Related

* [is-redirect](https://github.com/sindresorhus/is-redirect)
* [is-success](https://github.com/arthurvr/is-success)
* [is-client-error](https://github.com/arthurvr/is-client-error)


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
