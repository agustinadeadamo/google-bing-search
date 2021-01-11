/**
 * @desc Dependencies
 */
import axios from 'axios'

/**
 * @desc Utils
 */
import { Apikeys, Endpoints } from 'Utils/Constants';

/**
 * @desc Actions
 */
export const GOOGLE_SEARCH = "GOOGLE_SEARCH";
export const BING_SEARCH = "BING_SEARCH";
export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";
export const CHANGE_OPTION_SELECTED = "CHANGE_OPTION_SELECTED";
export const CHANGE_SHOW_LOADER = "CHANGE_SHOW_LOADER";
export const API_ERROR = "API_ERROR";
export const CHANGE_SEARCH_OPTIONS = "CHANGE_SEARCH_OPTIONS";
export const RESET_GOOGLE_SEARCH = "RESET_GOOGLE_SEARCH";
export const RESET_BING_SEARCH = "RESET_BING_SEARCH";

/**
 * @desc Modifies search input value
 *
 * @param { String } payload
 *
 * @return { Object }
 */
export const changeSearchValue = payload => ({
    type: CHANGE_SEARCH_VALUE,
    payload: payload
});

/**
 * @desc Shows or hides loader
 *
 * @param { Boolean } paylpad
 *
 * @return { <Promise> }
 */
export const changeShowLoader = (payload) => (dispatch, getState) => {  
    dispatch ({
        type: 'CHANGE_SHOW_LOADER',
        payload,
    });
    return Promise.resolve(getState());
}

/**
 * @desc Modifies search dropdown options
 *
 * @param { Array } payload
 *
 * @return { Object }
 */
export const changeSearchOptions = (payload) => ({  
    type: 'CHANGE_SEARCH_OPTIONS',
    payload,
})

/**
 * @desc Resets bing's results to empty array
 *
 * @return { Object }
 */
export const resetBingSearch = () => ({  
    type: 'RESET_BING_SEARCH',
})

/**
 * @desc Resets bing's results to empty array
 *
 * @return { Object }
 */
export const resetGoogleSearch = () => ({  
    type: 'RESET_GOOGLE_SEARCH',
})

/**
 * @desc Modifies dropdown option selected
 *
 * @param { String } payload
 *
 * @return { Object }
 */
export const changeOptionSelected = payload => ({
    type: CHANGE_OPTION_SELECTED,
    payload: payload
});

/**
 * @desc Makes google search request
 *
 * @param { String } searchValue
 * 
 * @param { String } count
 *
 */
export const googleSearch = (searchValue, count) => {

    return (dispatch) => {
        axios.get(`${Endpoints.GOOGLE_SEARCH}?key=${Apikeys.GOOGLE_KEY}&cx=${Apikeys.GOOGLE_CX}&q=${searchValue}&count=${count}`)
        .then((response) => {

            if(response.hasOwnProperty('data') && response.data.hasOwnProperty('items')) {

                dispatch( {
                    type: GOOGLE_SEARCH,
                    payload: response.data.items
                })
                dispatch({
                    type: CHANGE_SHOW_LOADER,
                    payload: false
                })
                
            }
        
        })
        .catch(() => {

            dispatch({
                type: API_ERROR,
                payload: true,
            })
            dispatch({
                type: CHANGE_SHOW_LOADER,
                payload: false
            })
        
        })
    }
}

/**
 * @desc Makes google search request
 *
 * @param { String } searchValue
 *
 * @return { Object }
 * 
 * @param { String } count
 * 
 */
export const bingSearch = (searchValue, count) => {
    return (dispatch) => {
        axios.get(`${Endpoints.BING_SEARCH}?q=${searchValue}&count=${count}&responseFilter=Webpages`, {headers: {'Ocp-Apim-Subscription-Key': Apikeys.BING_KEY}})
        .then((response) => {

            if(response.hasOwnProperty('data') && response.data.hasOwnProperty('webPages') && response.data.webPages.hasOwnProperty('value')) {

                dispatch( {
                    type: BING_SEARCH,
                    payload: response?.data?.webPages?.value
                })
                dispatch({
                    type: CHANGE_SHOW_LOADER,
                    payload: false
                })
            
            }

        })
        .catch(() => {

            dispatch({
                type: API_ERROR,
                payload: true,
            })
            dispatch({
                type: CHANGE_SHOW_LOADER,
                payload: false
            })
        
        })
    }
}


