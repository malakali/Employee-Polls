import { connect } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import '../Styles/NewPoll.css';

const NewPoll = (props) => {
  const navigate = useNavigate();

  const [textOne, setTextOne] = useState('');
  const [textTwo, setTextTwo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleAddQuestion(textOne, textTwo));

    setTextOne('');
    setTextTwo('');
    navigate('/');
  };
  const handleChangeTextOne = (e) => {
    const text = e.target.value;
    setTextOne(text);
  };
  const handleChangeTextTwo = (e) => {
    const text = e.target.value;
    setTextTwo(text);
  };
  
  
  return (
    <div className='wrapper-container'>
      <h1 className='colortext'> Add Your Own Poll </h1>
      <h3> Would You Rather</h3>
      <form className='new-poll' onSubmit={handleSubmit}>
        <div className='text-arae-container'>
          <h4 className='lable'> Option One</h4>
          <textarea
            className='text-area'
            placeholder='Option One'
            value={textOne}
            onChange={handleChangeTextOne}
            maxLength={300}
          />
          
          <h4 className='lable'> Option Two</h4>
          <textarea
            className='text-area'
            placeholder='Option Two'
            value={textTwo}
            onChange={handleChangeTextTwo}
            maxLength={300}
          />
           
        </div>
        <button
          className='btn-sumbit'
          type='submit'
          disabled={textOne === '' || textTwo === ''}
        >
          {' '}
          Add{' '}
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
