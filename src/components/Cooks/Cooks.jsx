import PropTypes from "prop-types";
import Cook from "../Cook/Cook";

const Cooks = ({cooks}) => {
  
  return (
    <div className="text-center mt-6">
      <h1 className="font-bold text-2xl mb-4">Currently Cooking: {cooks.length}</h1>
      <hr />
      <div className="flex items-center justify-between gap-5 font-bold mt-4">
          <p>ID</p>
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
      
      {cooks.map((cook, index) => (
          <Cook key={cook.recipe_id} cook={cook} index={index} />
        ))}
    </div>
  );
};

Cooks.propTypes ={
    cooks: PropTypes.array.isRequired,
}

export default Cooks;
