import * as types from './../type/message';

export const toggleAction = () => ({
    type : types.TOGGLE_ON_CLICK
})

export const myAction = () => ({
    type : types.MY_ACTION
})

export const handleUpdate = (value, path) => ({
    type : types.HANDLE_UPDATE,
    value, 
    path
})