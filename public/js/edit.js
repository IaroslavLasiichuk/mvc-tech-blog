const newComment = async (event) => {
  const id= document.querySelector('#post-title').value;
  const comment = document.querySelector('#exampleFormControlTextarea1').value;
  if (event.target.hasAttribute('data-comment')) {
    const ids = event.target.getAttribute('data-comment');
    const response = await fetch(`/edit/${ids}`, {
      method: 'POST',
      body: JSON.stringify({comment}),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  // const newComment = await response.json();
  // const commentList = document.querySelector(`#comment-list-${ids}`);
  // const commentEl = document.createElement('p');
  // commentEl.textContent = newComment;
  // commentList.appendChild(commentEl);
  // comment.value = '';
 }

}; 
document.querySelector('.btn-comment').addEventListener('click', newComment);

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



document.querySelector('.btn-edit').addEventListener('click', editPost);


document.querySelector('.btn-edit').addEventListener('click', editPost);
  // Delete post

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

// Add comments
// const commentBtns = document.querySelectorAll('.btn-comment');
// commentBtns.forEach((btn) => {
//   btn.addEventListener('click', async () => {
//     const id = btn.getAttribute('data-comment');
//     const comment = document.querySelector(`#comment-${id}`).value;
//     console.log(id);
=======

document.querySelector('.btn-edit').addEventListener('click', editPost);


const addComment = async (event) => {
  if (event.target.hasAttribute('data-comment')) {
    const id = event.target.getAttribute('data-comment');
    console.log(id);
    const comment = document.querySelector(`#comment-${id}`).value;
    const response = await fetch(`/edit/${id}`, {
      method: 'POST',
      body: JSON.stringify({id, comment}),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log(response);
    const newComment = await response.json();
    const commentList = document.querySelector(`#comment-list-${id}`);
    if (commentList) {
      const commentEl = document.createElement('p');
      commentEl.textContent = newComment.comment;
      console.log(newComment);
      commentList.appendChild(commentEl);
    }
    comment.value = '';
  }
  if (response.ok) {
    document.location.replace('/home');
  } else {
    alert('Failed to delete post');
  }
};

document.querySelector('.btn-comment').addEventListener('click', addComment);

