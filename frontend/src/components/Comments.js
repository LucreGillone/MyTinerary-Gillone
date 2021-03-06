// import Swal from 'sweetalert2'
import {  useState, useRef } from "react"
import { connect } from 'react-redux'
import commentsActions from "../redux/actions/itinerariesActions"
import Comment from "./Comment"

const Comments = (props) => {

    const [allComments, setAllComments] = useState (props.comments)
    const [update, setUpdate] = useState (false)
    const inputHandler = useRef()

    const addNewComment = (e) => {
        let textValue = inputHandler.current.value
        props.addComment(props.itineraryId, textValue, props.token)
        .then((res)=> {
            setAllComments(res.response)   
            inputHandler.current.value = ""   
        })
        .catch(error=>console.log(error))
        
    }

    const deleteComment = (itineraryId, commentId, token) =>  {
        props.deleteComment(itineraryId, commentId, token)
        .then(res=>{
            if (res.success) {
                setAllComments(allComments.filter(comment=>comment._id !== commentId))
            } else {
                throw new Error()
            }   
        })
        .catch(error =>console.log(error))
    }

    const editComment = (commentId, comment, token) => {
        props.editComment(commentId, comment, token)
        .then((res)=> {
            if(res.success) {
            allComments.forEach(updatedComment=>{
                if(updatedComment._id === commentId){
                    updatedComment.comment = comment
                }
            })
            setAllComments(allComments)
            setUpdate(!update)
            }
        })
        .catch(error =>console.log(error))
    }
    
    return (
        <>
            <h4>Comments</h4>
            
                <div className="comments">
                
                    {
                        allComments.map((comment)=><Comment key={comment._id} newComment={comment} delete={deleteComment} itineraryId={props.itineraryId} edit={editComment} updateComment={update}/>
                        )
                    }
                </div>
               <div className="commentInputContainer"> 
                    <input type="text" className="commentsInputs" autoComplete="nope"
                     ref={inputHandler} name="comment"
                    disabled={props.token ? false : true}
                    placeholder={props.token ? "Leave a coment!" : "You have to log in to comment"}
                    />
             
              <button className="sendComment" onClick={addNewComment}
              disabled={props.token ? false : true}>Send</button>
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