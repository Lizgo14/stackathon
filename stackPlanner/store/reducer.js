import {studentReducer, singleStudentReducer} from './studentReducer'
import {campusReducer, singleCampusReducer} from './campusReducer'
import {combineReducers} from 'redux'



const rootReducer = combineReducers({
  allStudents: studentReducer,
  selectedStudent: singleStudentReducer,
  allCampuses: campusReducer,
  selectedCampus: singleCampusReducer
  })

export default rootReducer