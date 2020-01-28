import { db } from './config'

export const addPlanDb = plan => {
  db.ref('/Plan').push(plan)
}

export const getPlansDb = async () => {
  
  let allPlans = []

  await db.ref('/Plan').once('value', function(snapshot){
  snapshot.forEach(data => {
    item=(data.val())
    allPlans.push(item)
    
    })

  })
  return allPlans
}