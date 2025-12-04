import { 
  CHANGE_CITY_FROM, 
  CHANGE_CITY_TO, 
  CHANGE_DATE_COLLECTION, 
  CHANGE_DELIVERY_METHOD, 
  CHANGE_SPEED, 
  CHANGE_MOVERS, 
  CHANGE_FLOOR,
  CHANGE_ELEVATOR,
  CHANGE_CARGO_COST,
  CHANGE_INSURANCE 
} from "./constants"
import type { Reducer } from 'redux';
import type { FormState } from './types';
import { InitialState } from './types';
import type { FormActionTypes } from './types';

export const formReducer: Reducer<FormState, FormActionTypes> = (
  state = InitialState,
  action
) => {
  switch (action.type) {
    case CHANGE_CITY_FROM: 
      return {
        ...state,
        cityFrom: action.payload.cityFrom
      }
    case CHANGE_CITY_TO: 
      return {
        ...state,
        cityTo: action.payload.cityTo
      }
    case CHANGE_DATE_COLLECTION: 
      return {
        ...state,
        dateCollection: action.payload.dateCollection
      }
    case CHANGE_DELIVERY_METHOD: 
      return {
        ...state,
        deliveryMethod: action.payload.deliveryMethod
      }
    case CHANGE_SPEED: 
      return {
        ...state,
        speed: action.payload.speed
      }
    case CHANGE_MOVERS: 
      return {
        ...state,
        movers: action.payload.movers
      }
    case CHANGE_FLOOR: 
      return {
        ...state,
        floor: action.payload.floor
      }
    case CHANGE_ELEVATOR: 
      return {
        ...state,
        elevator: action.payload.elevator
      }
    case CHANGE_CARGO_COST: 
      return {
        ...state,
        cargoCost: action.payload.cargoCost
      }
    case CHANGE_INSURANCE: 
      return {
        ...state,
        insurance: action.payload.insurance
      }
    default: 
      return state
  }
}