export function createDeleteButton(
  content,
  deleteDataOnServer,
  getData,
  parentList,
  list,
  displayElement
) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.setAttribute('data-info', content);

  deleteButton.addEventListener('click', function () {
    const content = this.getAttribute('data-info');
    deleteDataOnServer(content, getData._id)
      .then(() => {
        parentList.removeChild(list);
        if (parentList.children.length === 0) {
          displayElement.removeChild(parentList);
        }
      })
      .catch((error) => console.error('Error:', error));
  });

  return deleteButton;
}

export function deleteDataOnServer(content, userId) {
  return fetch(`http://localhost:5000/mypage/${content}/${userId}`, {
    method: 'DELETE',
  });
}
