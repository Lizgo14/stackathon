import { db } from './config'
const testPlan ={
  planName: 'Cafe Cortadito',
  ppp: 45,
  people:15,
  description: 'A 1.5 hour brunch with unlimited mimosas and food included',
  selectedTags: ["birthday", "brunch", "boozybrunch"]
}
export const addPlanDb = plan => {
  db.ref('/Plan').push(plan)
}