const WelcomeMessege = ({onGetPostsClick}) => {
  return (
    <center className="welcome-messege">
      <h1 >There are no Posts</h1>
      <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts From Server</button>
    </center>
  );
};
export default WelcomeMessege;
