const Sequelize = require('sequelize')
const db = require('./database')

const Plan = db.define('campuses', {
  planName: {
    type: Sequelize.STRING
    },
  ppp: {
    type: Sequelize.INTEGER
  },
  people: {
    type: Sequelize.INTEGER
    },
  description: {
    type: Sequelize.TEXT
  },
  selectedTags: Sequelize.ARRAY(Sequelize.STRING)
})

module.exports=Plan