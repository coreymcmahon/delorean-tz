# Delorean Timezone

Simple library for adjusting UTC values into the current user's timezone on the client-side based on their local settings.

## Usage

```
var deloreanTz = require('delorean-tz')
console.log(deloreanTz.shift('2015-12-27 22:18'))

# 2015-12-28 09:18
```
