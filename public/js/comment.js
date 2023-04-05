// document.querySelector('.btn-comment').addEventListener('click', newComment);
  
// const addCommentButtons = document.querySelectorAll('.btn-comment');

// addCommentButtons.forEach((button) => {
//   button.addEventListener('click', async(event) => {
//     const commentTextarea = document.querySelector(`#comment-${event.target.dataset.comment}`);
//     const commentContent = commentTextarea.value;
//     console.log("Works");
//     event.preventDefault();

//   if (commentContent) {
//     const id = event.target.getAttribute('data-comment');
//     const response = await fetch(`/home/comment/`, {
//         method: 'POST',
//         body: JSON.stringify({comment}),
//         headers: {
//             'Content-Type': 'application/json',
//        }
//     });
//     if (response.ok) {
//       document.location.replace('/home');
//     } else {
//         alert('Failed to edit post');
//     }
//   }
  
//   });
// });
// const commentBtns = document.querySelectorAll('.btn-comment');

// commentBtns.forEach((btn) => {
//   btn.addEventListener('click', async () => {
//     const id = btn.getAttribute('data-comment');
//     const comment = document.querySelector(`#comment-${id}`).value;

//     try {
//       const response = await fetch('/home', {
//         method: 'POST',
//         body: JSON.stringify({id, comment}),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
// console.log(response);
//       const newComment = await response.json();
//       const commentList = document.querySelector(`#comment-list-${id}`);
//       const commentEl = document.createElement('p');
//       commentEl.textContent = newComment.comment;
//       commentList.appendChild(commentEl);
//       comment.value = '';
//     } catch (error) {
//       console.error(error);
//     }
//   });
// });
