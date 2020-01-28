'use strict'
const {db, Plan} = require('./model/index')
const router = require('express').Router()



router.get('/plan', async (req,res,next) => {
  try{
    const allPlans = await Plan.findAll()
    res.json(allPlans)
  }catch (error) {
    next(error)
  }
})

// router.get('/:id', async (req,res,next) => {
//   const campusId = Number(req.params.id)
//   try{
//     const selectedCampus = await Campus.findOne({
//       where: {id: campusId},
//       include: [{model: Student, as: 'studentsAttending'}]
//     })
//     res.json(selectedCampus)
//   }catch (error) {
//     next(error)
//   }
// })

// router.post('', async (req,res,next) => {
//   try{
//     const newCampus = await Campus.create(req.body)
//     res.json(newCampus)
//   } catch(error) {
//     next(error)
//   }
// })

// router.delete('/:id', async (req,res,next) =>{
//   try{
//     Campus.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//   } catch(error) {
//     next (error)
//   }
// })


module.exports = router