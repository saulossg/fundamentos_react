import PropTypes from 'prop-types';

export function Post(props) {
    return (
        <div>
            <p>Post: {props.content}</p>
        </div>
    )
}

Post.propTypes = {
    content: PropTypes.string.isRequired,
};