import axios from "axios"
const userAccount = axios.create({
  baseURL: "https://tstcr2020102601-dev-14047.botics.co/rest-auth",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function useraccount_post_registration_create(action) {
  return userAccount.post(`/registration/`, null, { data: action.data })
}
export const apiService = { useraccount_post_registration_create }
