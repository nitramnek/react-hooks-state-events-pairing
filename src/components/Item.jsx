import React from "react";
function Item({video}){ 
    // Distractured

return(
    
    
    <>
          <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
       <h2>{video.title}</h2>
       <h3>{video.views}</h3>
       <p>{video.createdAt}</p>
       <p>{video.downvotes}</p>
       {video.comments.map((comment)=>{
        return(
          <div key={comment.id}> 
            <h3>{comment.user}</h3>
            <h5>{comment.comment}</h5>
          </div>
        )
       })}

      <button>Dislike</button>
      <button></button>

    </>

)
}
export default Item;