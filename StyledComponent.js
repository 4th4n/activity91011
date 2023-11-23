import {styles} from "./Styles";
import img1 from'./images/facebook.png';
import img2 from'./images/google.png';

const StyledComponent = () => {
    return (
      <div style={styles.backgroundColor}>
      <h1 style={styles.title}>ComponentStyle
        </h1>
      <div style={styles.container}>
  
        <h2 style={styles.header}>Log in with</h2>
        <div style={styles.image}>
        <img src={img1} style={styles.img1} alt="" />
        <img src={img2} style={styles.img2} alt=""/> 
        </div>
        <div>or</div>
        
          <input 
            type="text"placeholder='Email'
            style={styles.input}
          />
          <input
            type="password" placeholder='Password'
            style={styles.input}
          />
          <label style={styles.label}>forgot your password?</label>
          
  
          <button style={styles.button}> 
            Login
          </button>
          
      </div>
      </div>


        // <div style={styles.Container}>
        //   <h2 style={styles.Header}>Sharing styles across many React components</h2>
        //   <div style={styles.LabelContainer}>
        //     <label style={styles.Label}>What needs to be done?</label>
        //   </div>
        //   <div style={styles.FormContainer}>
        //     <form>
        //       <input type="text" style={styles.InputStyle} />
        //       <button style={styles.ButtonStyle}>Add </button>
        //     </form>
        //   </div>
        // </div>
      );
}


 
export default StyledComponent;