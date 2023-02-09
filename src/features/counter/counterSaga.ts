import { PayloadAction } from '@reduxjs/toolkit'
import { takeEvery, takeLatest, delay, put } from 'redux-saga/effects'
import { incrementSaga, incrementSagaSuccess } from './counterSlice'

// export function* log(action: PayloadAction) {
//     console.log('Log', action)
//     // console.log(incrementSaga.toString())
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('handle increment saga')
    // console.log(action.type)

    //wait 2s
    console.log('wait 2s')

    yield delay(2000)

    console.log('wait done then dispatch')

    //dispatch
    yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
    console.log('Counter Saga')

    yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
}
