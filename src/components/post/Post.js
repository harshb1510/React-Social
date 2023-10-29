import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
     const user = Users.filter((u)=>u.id===post.userId)
     const [like,setLike] = useState(post.like)
     const [isLiked,setIsLike] = useState(false)
     const likeHandler=()=>{
        setLike(isLiked?like-1:like+1)
        setIsLike(!isLiked)
     }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={user[0].profilePicture} alt="" />
                    <span className="postUsername">{user[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                <MoreVertIcon/>
                </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
            
            <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
                <span className="postlikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
            </div>
        </div>
      
    </div>
  )
}
