# Delorean Timezone

Simple library for adjusting UTC values into the current user's timezone on the client-side based on their local settings.

## Usage

```javascript
var deloreanTz = require('delorean-tz')

console.log(deloreanTz.shift('2015-12-27 22:18'))
# 2015-12-28 09:18

console.log(deloreanTz.shift('2015-12-27 22:18', 'DD MMM YYYY hh:mm A'))
# 28 Dec 2015 09:18 AM

console.log(deloreanTz.getOffset())
# +1100

console.log(deloreanTz.getTimezoneName())
# Australia/Sydney
```

## Run the tests

```
$ make test
```

## Build

```
$ make build
```