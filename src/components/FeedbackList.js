import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback}) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback to show</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

//remember you can also specify the shape of the array (what properties are inside) and their proptypes as well
FeedbackList.propTypes = {
    feedback: PropTypes.array,
}

export default FeedbackList
