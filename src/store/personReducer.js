import {ADD_PERSON,REMOVE_PERSON} from '../constants/person';
const intialState = {
    persons:[]
}

const personReducer = (state = intialState,action)=>{
    switch(action.type){
        case ADD_PERSON:
         const newPerson = {
                id:Math.random(),
                name:action.personData.name,
                age:action.personData.age
            }
            return{
                ...state,persons:state.persons.concat(newPerson)
            }
        case REMOVE_PERSON:
            
            return{
                ...state,persons:state.persons.filter(person=>person.id  !== action.personId)
            }
            
    }
    return state;
}
export default personReducer;