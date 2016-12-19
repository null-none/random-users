# random-users

Random users in formats json and cvs

## Install

```bash
npm install random-users
```

## Example

```javascript
_module = require('random-users'),
generateObject = _module.randomUsers.generateObject,
json = _module.randomUsers.json,
cvs = _module.randomUsers.cvs;

var object = generateObject();
console.log(json(object))
console.log(cvs(json(object)))
```

## License

MIT
