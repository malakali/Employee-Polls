const { _saveQuestionAnswer, _saveQuestion } = require('../utils/_DATA');
describe('_saveQuestion', () => {
  it('will return true for correct data parameters', async () => {
    const question = {
      optionOneText: 'optionOne',
      optionTwoText: 'OptionTwo',
      author: 'sarahedo'
    };
    const response = await _saveQuestion(question);
    expect(response).toBeTruthy();
  });
  it('will return error for incorrect data parameters', async () => {
    const question = {
      optionOneText: 'optionOne',
      optionTwoText: 'OptionTwo'
    };
    const response = await _saveQuestion(question).catch((e) => e);
    expect(response).toBe(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('_saveQuestionAnswer', () => {
  it('will return true for correct  data parameters', async () => {
    const response = await _saveQuestionAnswer({
      authUser: 'sarahedo',
      qid: 'loxhs1bqm25b708cmbf3g',
      answer: 'optionOne'
    });
    expect(response).toBeTruthy();
  });

  it('will return error for false   data parameters', async () => {
    const response = await _saveQuestionAnswer({
      authedUser: 'sarahedo',
      qid: undefined,
      answer: 'optionOne'
    }).catch((e) => e);
    expect(response).toEqual('Please provide authUser, qid, and answer');
  });
});
