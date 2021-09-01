import Swal from 'sweetalert2'
import {useState} from "react"
import { connect } from 'react-redux'
import commentsActions from "../redux/actions/commentsActions"

const Comments = (props) => {
    const { Comments, token} = props
    const {Itineraries, firstName, src} = Comments
    // const [comments, setComments] = useState ([])
    const [newComment, setNewComment] = useState ({
        firstName: firstName,
        src: src,
        comment:"",
        token: token,
        idItinerary: Itineraries._id,
    })


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const inputHandler = (e) => {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        })
    }

    const addComment = () => {
        if (newComment.comment.length === 0) {
            Toast.fire({
                icon: 'error',
                title: 'You have to write something to post a comment'
              })
        } else if (props.token){
            props.addComment(newComment, Itineraries._id)
            .then((response) => {
              if (response.data.success) {
                // setComments(newComment.response)
                console.log(response)
              } 
            })
            .catch((error) => {
                console.log(error)
            Toast.fire({
                icon: 'error',
                title: 'Something went wrong!'
              })
            })   
        }
    }

    console.log(newComment)

    return (
        <>
            <h4>Comments</h4>
            <div className="comments">
                {/* {comments.map((comment, index) => {
                    return (
                        <div className="newComment" key={index}>
                             <div style={{backgroundImage: `url("${comment.src}")` }}></div>  
                             <h4>{comment.firstName}</h4> 
                        </div>
                    )
                })
                } */}
                
            </div>
            <div className="commentInputContainer">
                <input type="text" className="commentsInputs" onChange={inputHandler} name="comment"/>
                <button className="sendComment" onClick={addComment}>Send</button>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Comments) 