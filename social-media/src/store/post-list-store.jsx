import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Delhi",
    body: "dilfhfj,dhvlfdjv;fdjk;fvmkldfvkfdnkvkldfhvlkf",
    reactions: 2,
    userId: "user-3",
    tags: ["vaction", "Delhi", "Enjoying"],
  },
  {
    id: "2",
    title: "Trying hard",
    body: "dilfhfj,dhvlfdjv;fdjk;fvmkldfvkfdnkvkldfhvlkf",
    reactions: 55,
    userId: "user-2",
    tags: ["motivation", "Enjoying"],
  },
  {
    id: "3",
    title: "Just Do It",
    body: "dilfhfj,dhvlfdjv;fdjk;fvmkldfvkfdnkvkldfhvlkf",
    reactions: 88,
    userId: "user-1",
    tags: ["hardwork","successful"],
  },
];


const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {console.log(`"delted"`)};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
