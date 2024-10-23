import { useState } from "react";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (recipe) => {
    const newBookmark = [...bookmarks, recipe];
    if ( bookmarks.indexOf(recipe) === -1 ){
      setBookmarks(newBookmark);
    }else{
      alert('already exsist')
    }
  };

  return (
    <div>
        <Header/>
        <Banner/>
     
        <div>
        <div className="w-2/3 mx-auto text-center my-10">
        <h1 className="font-bold text-3xl mb-4">Our Recipes</h1>
        <p className="text-xl text-slate-500 mb-10">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
        <div className="max-w-7xl mx-auto md:flex justify-center gap-10">
            <Recipes  handleBookmark = {handleBookmark}/>
            <Bookmarks bookmarks = {bookmarks}/>
        </div>
        </div>
    </div>
  );
};

export default App;