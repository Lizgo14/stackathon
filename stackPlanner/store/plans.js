import {addPlanDb} from '../db/db'
import { db } from '../db/config'


const initialState = {
  allPlans: [],
  filteredPlans:[], 
  selectedSinglePlan: {}
}
const ALL_PLANS = "ALL_PLANS"
const ADD_PLAN = "ADD_PLAN"
const SINGLE_PLAN = "SINGLE PLAN"

//ALL PLANS
const gotAllPlans = (plans) =>({
  type: ALL_PLANS,
  recievedPlans: plans
})

export const getPlans = () => {
  return async (dispatch) => {
    let plans = []
    let item
    let snapshot =await db.collection("Plan").orderBy("lastModified").get()

    snapshot.forEach(x => {
      plans.push(x.data());
    })

    // db.ref('/Plan.json').once('value', function(snapshot){
    //   snapshot.forEach(data => {
    //     item=JSON.parse(data.val())
    //     setUp={
    //       planName: item.planName,
    //       ppp: item.ppp,
    //       people: item.people,
    //       description: item.description,
    //       selectedTags: item.selectedTags
    //     }

        //.json()
        //
      console.log(plans,"PLANS")
    dispatch(gotAllPlans(plans))
  }
}

//ADD PLAN
const addedPlan = (newPlan) =>({
  type: ADD_PLAN,
  newPlan: newPlan
})

export const addPlan = (newPlan) => {
  return async (dispatch) =>{
    addPlanDb(newPlan)
    dispatch(addedPlan(newPlan))
  }
}

export const planReducer = (state = initialState, action) => {
  switch(action.type){
    case ALL_PLANS:
      return {...state, allPlans: action.recievedPlans}
    case ADD_PLAN:
      return {...state, allPlans: state.allPlans.concat([action.newPlan])}
    default:
      return state 
  }
}