import PropTypes from "prop-types";

function Profile({fullName, bio, profession,handleName,children}){
    
    return(

        <div style={{background:"grey",borderStyle:"solid",borderColor:"black",borderRadius:"30px",width:"700px"
        ,height:"800px",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            {children}
            <h1 style={{color:"black"}} >{fullName}</h1>
            <h2 style={{color:"black"}}>{bio}</h2>
            <h3 style={{color:"black"}}>{profession}</h3>
            <br/>
            <button onClick={handleName} style={{backgroundColor:"white",color:"black",fontSize:"large",fontWeight:"bold"}}> Click here !</button>

        </div>
    )
}


export default Profile;


Profile.defaultProps = {
    fullName : "username",
    bio : "username",
    profession : "username",
    handleName : function handleName(){alert("username")}
};

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    handleName : PropTypes.func
};