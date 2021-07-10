import './App.css';
import Profile from "./profile/Profile";
import profileImage from "./Photo.jpeg";


function App() {
  let Name = "Achref Kamoun";
  let Bio = "I am 25";
  let Prof = "Web Developer";

  function handleName(){
    alert(`The profile of : ${Name}`);
  }
   
  return (
          
    <div>
      <Profile fullName = {Name}  bio={Bio} profession={Prof} handleName={handleName}> 
      <img src={profileImage} alt="" style={{width:"400px",height:"400px"}}
       /> </Profile>
    </div>
  );
}

export default App;