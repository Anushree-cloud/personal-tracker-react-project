import PropTypes from 'prop-types'

const Button = ({color, text, onclick}) => {
    

    return (
        <button 
            onClick={onclick} 
            style={{ backgroundColor: color }} 
            className="btn">{text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func.isRequired,
}

export default Button
