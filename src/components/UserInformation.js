import "../App.css";
import moment from "moment";

function UserInformation(props) {
  return (
    <>
      <div className="user-information">
        <img
          className="user-information__avatar-image"
          src={props.userAvatar}
          alt="avatar"
        ></img>
        <div className="user-information__wrapper">
          <div className="user-information__username">
            <h1>{props.userName}</h1>
            <h3>@{props.userLogin}</h3>
          </div>
          <div className="user-information__date">
            <p>{`Joined ${moment(props.createdDate).format("LL")}`}</p>
          </div>
        </div>
      </div>
      <div className="user-information__bio">
        <p>
          {props.userBio === null ? "This user has no bio." : props.userBio}
        </p>
      </div>
    </>
  );
}

export default UserInformation;
