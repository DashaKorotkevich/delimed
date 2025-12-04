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

import type { 
  ChangeCityFromPayload, 
  ChangeCityToPayload, 
  ChangeDateCollectionPayload, 
  ChangeDeliveryMethodPayload, 
  ChangeSpeedPayload, 
  ChangeMoversPayload, 
  ChangeFloorPayload,
  ChangeElevatorPayload,
  ChangeCargoCostPayload,
  ChangeInsurancePayload 
} from './types'

import type { 
  ChangeCityFromAction, 
  ChangeCityToAction, 
  ChangeDateCollectionAction, 
  ChangeDeliveryMethodAction, 
  ChangeSpeedAction, 
  ChangeMoversAction, 
  ChangeFloorAction,
  ChangeElevatorAction,
  ChangeCargoCostAction,
  ChangeInsuranceAction 
} from './types'

export const changeCityFrom = (payload: ChangeCityFromPayload): ChangeCityFromAction => 
  ({ type: CHANGE_CITY_FROM, payload })

export const changeCityTo = (payload: ChangeCityToPayload): ChangeCityToAction => 
  ({ type: CHANGE_CITY_TO, payload })

export const changeDateCollection = (payload: ChangeDateCollectionPayload): ChangeDateCollectionAction => 
  ({ type: CHANGE_DATE_COLLECTION, payload })

export const changeDeliveryMethod = (payload: ChangeDeliveryMethodPayload): ChangeDeliveryMethodAction => 
  ({ type: CHANGE_DELIVERY_METHOD, payload })

export const changeSpeed = (payload: ChangeSpeedPayload): ChangeSpeedAction => 
  ({ type: CHANGE_SPEED, payload })

export const changeMovers = (payload: ChangeMoversPayload): ChangeMoversAction => 
  ({ type: CHANGE_MOVERS, payload })

export const changeFloor = (payload: ChangeFloorPayload): ChangeFloorAction => 
  ({ type: CHANGE_FLOOR, payload })

export const changeElevator = (payload: ChangeElevatorPayload): ChangeElevatorAction => 
  ({ type: CHANGE_ELEVATOR, payload })

export const changeCargoCost = (payload: ChangeCargoCostPayload): ChangeCargoCostAction => 
  ({ type: CHANGE_CARGO_COST, payload })

export const changeInsurance = (payload: ChangeInsurancePayload): ChangeInsuranceAction => 
  ({ type: CHANGE_INSURANCE, payload })