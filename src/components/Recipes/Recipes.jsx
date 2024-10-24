import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleBookmark }) => {
  const [recipes, setRecipes] = useState([]);
  useState(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // const handledRemoveItem = (id) => {
  //   console.log(id)
  //   const remaining = recipes.filter((recipe) => recipe.recipe_id !== id);
  //   setRecipes(remaining);
  // };

  return (
    <div className="text-center container mx-auto">
      <div className="grid md:grid-cols-2 w-full gap-5">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe_id}
            recipe={recipe}
            handleBookmark={handleBookmark}
            // handledRemoveItem={handledRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
};

export default Recipes;
