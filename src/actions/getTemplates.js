import templates from '../db';

export default function getTemplates() {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: 'GET_TEMPLATE', payload: templates });
    }, 3000);
  };
}
