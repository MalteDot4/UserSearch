import "../App.css";
import UserInformation from "./UserInformation";
import UserLinks from "./UserLinks";
import UserRepoStats from "./UserRepoStats";

function UserCard(props) {
  return (
    <div className="user-card">
      <UserInformation
        userLogin={props.profileData.login}
        userName={props.profileData.name}
        createdDate={props.profileData.created_at}
        userAvatar={props.profileData.avatar_url}
        userBio={props.profileData.bio}
      ></UserInformation>
      <UserRepoStats
        repoCount={props.profileData.public_repos}
        userFollowers={props.profileData.followers}
        userFollowing={props.profileData.following}
      ></UserRepoStats>
      <UserLinks
        theme={props.theme}
        location={props.profileData.location}
        website={props.profileData.html_url}
        twitter={props.profileData.twitter_username}
        company={props.profileData.company}
      ></UserLinks>
    </div>
  );
}

export default UserCard;
