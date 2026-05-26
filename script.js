// Follow Button
const followBtn = document.getElementById('followBtn');
followBtn.addEventListener('click', () => {
    if (followBtn.innerText === 'Follow') {
        followBtn.innerText = 'Following';
        followBtn.classList.add('following');
    } else {
        followBtn.innerText = 'Follow';
        followBtn.classList.remove('following');
    }
});

// Like Button
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('like-btn')) {
        const likeCount = e.target.nextElementSibling;
        let count = parseInt(likeCount.innerText);
        
        if (e.target.classList.contains('liked')) {
            e.target.classList.remove('liked');
            e.target.classList.replace('fas', 'far');
            likeCount.innerText = count - 1;
        } else {
            e.target.classList.add('liked');
            e.target.classList.replace('far', 'fas');
            likeCount.innerText = count + 1;
        }
    }
});

// Create New Post
const postBtn = document.getElementById('postBtn');
const postInput = document.getElementById('postInput');
const postsContainer = document.getElementById('postsContainer');

postBtn.addEventListener('click', () => {
    const postText = postInput.value.trim();
    if (postText === '') return;

    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = `
        <div class="post-header">
            <img src="https://i.pravatar.cc/40?u=madhu" alt="user">
            <h3>Madhu Kista</h3>
        </div>
        <p class="post-text">${postText}</p>
        <div class="post-actions">
            <i class="far fa-heart like-btn"></i> <span class="like-count">0</span>
            <i class="far fa-comment"></i> <span>0</span>
        </div>
        <div class="comments"></div>
        <div class="add-comment">
            <input type="text" placeholder="Add a comment...">
            <button>Post</button>
        </div>
    `;
    postsContainer.prepend(newPost);
    postInput.value = '';
});

// Add Comment
document.addEventListener('click', function(e) {
    if (e.target.innerText === 'Post' && e.target.parentElement.classList.contains('add-comment')) {
        const commentInput = e.target.previousElementSibling;
        const commentText = commentInput.value.trim();
        if (commentText === '') return;

        const commentsDiv = e.target.parentElement.previousElementSibling;
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>Madhu Kista:</strong> ${commentText}`;
        commentsDiv.appendChild(newComment);
        commentInput.value = '';
        
        const commentCount = e.target.closest('.post').querySelector('.fa-comment').nextElementSibling;
        commentCount.innerText = parseInt(commentCount.innerText) + 1;
    }
});
