import { PayloadAction } from '@reduxjs/toolkit'
import { takeEvery } from 'redux-saga/effects'

export function* log(action: PayloadAction) {
    console.log('Log', action)
}

export default function* counterSaga() {
    console.log('Counter Saga')

    yield takeEvery('*', log)
}
