import PropTypes from 'prop-types';

export function Post(props) {
    return (
        <div>
            <strong>Author: {props.author}</strong><br/>
            <strong>Content: {props.content}</strong>
        </div>
    )
}

Post.propTypes = {
    author: PropTypes.author,
    content: PropTypes.string.isRequired,
};