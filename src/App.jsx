import './App.css'
import PostList from "./components/postList"
import MainHeader from './components/MainHeader';
import {useState} from "react"

function App() {

  const [isModelVisible, setisModelVisible] = useState(false);
  function closeModelHandler() {
    // console.log("click");
    setisModelVisible(false);
  }

  function showModelHandler() {
    // console.log("show click");
    setisModelVisible(true);
  }

  return (
    <>
    <MainHeader onOpenModel={showModelHandler}/>
    <PostList isPopupShowHide={isModelVisible} hideModelHandler={closeModelHandler}/>
    </>
    
  )
}

export default App;
