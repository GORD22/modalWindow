import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        counter: 0,
        isShowDeleteForm: false
    },
    reducers: {
        setCounterUserDelete: (state) => {
            state.counter = state.counter + 1
        },
        toggleShow: (state) => {
            state.isShowDeleteForm = true
        },
        toggleUnshow: (state) => {
            state.isShowDeleteForm = false
        }
    }
});

const { actions, reducer } = userSlice;

export const {
    setCounterUserDelete,
    toggleShow,
    toggleUnshow
} = actions;

export default reducer;




/*export const setCounterUserDelete = createAction('SET_COUNTER_USER_DELETE');
export const toggleShow = createAction('TOGGLE_SHOW');
export const toggleUnshow = createAction('TOGGLE_UNSHOW')

let initialState = {
    counter: 0,
    isShowDeleteForm: false
}

const userReducer = createReducer(initialState, {
    [setCounterUserDelete]: (state) => {
        state.counter = state.counter + 1
    },
    [toggleShow]: (state) => {
        state.isShowDeleteForm = true
    },
    [toggleUnshow]: (state) => {
        state.isShowDeleteForm = false
    }
})*/

//export default userReducer;