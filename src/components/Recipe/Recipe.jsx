import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
const Recipe = ({ recipe, handleBookmark }) => {
  // console.log(recipe);
  const {
    recipe_img,
    name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div>
      <div className="border-2 h-full text-left border-green-300 shadow-lg flex flex-col justify-center items-center p-5 rounded-lg">
        <div className="w-full mb-4 h-52">
          <img className="w-full rounded-lg h-full" src={recipe_img} alt="" />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4">{name}</h3>
          <p className="text-sm font-semibold text-[#878787] mb-4">{short_description}</p>
          <hr />
          <div>
            <h3 className="text-xl font-semibold my-4">Ingredient: {ingredients.length}</h3>
            <ul className="my-5">
              {ingredients.map((ingred, i) => (
                <li key={i} className="text-[#878787]">◆ {ingred}</li>
              ))}
            </ul>
            <hr />
          </div>
          <div className="my-4 flex gap-4">
            <p className="text-[#878787] flex gap-2 items-center">
            <IoTimeOutline />{preparing_time} minute</p>
            <p className="text-[#878787] flex gap-2 items-center">
            <RiFireLine />{calories} calories</p>
          </div>
        </div>
       <div className="text-left w-full">
          <button onClick={()=>handleBookmark(recipe)} className='py-3 px-8 bg-green-400 rounded-badge font-bold'>
            Want to cook
          </button>
       </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleBookmark:PropTypes.func.isRequired
};

export default Recipe;
