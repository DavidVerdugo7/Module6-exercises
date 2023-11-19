export default function UserInfo(props) {
  return (
    <div className="Comment componentBoxcat">
      <div className="UserInfo">
        {" "}
        {/* the user info is one aspect of the comment */}
        <img
          className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />{" "}
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    </div>
  );
}
