
import img1 from'./images/facebook.png';
import img2 from'./images/google.png';

const InlineStyle = () => {
    return (
        
      <div style={{backgroundColor:'#646C79',padding:"100px"}}>
        <h1 style={{ fontSize: '100px',marginBottom: '10px',margin:'20px',fontStyle:'normal'}}>InlineStyle
        </h1>
      <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',marginTop: '10px',
      border: '7px solid #E6E2DD ', borderRadius:'50px', padding: '50px',width:'250px',marginLeft:'400px',
      height:'400px',backgroundColor:'#F7F7F7',}}>
        <h2 style={{  fontSize: '30px',marginBottom: '10px',margin:'20px',fontStyle:'normal' }}>
          Log in with
        </h2>
        
        <div>
      <img src={img1} style={{height: "35px",border:'1px solid gray',padding:'5px',width:'50px',marginRight:'30px',borderRadius: '8px',
}}  alt=""/>                                                  
      <img src={img2} style={{height: "35px",border:'1px solid gray',padding:'5px',cursor: 'pointer',width:'50px',borderRadius: '8px'}} alt=""/> 
      </div>
      <div>or</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form>
         <input 
           
           type="text"placeholder='Email'
           style={{ width: '200px', border:'#ccc',padding: '15px',borderRadius: '8px',
           marginLeft:'50px',margin:"15px" ,marginRight:'50px'}}
           

         />
         <input
           type="password" placeholder='Password'
           style={{ width:'200px',border:'#ccc',padding:'15px',borderRadius:'8px',margin:"15px",marginRight:'50px',marginLeft:'50px'}}
         />
          <label
            style={{  fontSize: '15px',marginLeft:'65px',color: "blue",}}
          >
            forgot your password?
          </label>
            <button
              style={{padding: '10px',backgroundColor: '#7DA2A9',color: 'black',border: 'none',borderRadius: '10px',
              margin:'50px',fontSize: '20px',width:'230px',}}

            >
              Login{}
            </button>
          </form>
        </div>
      </div>
      </div>
    );
  };
  
  export default InlineStyle;
  