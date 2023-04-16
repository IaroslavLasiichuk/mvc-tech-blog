const newPost = async(event) => {
    event.preventDefault();
  const blog_title = document.querySelector('#post-title').value.trim();
  const blog_content = document.querySelector('#content').value.trim();
  if (blog_title, blog_content) {
      console.log(blog_title);
      const response = await fetch(`api/dashboard`, {
        method: 'POST',
        body: JSON.stringify({ blog_title, blog_content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
};

  document.querySelector('.post-form').addEventListener('submit', newPost);
