import {actionTypes} from "../action-types/app";

export interface toggleGender {
  type: actionTypes.TOGGLE_GENDER;
  payload: string;
}

export type stateType = {
  gender: string | null;
};

export type actionType = toggleGender;
