import {atom} from 'recoil';
const oldData= localStorage.getItem('loggedinuser');

export const $authData = atom({
    key:'auth',
    default:{
        isAuth : oldData ? true :false,
        userid:oldData ? oldData.id:null
    },
})