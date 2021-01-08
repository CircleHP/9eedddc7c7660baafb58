import { GET_COUNTRY_DATA_SUCCESS, GET_COUNTRY_DATA_ERROR, GET_WEATHER_DATA_ERROR, GET_WEATHER_DATA_SUCCESS, CLEAR_DATA } from 'actions/constants';

const initialState = {
    data: null,
    weather: null,
    error: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRY_DATA_SUCCESS:
            return {
                data: action.payload,
                error: null,
            };

        case GET_WEATHER_DATA_ERROR:
        case GET_COUNTRY_DATA_ERROR:
            return {
                data: null,
                error: action.payload,
            };

        case GET_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                weather: action.payload,
            };

        case CLEAR_DATA:
            return initialState;

        default:
            return state;
    };
};