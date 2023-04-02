const editPost = async (event) => {
  const blog_title = document.querySelector('#post-title').value;
  const blog_content = document.querySelector('#exampleFormControlTextarea1').value;
    if (event.target.hasAttribute('data-edit')) {
      const id = event.target.getAttribute('data-edit');
      const response = await fetch(`/edit/${id}`, {
          method: 'PUT',
          body: JSON.stringify({blog_title, blog_content}),
          headers: {
              'Content-Type': 'application/json',
         }
      });
      console.log(response);
      console.log(response);
      if (response.ok) {
        document.location.replace('/home');
      } else {
          alert('Failed to edit post');
      }
    }
};
  
const deletePost = async (event) => {
  if (event.target.hasAttribute('data-delete')) {
    const id = event.target.getAttribute('data-delete');
    const response = await fetch(`/edit/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert('Failed to delete post');
    }
  }
};

const deleteButton = document.querySelector('.btn-delete');
if (deleteButton !== null) {
deleteButton.addEventListener('click', deletePost);
}  

document.querySelector('.btn-edit').addEventListener('click', editPost);
