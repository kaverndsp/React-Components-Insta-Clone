/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage"
import dummydata from "./dummy-data"
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data] = useState(dummydata);
  
  return (
    <div className="App">
      <SearchBar/>
      <PostsPage post={data}/>
      
    </div>
  );
};

export default App;
