import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* useraccount_post_registration_createWorker(action) {
  try {
    const result = yield call(
      apiService.useraccount_post_registration_create,
      action
    )
    yield put(
      actions.useraccount_post_registration_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.useraccount_post_registration_createFailed(err, action))
  }
}
function* useraccount_post_registration_createWatcher() {
  yield takeEvery(
    types.USERACCOUNT_POST_REGISTRATION_CREATE,
    useraccount_post_registration_createWorker
  )
}
export default function* rootSaga() {
  const sagas = [useraccount_post_registration_createWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
