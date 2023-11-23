import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Siderbar";
import Createpost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header/>
          {selectedTab === "Home" ? <PostList/> : <Createpost />}
          <Footer/>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
