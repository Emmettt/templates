export default function saveTemplates() {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: 'SAVE_TEMPLATE' });
    }, 2000);
  };
}
