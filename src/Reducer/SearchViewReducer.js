/**
 * @desc Actions
 */
import {
    GOOGLE_SEARCH,
    BING_SEARCH,
    CHANGE_SEARCH_VALUE,
    CHANGE_OPTION_SELECTED,
    CHANGE_SHOW_LOADER,
    CHANGE_SEARCH_OPTIONS,
    API_ERROR,
    RESET_BING_SEARCH,
    RESET_GOOGLE_SEARCH
} from "Actions/SearchViewActions";

/**
 * @desc Initial State
 */
const InitialState = {
    googleResults: [],
    bingResults: [],
    searchOptions: [],
    searchValue: '',
    optionSelected: 'google',
    showLoader: false,
    errorMessage: 'APP_ERROR',
    apiError: false
};

/**
 * @desc Reducer Reservations.
 *
 * @param { Object } state
 * @param { Object } action
 *
 * @return { Object }
 */
const ReservationsReducer = (state = InitialState, action) => {

    switch (action.type) {

        case GOOGLE_SEARCH:
            return {
                ...state,
                googleResults: action.payload
            }

        case BING_SEARCH:
            return {
                ...state,
                bingResults: action.payload
            }

        case CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }

        case CHANGE_OPTION_SELECTED:
            return {
                ...state,
                optionSelected: action.payload
            }

        case CHANGE_SHOW_LOADER:
            return{ 
                ...state,
                showLoader: action.payload
            }

        case API_ERROR:
            return {
                ...state,
                apiError: action.payload
            }

        case CHANGE_SEARCH_OPTIONS:
            return {
                ...state,
                searchOptions: action.payload
            }

        case RESET_BING_SEARCH: 
            return {
                ...state,
                bingResults: []
            }

        case RESET_GOOGLE_SEARCH: 
            return {
                ...state,
                googleResults: []
            }

        default:
            return state

    }

}

export default ReservationsReducer;
