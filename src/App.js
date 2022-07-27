import './App.css';
import { Amplify } from 'aws-amplify';
import Records from './data.json';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './Configuration';
Amplify.configure(awsExports);


export default function App() {
  
  return (

   
      

   
    
      <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>




          <div>
        
        
        <div className="dropdown">
          
            
          <ul class="main-nav">
			<li class="active"><a href=""> HOME </a></li>
			<li><a href="gal.html"> OUR GALLERY </a></li>
			<li><a href="regis.html"> USER REGISTERATION </a></li>
			<li><a href="login.html"> LOGIN/SIGN-UP </a></li>
			<li><a href="serv.html">SERVICES </a></li>
			<li><a href="our.html"> ABOUT US </a></li>
			<li><a href="cont.html"> CONTACT </a></li>
		</ul>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n    body {background-color: powderblue;}\n    h1   {color: red;}\n    h1 {text-align: center;}\n    p    {color: rgb(34, 32, 32);}\n    " }} />
        <style media="screen" dangerouslySetInnerHTML={{__html: "\n        body {\n            background-image: linear-gradient(\n                to right, rgb(240, 245, 239), rgb(209, 247, 229));\n        }\n    " }} />
        <br></br>
        <div className="ind">
        <br />
        <h1 style={{color: 'red'}} align="center"><u>Welcome to Our Company</u></h1>
        </div>
        <br /><br />
        <div className="india">
          <br /><br />
        <p>The Geeks For Geeks example uses multiple AWS Services and the Java V2 API. Perform these steps:</p>
    <ol>
      <li>Thank you for visiting this page. </li>
      <li>This page is made in order to perform the task given by Senegrass Tech activity.</li>
      <li>The site uses aws amplify for login/signup page.</li>
        <li>You can create your own Account just choose <i>Create Account</i> menu item.</li>
        <li>Enter a valid email address and then choose <i>Next</i>.</li>
        <li>Enter a strong password and then choose <i>Next</i>.</li>
        <li>Confirm the password.</li>
        <li>Enter the verification code which you recieved on your email in  <i>Enter verification code</i> box.</li>
        <li>You can verify yourself by entering correct <i>Verification code</i>. </li>
        <li>You can now Signin by choosing <i>Signin</i> tab.</li>
        <li>Have a great day.</li>
    </ol>
    </div>
        <center>
          <h1 style={{color: 'rgb(46, 0, 252)'}}>
            Location
          </h1>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin" width={400} height={300} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0}>
            </iframe>
          </div>
        </center>
      </div>

      <div className="App">
      {
  Records && Records.map( record => {
  return(
  <div className="box" key={ record.id }>
    <br /><br />
  <strong>{record.title}</strong><br />
  {record.content }<br /><br />

  {record.tech && record.tech.map( data=> {
  return(
  <div key={ record.id}>
  -- { data.name } --
  </div>
  )
  })
  }
  </div>
  )
  })
}
      </div>
      





        </main>
      )}
    </Authenticator>
  );
  
}