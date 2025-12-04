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
  CHANGE_INSURANCE,
  CHANGE_DATA_CITY_FROM_COMPLETED,
  CHANGE_DATA_CITY_TO_COMPLETED,
  CHANGE_TYPE_CARGO,
  CHANGE_WEIGHT,
  CHANGE_VOLUME,
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
  ChangeInsurancePayload,
  ChangeDataCityFromCompletedPayload,
  ChangeDataCityToCompletedPayload,
  ChangeTypeCargoPayload,
  ChangeWeightPayload,
  ChangeVolumePayload,
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
  ChangeInsuranceAction,
  ChangeDataCityFromCompletedAction,
  ChangeDataCityToCompletedAction,
  ChangeTypeCargoAction,
  ChangeWeightAction,
  ChangeVolumeAction,
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

export const changeDataCityFromCompleted = (payload: ChangeDataCityFromCompletedPayload): ChangeDataCityFromCompletedAction => 
  ({ type: CHANGE_DATA_CITY_FROM_COMPLETED, payload })

export const changeDataCityToCompleted = (payload: ChangeDataCityToCompletedPayload): ChangeDataCityToCompletedAction => 
  ({ type: CHANGE_DATA_CITY_TO_COMPLETED, payload })

export const changeTypeCargo = (payload: ChangeTypeCargoPayload): ChangeTypeCargoAction => 
  ({ type: CHANGE_TYPE_CARGO, payload })

export const changeWeight = (payload: ChangeWeightPayload): ChangeWeightAction => 
  ({ type: CHANGE_WEIGHT, payload })

export const changeVolume = (payload: ChangeVolumePayload): ChangeVolumeAction => 
  ({ type: CHANGE_VOLUME, payload })