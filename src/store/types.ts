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
  CHANGE_INSURANCE
} from "./constants"

export interface FormState {
  cityFrom: string | null;
  cityTo: string | null;
  dateCollection: Date | null;
  deliveryMethod: 'pickup' | 'door';
  speed: 'urgent' | 'economy' | 'express' | null;
  movers: boolean;
  floor?: number | null;
  elevator?: boolean;
  cargoCost: number | null;
  insurance: boolean;
}

export const InitialState: FormState = {
  cityFrom: null,
  cityTo: null,
  dateCollection: null,
  deliveryMethod: 'pickup',
  speed: null,
  movers: false,
  cargoCost: null,
  insurance: true,
}

export interface ChangeCityFromPayload {
  cityFrom: string | null;
}
export interface ChangeCityToPayload {
  cityTo: string | null;
}
export interface ChangeDateCollectionPayload {
  dateCollection: Date | null;
}
export interface ChangeDeliveryMethodPayload {
  deliveryMethod: 'pickup' | 'door';
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
  | ChangeInsuranceAction;