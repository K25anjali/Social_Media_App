const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center>
      <h1 className="Welcomemessage">There are no Post.</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-outline-primary"
        
      >
        GET POST FROM SERVER
      </button>
    </center>
  );
};

export default WelcomeMessage;
