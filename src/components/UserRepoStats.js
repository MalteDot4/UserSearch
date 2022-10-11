import "../App.css";

function UserRepoStats(props) {
  return (
    <div className="repo-stats">
      <div className="repo-stats__repos">
        <h4>Repos</h4>
        <p>{props.repoCount}</p>
      </div>
      <div className="repo-stats__follower">
        <h4>Followers</h4>
        <p>{props.userFollowers}</p>
      </div>
      <div className="repo-stats_following">
        <h4>Following</h4>
        <p>{props.userFollowing}</p>
      </div>
    </div>
  );
}

export default UserRepoStats;
