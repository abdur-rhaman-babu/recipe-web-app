import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <div className="w-1/3 border-2 border-green-300 p-5 rounded-lg">
      <h1 className="font-bold text-2xl mb-4">
        Want to Cook:{bookmarks.length}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default Bookmarks;
