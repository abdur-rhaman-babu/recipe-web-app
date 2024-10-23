import PropTypes from "prop-types";


const Cook = ({cook,index}) => {
    const {name, preparing_time, calories} = cook;
    return (
        <div>
            <div className="mt-4 flex gap-4">
        <p>{index + 1}</p>
        <p>{name}</p>
        <p>{preparing_time} minutes</p>
        <p>{calories} calories</p>
      </div>
        </div>
    );
};

Cook.propTypes ={
    cook: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default Cook;