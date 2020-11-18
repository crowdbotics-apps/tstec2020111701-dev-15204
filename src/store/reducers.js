import * as types from "./constants"

const initialState = { userAccount: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.USERACCOUNT_POST_REGISTRATION_CREATE:
    case types.USERACCOUNT_POST_REGISTRATION_CREATE_SUCCEEDED:
    case types.USERACCOUNT_POST_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        userAccount: [...state.userAccount, action.response]
      })
    default:
      return state
  }
}
