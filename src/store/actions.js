import * as types from "./constants"
export const useraccount_post_registration_create = data => ({
  type: types.USERACCOUNT_POST_REGISTRATION_CREATE,
  data
})
export const useraccount_post_registration_createSucceeded = (
  response,
  starter
) => ({
  type: types.USERACCOUNT_POST_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const useraccount_post_registration_createFailed = (error, starter) => ({
  type: types.USERACCOUNT_POST_REGISTRATION_CREATE_FAILED,
  error,
  starter
})
