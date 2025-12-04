import { 
  CHANGE_CITY_TO, 
  CHANGE_CITY_FROM, 
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

export interface FormState {
  cityFrom: string | null;
  cityTo: string | null;
  dateCollection: string;
  deliveryMethod: string;
  speed: 'urgent' | 'economy' | 'express' | null;
  movers: boolean;
  floor?: number | null;
  elevator?: boolean;
  cargoCost: number | null;
  insurance: boolean;
  dataCityFromCompleted: boolean;
  dataCityToCompleted: boolean;
  typeCargo: string | null;
  weight: string | null;
  volume: string | null;
}

export const InitialState: FormState = {
  cityFrom: null,
  cityTo: null,
  dateCollection: '05.12.2025',
  deliveryMethod: 'pickup',
  speed: null,
  movers: false,
  cargoCost: null,
  insurance: true,
  dataCityFromCompleted: false,
  dataCityToCompleted: false,
  typeCargo: 'Медицинская мебель',
  weight: '',
  volume: '',
}

export interface ChangeCityFromPayload {
  cityFrom: string | null;
}
export interface ChangeCityToPayload {
  cityTo: string | null;
}
export interface ChangeDateCollectionPayload {
  dateCollection: string;
}
export interface ChangeDeliveryMethodPayload {
  deliveryMethod: string;
}
export interface ChangeSpeedPayload {
  speed: 'urgent' | 'economy' | 'express' | null;
}
export interface ChangeMoversPayload {
  movers: boolean;
}
export interface ChangeFloorPayload {
  floor: number | null;
}
export interface ChangeElevatorPayload {
  elevator: boolean;
}
export interface ChangeCargoCostPayload {
  cargoCost: number | null;
}
export interface ChangeInsurancePayload {
  insurance: boolean;
}

export interface ChangeDataCityFromCompletedPayload {
  dataCityFromCompleted: boolean;
}

export interface ChangeDataCityToCompletedPayload {
  dataCityToCompleted: boolean;
}

export interface ChangeTypeCargoPayload {
  typeCargo: string;
}

export interface ChangeWeightPayload {
  weight: string;
}

export interface ChangeVolumePayload {
  volume: string;
}



export interface ChangeWeightAction {
  type: typeof CHANGE_WEIGHT;
  payload: ChangeWeightPayload;
}

export interface ChangeVolumeAction {
  type: typeof CHANGE_VOLUME;
  payload: ChangeVolumePayload;
}

export interface ChangeTypeCargoAction {
  type: typeof CHANGE_TYPE_CARGO;
  payload: ChangeTypeCargoPayload;
}

export interface ChangeDataCityToCompletedAction {
  type: typeof CHANGE_DATA_CITY_TO_COMPLETED;
  payload: ChangeDataCityToCompletedPayload;
}

export interface ChangeDataCityFromCompletedAction {
  type: typeof CHANGE_DATA_CITY_FROM_COMPLETED;
  payload: ChangeDataCityFromCompletedPayload;
}

export interface ChangeCityFromAction {
  type: typeof CHANGE_CITY_FROM;
  payload: ChangeCityFromPayload;
}
export interface ChangeCityToAction {
  type: typeof CHANGE_CITY_TO;
  payload: ChangeCityToPayload;
}
export interface ChangeDateCollectionAction {
  type: typeof CHANGE_DATE_COLLECTION;
  payload: ChangeDateCollectionPayload;
}
export interface ChangeDeliveryMethodAction {
  type: typeof CHANGE_DELIVERY_METHOD;
  payload: ChangeDeliveryMethodPayload;
}
export interface ChangeSpeedAction {
  type: typeof CHANGE_SPEED;
  payload: ChangeSpeedPayload;
}
export interface ChangeMoversAction {
  type: typeof CHANGE_MOVERS;
  payload: ChangeMoversPayload;
}
export interface ChangeFloorAction {
  type: typeof CHANGE_FLOOR;
  payload: ChangeFloorPayload;
}
export interface ChangeElevatorAction {
  type: typeof CHANGE_ELEVATOR;
  payload: ChangeElevatorPayload;
}
export interface ChangeCargoCostAction {
  type: typeof CHANGE_CARGO_COST;
  payload: ChangeCargoCostPayload;
}
export interface ChangeInsuranceAction {
  type: typeof CHANGE_INSURANCE;
  payload: ChangeInsurancePayload;
}

export type FormActionTypes = 
  | ChangeCityFromAction 
  | ChangeCityToAction 
  | ChangeDateCollectionAction 
  | ChangeDeliveryMethodAction 
  | ChangeSpeedAction 
  | ChangeMoversAction 
  | ChangeFloorAction 
  | ChangeElevatorAction 
  | ChangeCargoCostAction 
  | ChangeInsuranceAction
  | ChangeDataCityFromCompletedAction
  | ChangeTypeCargoAction
  | ChangeWeightAction
  | ChangeVolumeAction
  | ChangeDataCityToCompletedAction;