import axios from 'axios';
import admin from '../admin';
import cc from '../cc';
import cod from '../cod';

//const API_KEY='90e9f1c505f999f7f7c29cbb15da998b';
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_CC = 'FETCH_CC';
export const FETCH_ADMIN = 'FETCH_ADMIN';
export const FETCH_COD = 'FETCH_COD';

export function fetchCC(){
    return {
        type: FETCH_CC,
        payload: cc
    };
}

export function fetchAdmin(){
    return {
        type: FETCH_ADMIN,
        payload: admin
    };
}
export function fetchCOD() {
    return {
        type: FETCH_COD,
        payload: cod
    };
}   
