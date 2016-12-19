var should = require('chai').should(),
    _module = require('../random-users'),
    generateObject = _module.randomUsers.generateObject,
    json = _module.randomUsers.json,
    cvs = _module.randomUsers.cvs;

var object = generateObject();

describe('generate object', function() {
    it('generate object', function() {
      should.exist(object)
    });
});

describe('json format', function() {
    it('json format', function() {
      should.exist(json(object))
    });
});

describe('cvs format', function() {
    it('cvs format', function() {
      should.exist(cvs(json(object)))
    });
});
