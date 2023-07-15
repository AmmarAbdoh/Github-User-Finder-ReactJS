const User = ({ login, avatar_url, html_url }) => {
  return (
    <>
      <div className="list">
        <img src={avatar_url} alt={login} />
        <div>
          <h5>{login}</h5>
          <a href={html_url}>profile</a>
        </div>
      </div>
    </>
  );
};
export default User;
