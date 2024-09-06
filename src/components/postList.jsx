import Post from "./Post";
import NewPost from "./NewPost"
import classes from "./postList.module.css"
import Model from "./Model"
import { useState } from "react";


function PostList( {isPopupShowHide,hideModelHandler} ) {

  // let modelContent = null;
  // if(isModelVisible){
  //   modelContent = <Model onModelHide={closeModelHandler}> 
  //   <NewPost />
  // </Model>
  // }

  const [posts, setpostsList] = useState([]);

  function postlistHandler(postData) {
    // console.log(postData);
    setpostsList((existingposts) => [postData, ...existingposts]);
    // console.log(posts);
  }

  return (
    <>
      {
        isPopupShowHide ? <Model onModelHide={hideModelHandler}> 
        <NewPost onClose={hideModelHandler} onPostlist={postlistHandler}/>
      </Model> : null
      }
      
      <ul className={classes.posts}>
        
        {
          posts.length > 0 ? posts.map((post) => <Post key={post.Body} author={post.Author} body={post.Body} />) : <h1>No Posts</h1>
        }
        {/* <Post Name="Pravallika" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
        <Post Name="Pavan" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
        <Post Name="Naveen" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
        <Post Name="Chikki" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." /> */}
      </ul>
    </>

  )
}

export default PostList;




