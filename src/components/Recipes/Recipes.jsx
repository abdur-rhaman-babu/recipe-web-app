import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useState(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
  return (
    <div className="my-24 text-center container mx-auto">
      <div className="w-2/3 mx-auto">
        <h1 className="font-bold text-3xl mb-4">Our Recipes</h1>
        <p className="text-xl text-slate-500 mb-10">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {
                recipes.map((recipe)=> <Recipe key={recipe.recipe_id} recipe = {recipe}/>)
            }
        </div>

    </div>
  );
};

export default Recipes;
