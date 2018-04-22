import Api from 'store/Api/actions'

export const vaildateToken = (context) => () => Api.get(context)({ path: 'auth/validate_token' })

export const signIn = (data) => Api.post({})({ path: 'auth/sign_in', data })

export const signUp = (data) => Api.post({})({ path: 'auth', data })

export const forgotPassword = (data) => Api.post({})({ path: 'auth/password', data })

export const updatePassword = (data) => Api.patch({})({ path: 'auth/password', data })
