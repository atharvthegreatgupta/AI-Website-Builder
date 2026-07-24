document.addEventListener('DOMContentLoaded', () => {
    console.log('Instagram Clone Loaded!');

    // Basic interactivity: Liking a post (client-side simulation)
    document.querySelectorAll('.post-actions span:first-child').forEach(likeButton => {
        likeButton.addEventListener('click', () => {
            if (likeButton.textContent.includes('❤️')) {
                likeButton.textContent = '💙 Liked'; // Change to liked state
                likeButton.style.color = '#ed4956'; // Instagram's like color
            } else {
                likeButton.textContent = '❤️ Like'; // Change back to unlike state
                likeButton.style.color = '#262626';
            }
        });
    });

    // Basic interactivity: Follow button (client-side simulation)
    document.querySelectorAll('.suggestions li button').forEach(followButton => {
        followButton.addEventListener('click', () => {
            if (followButton.textContent === 'Follow') {
                followButton.textContent = 'Following';
                followButton.style.backgroundColor = '#dbdbdb';
                followButton.style.color = '#262626';
            } else {
                followButton.textContent = 'Follow';
                followButton.style.backgroundColor = '#0095f6';
                followButton.style.color = '#fff';
            }
        });
    });
});
