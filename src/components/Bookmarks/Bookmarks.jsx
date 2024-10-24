import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import Cooks from "../Cooks/Cooks";
import { useState } from "react";

const Bookmarks = ({ bookmarks, setBookmarks }) => {
  const [cooks, setCooks] = useState([]);
  const [preparingTime, setPreparingTime] = useState(0)
  const [calories, setCalories] = useState(0)

  const handleCurrentCooking = (bookmark,id,time,calorie) => {
    const newCooks = [...cooks, bookmark];
    const remaining = bookmarks.filter((bookmark)=> bookmark.recipe_id !== id)
    const newPreparingTime = preparingTime + time;
    const newCalories = calories + calorie;
    setCalories(newCalories)
    setPreparingTime(newPreparingTime)
    setCooks(newCooks);
    setBookmarks(remaining)

  };

  return (
    <div className="w-5/12 border-2 border-green-300 p-5 rounded-lg">
      <div>
        <h1 className="font-bold text-2xl mb-4">
          Want to Cook: {bookmarks.length}
        </h1>
        <hr />
        <div>
          <div className="flex items-center justify-left gap-5 font-bold mt-4">
            <p>ID</p>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
          <div>
            {bookmarks.map((bookmark, index) => (
              <Bookmark
                key={bookmark.recipe_id}
                bookmark={bookmark}
                index={index}
                handleCurrentCooking={handleCurrentCooking}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Cooks cooks = {cooks}/>
      </div>
      <div className="my-5">
            <h1 className="text-xl font-bold">Total Time: {preparingTime} minutes</h1>
            <h1 className="text-xl font-bold">Total calories: {calories} calories</h1>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  setBookmarks: PropTypes.func.isRequired
};
export default Bookmarks;
