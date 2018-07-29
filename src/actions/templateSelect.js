export default function templateSelect(templateId) {
  return {
    type: 'TEMPLATE_SELECT',
    payload: templateId
  };
}
