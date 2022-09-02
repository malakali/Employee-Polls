import { connect } from 'react-redux';
import '../Styles/Leaderboard.css';
const Leaderboard = ({ users }) => {
  console.log(users);
  return (
    <div className='wrapper-container'>
      <h1 className='color-text'>Leaderboard</h1>
      <table className='table'>
        <thead>
          <tr>
            <th className='color-text' >User</th>
            <th className='color-text' data-testid="answered">Answered</th>
            <th className='color-text'>Created</th>
          </tr>
        </thead>
        <tbody  >
          {users.map((user) => (
            <tr key={user.id}>
              <td  >{user.id}</td>
              <td  >{Object.keys(user.answers).length}</td>
              <td  >{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => (Object.keys(b.answers).length + Object.keys(b.questions).length) - (Object.keys(a.answers).length + Object.keys(a.questions).length)
  )
});

export default connect(mapStateToProps)(Leaderboard);
