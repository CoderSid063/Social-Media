import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching:false,
  deletePost: () => {},
});

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Delhi",
//     body: "dilfhfj,dhvlfdjv;fdjk;fvmkldfvkfdnkvkldfhvlkf",
//     reactions: 2,
//     userId: "user-3",
//     tags: ["vaction", "Delhi", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Trying hard",
//     body: "dilfhfj,dhvlfdjv;fdjk;fvmkldfvkfdnkvkldfhvlkf",
//     reactions: 55,
//     userId: "user-2",
//     tags: ["motivation", "Enjoying"],
//   },
//   {
//     id: "3",
//     title: "Just Do It",
//     body: "dilfhfj,dhvlfdjv;fdjk;fvmkldfvkfdnkvkldfhvlkf",
//     reactions: 88,
//     userId: "user-1",
//     tags: ["hardwork", "successful"],
//   },
// ];

const postListReducer = (currPostList, action) => {
  let newPostLIst = currPostList;
  if (action.type === "DELETE_POST") {
    newPostLIst = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostLIst = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostLIst = [action.payload, ...currPostList];
  }
  return newPostLIst;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
    // DEFAULT_POST_LIST
  );

  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{ postList,fetching, addPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
