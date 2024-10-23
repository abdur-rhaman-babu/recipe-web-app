import PropTypes from "prop-types";

const Bookmark = ({ bookmark, index, handleCurrentCooking }) => {
  const { name, preparing_time, calories } = bookmark;
  return (

      <div className="mt-4 flex gap-4">
        <p>{index + 1}</p>
        <p>{name}</p>
        <p>{preparing_time} minutes</p>
        <p>{calories} calories</p>
        <button onClick={()=>handleCurrentCooking(bookmark)} className="h-full py-2 px-6 bg-green-400 rounded-badge font-bold">
          preparing
        </button>
      </div>
    
    
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleCurrentCooking:PropTypes.func.isRequired
};

export default Bookmark;
