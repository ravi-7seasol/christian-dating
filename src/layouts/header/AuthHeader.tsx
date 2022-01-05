
const AuthHeader: React.FC = () => {

  return (
    <>
      <div className="authheader">
        <div>
          <img src="./assets/img/application-menu.png" alt="" height="5%" />
        </div>
        <div>
          <h1>Profile</h1>
        </div>
        <div  className="profile-pic" >
          <img src="./assets/img/Ellipse.png" alt="" height="5%"/>
          <div className="notification"></div>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;
