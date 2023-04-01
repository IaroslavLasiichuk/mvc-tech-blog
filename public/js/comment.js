const addComment = async (event) => {
    const comment = document.querySelector('#exampleFormControlTextarea1').value;
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
      const response = await fetch(`/home/${id}`, {
          method: 'POST',
          body: JSON.stringify({comment}),
          headers: {
              'Content-Type': 'application/json',
         }
      });
      if (response.ok) {
        document.location.replace('/home');
      } else {
          alert('Failed to post comment');
      }
    }
  };
  document.querySelector('main').addEventListener('click', addComment);
