import { Link } from 'react-router-dom';
import '../Styles/Nav.css';
import { connect } from 'react-redux';
import { logoutAuthUser } from '../actions/authUser';

const Nav = (props) => {
  const { authUser, avatar } = props;

  const logout = (e) => {
    e.preventDefault();
    props.dispatch(logoutAuthUser());
  };
  return (
    <nav>
      <ul>
        <li data-testid='home'>
          <Link className='link' to='/'>
            Home
          </Link>
        </li>
        <li  data-testid='new'>
          <Link className='link' to='/add'>
            New Question
          </Link>
        </li>
        <li  data-testid='leaderboard'>
          <Link className='link' to='/leaderboard'>
            Leaderboard
          </Link>
        </li>
        <li className='link' data-testid='logout'>
          <button className='logout-btn' onClick={logout}>
            Logout
          </button>
        </li>
        <img className='userAvatar' src={avatar} alt='Author Avatar' />
        <span className='username'>{authUser} </span>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authUser, users }) => {
  return { authUser, avatar: users[authUser].avatarURL };
};

export default connect(mapStateToProps)(Nav);
