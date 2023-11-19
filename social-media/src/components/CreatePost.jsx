import { useRef } from "react";

const Createpost = () => {
const userId = useRef();
const postTitle = useRef();
const postBody = useRef();
const reactions = useRef();
const tags = useRef();

  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label" >
          Enter Your UserId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label" >
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How Are You Felling Today ..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label" >
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell Us More About It..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label" >
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many Reactions."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label" >
          Enter Your Hashtags Here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="plese enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default Createpost;
