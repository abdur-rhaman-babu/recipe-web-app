import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({handleBookmark}) => {
  const [recipes, setRecipes] = useState([]);
    useState(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  

  return (
    <div className="text-center container mx-auto">
      <div className="grid md:grid-cols-2 w-full gap-5">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe_id} recipe={recipe} handleBookmark = {handleBookmark} />
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes ={
  handleBookmark: PropTypes.func.isRequired
}

export default Recipes;
