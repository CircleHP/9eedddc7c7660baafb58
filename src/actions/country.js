import { GET_COUNTRY_DATA_SUCCESS, GET_COUNTRY_DATA_ERROR, GET_WEATHER_DATA_SUCCESS, GET_WEATHER_DATA_ERROR } from './constants';

const accesKey = '7e18be6f8eeada887513c05daf115648';

export const getCountry = (country) => {
    return (dispatch) => {
        return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_COUNTRY_DATA_SUCCESS, payload: data}))
            .catch((error) => dispatch({type: GET_COUNTRY_DATA_ERROR, payload: error}))
    };
};

export const getWeather = (city) => {
    return (dispatch) => {
        return fetch(`http://api.weatherstack.com/current?access_key=${accesKey}&query=${city}`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: GET_WEATHER_DATA_SUCCESS, payload: data}))
            .catch((error) => dispatch({ type: GET_WEATHER_DATA_ERROR, payload: error}));
    };
};
