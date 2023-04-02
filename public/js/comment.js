const editPost = async (event) => {
  const blog_title = document.querySelector('#exampleFormControlTextarea1').value;
  const blog_content = document.querySelector('#post-title').value;
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
