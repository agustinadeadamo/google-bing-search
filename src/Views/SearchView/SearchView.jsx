/**
 * @desc Dependencies
 */
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

/**
 * @desc Components
 */
import Input from 'Components/Input/Input';
import Dropdown from 'Components/Dropdown/Dropdown';
import ErrorMessage from 'Components/ErrorMessage/ErrorMessage';
import Loader from 'Components/Loader/Loader';
import ResultItem from 'Components/ResultItem/ResultItem';

/**
 * @desc Utils
 */
import { SearchMode, MessageError } from 'Utils/Constants';
import { English } from 'Utils/en';

/**
 * @desc Actions
 */
import { changeSearchValue, googleSearch, bingSearch, changeOptionSelected, 
changeShowLoader, changeSearchOptions, resetBingSearch, resetGoogleSearch } from 'Actions/SearchViewActions';
import { changeShowError } from 'Actions/ErrorActions';
 
/**
 * @desc Styled Components
 */
import { ButtonPrimary } from 'Mainstyles/Components';
import { SearchViewContainer } from './style';

const SearchView = (props) => {

    // Store
    const searchOptions = useSelector(state => state.SearchViewReducer.searchOptions);
    const searchValue = useSelector(state => state.SearchViewReducer.searchValue);
    const optionSelected = useSelector(state => state.SearchViewReducer.optionSelected);
    const apiError = useSelector(state => state.SearchViewReducer.apiError);
    const showLoader = useSelector(state => state.SearchViewReducer.showLoader);
    const errorMessage = useSelector(state => state.ErrorReducer.errorMessage);
    const showError = useSelector(state => state.ErrorReducer.showError);
    const googleResults = useSelector(state => state.SearchViewReducer.googleResults);
    const bingResults = useSelector(state => state.SearchViewReducer.bingResults);
    const dispatch = useDispatch();

    // params
    let query = new URLSearchParams(props.location.search);
    let searchQuery = query.get('search');

    /**
     * Hook that is executed at first render
     */
    useEffect(() => {

        try {
            // Iterate constants
            let searchOptions = [];

            // Generate options array
            for (const key in SearchMode) {

                searchOptions.push({
                text: SearchMode[key],
                value:  SearchMode[key]
                })

            }

            // Update store with new options
            dispatch(changeSearchOptions(searchOptions));
            dispatch(changeOptionSelected(searchOptions[0].value));

        } catch(error){
            dispatch(changeShowError(MessageError.APP_ERROR));
        }

    },[])

    /**
     * Hook that is executed on first render and every time searchQuery updates
     */
    useEffect(() => {

        try {
            if(searchQuery){
                dispatch(changeSearchValue(searchQuery))
            }
        } catch(error){
            dispatch(changeShowError(MessageError.APP_ERROR))
        }

    },[searchQuery])

    /**
     * Hook that is executed on first render and every time apiError is updates
     */
    useEffect(()=> {

        try {
            // If there is an api error modifies store
            if(apiError){
                dispatch(changeShowError(MessageError.SERVER_ERROR))          
            }
        } catch(error) {
            dispatch(changeShowError(MessageError.APP_ERROR))
        }

    },[apiError])

    /**
     * Function that is executed every time value in search input is updates
     * 
     * @param {String} value 
     */
    const onChangeValue = (value) => {
        try {
            // Update store with new value
            dispatch(changeSearchValue(value))
        } catch(error){
            dispatch(changeShowError(MessageError.APP_ERROR))
        }
    }

    /**
     * Function that is executed when on click in submit button
     */
    const onClickButtonSubmit = () => {

        try {

            if(searchValue !== '') {
              
                // Modificate route
                props.history.push({
                    search: 'search=' + searchValue
                })

                // Show loader
                dispatch(changeShowLoader(true))
                .then(() => {
                    // Validate which search is being generated
                    if(optionSelected === SearchMode.GOOGLE){

                        dispatch(googleSearch(searchValue, 10))
                        dispatch(resetBingSearch())
                    }

                    if(optionSelected === SearchMode.BING){
                        dispatch(bingSearch(searchValue, 10))
                        dispatch(resetGoogleSearch())
                    }

                    if(optionSelected === SearchMode.GOOGLE_BING){
                        dispatch(googleSearch(searchValue, 5))
                        dispatch(bingSearch(searchValue, 5))
                    }

                })
            
            }

        } catch(error){
            dispatch(changeShowError(MessageError.APP_ERROR))
        }
    }

    /**
     * Function that is executed every time a new option is selected
     * 
     * @param {String} value 
     */
    const onChangeDropdownOption = (value) => {
        try {
            dispatch(changeOptionSelected(value))
        } catch(error){
            dispatch(changeShowError(MessageError.APP_ERROR))
        }

    }

    return(
    <SearchViewContainer data-testid="search-view-container">
        { showError && <ErrorMessage message={errorMessage} /> }

        { (!showError && showLoader ) && <Loader/> }

        {
            !showError &&  !showLoader &&
            (
                <>
                    <Input
                        label={English.ADD_VALUE_TO_SEARCH}
                        onChangeValue={(value) => onChangeValue(value)}
                        value={searchValue}/>

                    <Dropdown
                        label={English.SELECT_OPTION}
                        onChange={(value) => onChangeDropdownOption(value)}
                        data={searchOptions}
                        selected={optionSelected}/>
           
                    <div className="button-container">
                        <ButtonPrimary
                            onClick={() => onClickButtonSubmit()}>
                            {English.SUBMIT}
                        </ButtonPrimary>
                    </div>
        
                    {
                        bingResults && bingResults.map((bingResult) => {
                        return (
                            <ResultItem 
                                key={bingResult.id}
                                link={bingResult.displayUrl} 
                                title={bingResult.name} 
                                snippet={bingResult.snippet} 
                                redirect={bingResult.url}/>
                        )
                        })
                    }

                    {
                        googleResults && googleResults.map((googleResult) => {
                        return (
                            <ResultItem 
                                key={googleResult.cacheId}
                                link={googleResult.displayLink} 
                                title={googleResult.title} 
                                snippet={googleResult.snippet} 
                                redirect={googleResult.link}/>
                        ) 
                        })
                    }
                </>
            )
        }
    </ SearchViewContainer>
  )

};

export default SearchView;
