import '../Styles/Login.css';
import { connect } from 'react-redux';
import { authenticatedUser } from '../actions/authUser';
import { useState } from 'react';
import logo from '../assest/img/logo.png'; 

const Login = (props) => {
  const [MsgWrongPsw, SetMsgWrongPsw] = useState(false);
  const [userSelected, setUserSelected] = useState('sarahedo');

  const handleselectUser = (e) => {
    setUserSelected(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userPassword = props.users[userSelected].password;
    const input = document.getElementById('password').value;
  
    if (input !== userPassword) {
      SetMsgWrongPsw(true);
      return;
    } else {
      SetMsgWrongPsw(false);
      props.dispatch(authenticatedUser(userSelected));
      setUserSelected('');
    }
  };
  return (
    <div className='login-container' data-testid='login-head'>
      <h1 className='color-text'>Employee Polls</h1>
      <figure>
        <img src={logo}  alt='Poll' />
      </figure>
      <h3> Log In </h3>
      <form id='loginForm' onSubmit={handleSubmit}>
        <label>
          <p>User</p>
          <input
            type='text'
            value={userSelected}
            onChange={handleselectUser}
            data-testid='username'
           
          ></input>
        </label>
        <label>
          <p>Password</p>
          <input data-testid='password' id='password' type='password' />
        </label>
        <div className='button-container'>
          <input data-testid='submit-btn' id='btnlogin' type='submit' />
          
        </div>
        {MsgWrongPsw === true && (
        <div className='error-message' data-testid='error' >
          Wrong Password! Try Again
        </div>
      )} 
      </form>
    
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { UsersIds: Object.keys(users), users: users };
};

export default connect(mapStateToProps)(Login);
