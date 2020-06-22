const mongoose = require('mongoose')

const Schema = mongoose.Schema
const CountrySchema = new Schema({
  flag: {
    type: String
  },
  cnName: {
    type: String
  },
  enName: {
    type: String
  },
  iso2: {
    type: String
  },
  iso3: {
    type: String
  },
  numCode: {
    type: String
  },
  phoneCode: {
    type: String
  },
  domainSuffix: {
    type: String
  }
}, { collation: 'country', versionKey: false})

module.exports = mongoose.model('country', CountrySchema)