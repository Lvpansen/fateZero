const Country_col = require('../models/country')

const addCountry = (ctx, next) => {
  const req = ctx.request.body
  console.log(req)
} 
const updateCountry = (ctx, next) => {
  const req = ctx.request.body
} 

module.exports = {
  addCountry,
  updateCountry
}