/**
 * @desc Dependencies
 */
import logger from 'redux-logger';
import thunk from 'redux-thunk';

/**
 * @desc Middlewares
 */
export default (() => {
    /**
     * @desc Indicates enviroment.
     */
    const isDevelopment = process.env.NODE_ENV === 'development';

    const Middlewares = [thunk];

    // Development middleware
    if (isDevelopment) {
        // Redux logger.
        Middlewares.push(logger);
    }

    return Middlewares;
})();
