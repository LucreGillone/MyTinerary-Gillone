import { useState, useRef, useEffect } from "react"
import {connect} from "react-redux"

const Comment = (props) => {
    const [modifyComment, setModifyComment] = useState(false)
    const inputHandler = useRef()
console.log(props)
    
    useEffect(() => {
        setModifyComment(false)
    }, [props.updateComment])


    const user = props.newComment.userId._id === props._id
    const comment = <div className="textArea">
                    
                    <div className="profilePic" style={{backgroundImage:`url("${props.newComment.userId.src}")` }}>
                </div>
                <div>


                
                <h6>{props.newComment.userId.firstName}</h6>
                       {!modifyComment 
                       ? <p>{props.newComment.comment}</p>
                       :
                         <>
                            <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
                            <img src="/assets/arrow.svg" alt="send" onClick={()=>props.edit(props.newComment._id, inputHandler.current.value, props.token)}/>
                         </>
                        }
                        </div>
                        
                        <img src="/assets/pencil.svg" alt="pencil" onClick={()=>setModifyComment(!modifyComment)} />
                       
                        <img src="/assets/trash.svg" alt="trash" onClick={()=>props.delete(props.itineraryId, props.newComment._id, props.token)}/>
                        
                    </div>
    const renderComment = user ? comment : <p>{props.newComment.comment}</p>


    return (
        <>
        {renderComment}
            {/* <div className="comment">
                <div className="profilePic">
                </div>
                <h5 className="userName"></h5>
                <div className="textArea">
                    {!modifyComment
                    ?<p>{props.newComment.comment}</p>
                    : <input type="text" defaultValue={props.newComment.comment} />
                    }
                    <img src="/assets/pencil.svg" alt="pencil" onClick={()=>setModifyComment(!modifyComment)}/>
                    <img src="/assets/trash.svg" alt="trash" onClick={()=>props.delete(props.itineraryId, props.newComment._id, props.token)}/>

                </div> */}
               
            {/* </div> */}
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        _id: state.users._id
    }
}

export default connect(mapStateToProps)(Comment)