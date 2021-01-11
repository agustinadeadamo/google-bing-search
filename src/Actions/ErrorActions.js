/**
 * @desc Actions
 */
export const ERROR = "ERROR";
export const HIDE_ERROR = "HIDE_ERROR";

/**
 * @desc Shows error message
 *
 * @param { Boolean } payload
 *
 * @return { Object }
 */
export const changeShowError = payload => ({
    type: ERROR,
    payload: payload
});

/**
 * @desc Hides error message
 *
 * @param { Boolean } payload
 *
 * @return { Object }
 */
export const hideError = payload => ({
    type: HIDE_ERROR,
    payload: payload
});