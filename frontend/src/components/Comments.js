// import Swal from 'sweetalert2'
import {  useState, useRef } from "react"
import { connect } from 'react-redux'
import commentsActions from "../redux/actions/itinerariesActions"
import Comment from "./Comment"

const Comments = (props) => {

    const [allComments, setAllComments] = useState (props.comments)   
    const inputHandler = useRef()

    const addNewComment = () => {
        let textValue = inputHandler.current.value
        props.addComment(props.itineraryId, textValue, props.token)
        .then(res=>setAllComments(res.response))
        .catch(error=>console.log(error))
    }

    const deleteComment = (itineraryId, commentId, token) =>  {
        props.deleteComment(itineraryId, commentId, token)
        .then(res=>{
            if (res.success) {
                setAllComments(allComments.filter(comment=>comment._id !== commentId))
            } else {
                throw new Error
            }   
        })
        .catch (error =>console.log(error))
    }
    
    return (
        <>
            <h4>Comments</h4>
            
                <div className="comments">
                
                    {
                        allComments.map((comment)=><Comment key={comment._id} newComment={comment} delete={deleteComment} itineraryId={props.itineraryId}/>
                        )
                    }
                </div>
               <div className="commentInputContainer"> 
                    <input type="text" className="commentsInputs" ref={inputHandler} name="comment"/>
                   
                
             
              <button className="sendComment" onClick={addNewComment}>Send</button>
       </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      token: state.users.token
    }   
}

const mapDispatchToProps = {
    addComment: commentsActions.addComment,
    editComment: commentsActions.editComment,
    deleteComment: commentsActions.deleteComment

}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)



// const Comments = (props) => {
//     const { Comments, token} = props
//     const {Itineraries, firstName, src} = Comments
//     // const [comments, setComments] = useState ([])
//     const [newComment, setNewComment] = useState ({
//         firstName: firstName,
//         src: src,
//         comment:"",
//         token: token,
//         idItinerary: Itineraries._id,
//     })


//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//     })

//     const inputHandler = (e) => {
//         setNewComment({
//             ...newComment,
//             [e.target.name]: e.target.value
//         })
//     }

//     const addComment = () => {
//         if (newComment.comment.length === 0) {
//             Toast.fire({
//                 icon: 'error',
//                 title: 'You have to write something to post a comment'
//               })
//         } else if (props.token){
//             props.addComment(newComment, Itineraries._id)
//             .then((response) => {
//               if (response.data.success) {
//                 // setComments(newComment.response)
//                 console.log(response)
//               } 
//             })
//             .catch((error) => {
//                 console.log(error)
//             Toast.fire({
//                 icon: 'error',
//                 title: 'Something went wrong!'
//               })
//             })   
//         }
//     }

//     console.log(newComment)

//     return (
//         <>
//             <h4>Comments</h4>
//             <div className="comments">
//                 {/* {comments.map((comment, index) => {
//                     return (
//                         <div className="newComment" key={index}>
//                              <div style={{backgroundImage: `url("${comment.src}")` }}></div>  
//                              <h4>{comment.firstName}</h4> 
//                         </div>
//                     )
//                 })
//                 } */}
                
//             </div>
//             <div className="commentInputContainer">
//                 <input type="text" className="commentsInputs" onChange={inputHandler} name="comment"/>
//                 <button className="sendComment" onClick={addComment}>Send</button>
//             </div>
            
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//       token: state.users.token
//     }   
// }

// const mapDispatchToProps = {
//     addComment: commentsActions.addComment,

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Comments) 