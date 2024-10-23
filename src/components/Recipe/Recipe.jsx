import PropTypes from "prop-types";

const Recipe = ({ recipe }) => {
  console.log(recipe);
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
      <div className="border-2 border-red-500 flex flex-col justify-center items-center p-5 rounded-lg">
        <div className="w-full mb-4">
        <img className="w-full h-52" src={recipe_img} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{short_description}</p>

        <div>
          <h3>Ingredient: {ingredients.length}</h3>
          <ul>
            {ingredients.map((ingred, i) => (
              <li key={i}>{ingred}</li>
            ))}
          </ul>
        </div>
        <div>
        <p>{preparing_time}</p>
        <p>{calories}</p>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
