import { _getUsers, _getQuestions,_saveQuestionAnswer } from './_DATA';
 
export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}
export function saveQuestionAnswer({ authUser, qid, answer }) {
  console.log(authUser);
  return _saveQuestionAnswer({ authUser, qid, answer });
}
