import "./Rightbar.css";
import{Users} from "../../dummyData"
import Online from "../online/Online"


export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return(
      <>
       <div className="birthdayContainer">
          <img className="bithdayImg" src="assets/gift.png" alt="" />
          <span className="bithdayText">
            <b>Me</b> & <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightBarAd" src="assets/ad.png" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
        {Users.map((u)=>(
          <Online key={u.id} user={u}/>
        ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className="rightBarTitle">User information </h4>
      <div className="rightBarInfo">
        <div className="rightBarInfoItem">
          <span className="rightBarInfokey">City:</span>
          <span className="rightBarInfoValue">New York</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfokey">From:</span>
          <span className="rightBarInfoValue">Madrid</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship:</span>
          <span className="rightBarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightBarTitle">User friends </h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        

      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightBarWrapper">
          {profile?<ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  );
}
