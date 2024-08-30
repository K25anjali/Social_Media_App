import { useContext, useRef } from "react";
import {PostList} from "../store/Post-list-store";

const CreatePost = () => {
  const{addPost} = useContext(PostList);
  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const PostBodyElement = useRef();

const handleSubmit=(event)=>{
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle= PostTitleElement.current.value;
  const postBody = PostBodyElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split(' ');

  userIdElement.current.value= " ";
  PostTitleElement.current.value= " ";
  PostBodyElement.current.value= " ";
  reactionsElement.current.value= " ";
  tagsElement.current.value= " ";

  addPost(userId,postTitle,postBody,reactions,tags)
};



  return (
    <form className="createPost" onSubmit={handleSubmit}>

      

        <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter Your UserID here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="UserId"
          aria-describedby="emailHelp"
          placeholder="Enter UserId..."
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={PostTitleElement}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="How are you feeling today..."
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea 
          type="text"
          rows="4"
          ref={PostBodyElement}
          className="form-control"
          id="body"
          aria-describedby="emailHelp"
          placeholder="Tell us more about it..."
        />
              <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          aria-describedby="emailHelp"
          placeholder="How many people reacted to this Post"
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Tags Here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
          placeholder="Please enter your tags here"
        />
        
      </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
