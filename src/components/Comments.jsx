import React from 'react'

const Comments =({video}) =>{

const comment=video.comment.map((comment)=>{
    return(
        <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.commet}</p>

        </div>

    )
return(
        <>
        </>

        )
}
)
}
export default Comment