var convert = require('convert-json-csv'),
    json2csv = convert.json2csv;
var Chance = require('chance'),
    chance = new Chance();

exports.randomUsers = {
    generateObject: function() {
        return {
            'zipcode': chance.zip(),
            'first': chance.first(),
            'last': chance.last(),
            'last': chance.last(),
            'avatar': chance.avatar(),
            'domain': chance.domain(),
            'email': chance.email(),
            'ip': chance.ip(),
            'url': chance.url(),
            'twitter': chance.twitter(),
            'gender': chance.gender(),
            'birthday': chance.birthday(),
            'address': chance.address(),
            'city': chance.city(),
            'coordinates': chance.coordinates(),
            'country': chance.country(),
            'phone': chance.phone(),
            'state': chance.state({
                full: true
            }),
            'street': chance.street(),
            'cc': chance.cc(),
            'cc_type': chance.cc_type(),
            'currency': chance.currency(),
            'exp': chance.exp(),
            'exp_month': chance.exp_month(),
            'exp_year': chance.exp_year(),
            'paragraph': chance.paragraph(),
            'sentence': chance.sentence({
                words: 5
            }),
            'syllable': chance.syllable(),
            'word': chance.word(),
        }
    },
    json: function(object) {
      return JSON.stringify([object]);
    },
    cvs: function(object) {
      return json2csv(object);
    }

};
