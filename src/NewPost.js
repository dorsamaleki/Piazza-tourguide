import React from "react";

export const NewPost = (props) => {
  return (
    <div>
      <form>
        <label>
          <input type="radio" value="option1" checked={true} />
          Question
        </label>
        <label>
          <input type="radio" value="option1" checked={true} />
          Poll
        </label>
        <label>
          <input type="radio" value="option1" checked={true} />
          Note
        </label>
      </form>
      <div>hhooo</div>
    </div>
  );
};
