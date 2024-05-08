export function deleteForm(form, selector) {
  const deletedSelector = form.querySelectorAll(selector);
  deletedSelector.forEach((content) => {
    content.remove();
  });
  form.innerHTML = '<br>';
}
