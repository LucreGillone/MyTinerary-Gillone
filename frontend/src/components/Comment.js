import { useState } from "react"
import {connect} from "react-redux"

const Comment = (props) => {
    const [modifyComment, setModifyComment] = useState(false)


    return (
        <>
            <div className="comment">
                <div className="profilePic">
                </div>
                <h5 className="userName"></h5>
                <div className="textArea">
                    {!modifyComment
                    ?<p>{props.newComment.comment}</p>
                    : <input type="text" value={props.newComment.comment}/>
                    }
                    <img src="/assets/pencil.svg" alt="pencil" onClick={()=>setModifyComment(!modifyComment)}/>
                    <img src="/assets/trash.svg" alt="trash" onClick={()=>props.delete(props.itineraryId, props.newComment._id, props.token)}/>

                </div>
               
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        token: state.users.token
    }
}

export default connect(mapStateToProps)(Comment)