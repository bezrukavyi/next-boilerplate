import { select } from 'redux-saga/effects'

export const current = (state) => state.user
export const accessHeaders = (state) => current(state).headers
