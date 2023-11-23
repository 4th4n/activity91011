import img1 from'./images/facebook.png';
import img2 from'./images/google.png';
const ObjectVariable = () => {


  return (

    
    <div style={styles.backgroundColor}>
    <h1 style={styles.title}>ObjectStyle
        </h1>
    <div style={styles.container}>

      <h2 style={styles.header}>Log in with</h2>
      <div style={styles.image}>
      <img src={img1} style={styles.img1} alt='' />
      <img src={img2} style={styles.img2} alt=''/> 
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
  

    

  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    border: '7px solid #E6E2DD ', 
    borderRadius: '50px', 
    padding: '50px', 
    width:'250px',
    marginLeft:'400px',
    height:'400px',
    backgroundColor:'#F7F7F7',
  },
  header: {
    fontSize: '30px',
    marginBottom: '10px',
    margin:'20px',
    fontStyle:'normal'
  },

  label: {
    fontSize: '15px',
    marginRight:'50px',
    color: "blue",
   
    
  },
  input: {
    width: '200px',
    padding: '15px',
    borderRadius: '8px',
    border:'#ccc',
    marginLeft:'35px',
    
    margin:"15px"
    
  },
  button: {
    padding: '10px',
    backgroundColor: '#7DA2A9',
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    width:'230px',
    margin:'50px',
    
  },
  backgroundColor:{
    backgroundColor:'#646C79',
    padding:"100px"
 

  },
  img1:{
    height: "35px",
    border:'1px solid gray',
    padding:'5px',
    cursor: 'pointer',
    width:'50px',
    marginRight:'30px',
    borderRadius: '8px',

  },
   img2:{
    height: "35px",
    border:'1px solid gray',
    padding:'5px',
    cursor: 'pointer',
    width:'50px',
    borderRadius: '8px',
  },
  title: {
    fontSize: '100px',marginBottom: '10px',margin:'20px',fontStyle:'normal'
  }


  
};

export default ObjectVariable;







// const ObjectVariable = () => {



//     return (
//       <div style={Container}>
//         <h2 style={Header}>Style Object Variable in React</h2>
//         <div style={LabelContainer}>
//           <label style={Label}>What needs to be done?</label>
//         </div>
//         <div style={FormContainer}>
//           <form>
//             <input type="text" style={InputStyle} />
//             <button style={ButtonStyle}>Add </button>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   const Container = { display: "flex", flexDirection: "column" };
//   const Header = { padding: "10px 20px", textAlign: "center", color: "#000" };
//   const LabelContainer = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };
//   const Label = { padding: "10px 20px", textAlign: "center", color: "blue" };
//   const FormContainer = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };
//   const InputStyle = {
//     padding: "10px 20px",
//     textAlign: "center",
//     color: "blue",
//     marginRight: "10px",
//   };
  
//   const ButtonStyle = {
//     padding: "10px 20px",
//     textAlign: "center",
//     color: "blue",
//   };
  
//   export default ObjectVariable;
  