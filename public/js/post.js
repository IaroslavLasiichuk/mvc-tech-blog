const newPost = async(event) => {
    event.preventDefault();
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#content').value.trim();


  if (title, content) {
      console.log(title);
      const response = await fetch(`/dashboard`, {
        method: 'POST',
        body: JSON.stringify({ title, content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    console.log(response);
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to create project');
      }
    }
};

  document.querySelector('.post-form').addEventListener('submit', newPost);
