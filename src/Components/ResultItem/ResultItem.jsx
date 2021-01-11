/**
 * @desc Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc Styled Component
 */
import { ResultItemComponent } from './style';

const ResultItem = (props) => {

    // Destructuring props
    let {
        title,
        link,
        url,
        snippet
    } = props;

    return (
        <ResultItemComponent data-testid="result">
            <p data-testid="link" className="link">{link}</p>
            <a data-testid="title" className="title" href={url} >{title}</a>
            <p data-testid="snippet" className="snippet">{snippet}</p>
        </ResultItemComponent>
    )

}

ResultItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
  };
  
ResultItem.defaultProps = {
    title: '',
    link: '',
    url: '',
    snippet: '',
};

export default ResultItem;