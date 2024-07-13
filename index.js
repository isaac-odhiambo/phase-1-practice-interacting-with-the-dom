let count = 0;
let timerInterval;
let isPaused = false;
let likeCount = 0;

// Start the timer on page load
window.onload = function() {
    timerInterval = setInterval(() => {
        if (!isPaused) {
            count++;
            document.getElementById('counter').innerText = count;
        }
    }, 1000);
};

// Increment and decrement counter
document.getElementById('plus').addEventListener('click', () => {
    count++;
    document.getElementById('counter').innerText = count;
});

document.getElementById('minus').addEventListener('click', () => {
    count--;
    document.getElementById('counter').innerText = count;
});

// Like functionality
document.getElementById('like').addEventListener('click', () => {
    likeCount++;
    document.getElementById('likes').innerText = likeCount;
});

// Pause and resume functionality
document.getElementById('pause').addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
        clearInterval(timerInterval);
        document.getElementById('pause').innerText = 'Resume';
        disableButtons(true);
    } else {
        timerInterval = setInterval(() => {
            count++;
            document.getElementById('counter').innerText = count;
        }, 1000);
        document.getElementById('pause').innerText = 'Pause';
        disableButtons(false);
    }
});

function disableButtons(disable) {
    document.getElementById('plus').disabled = disable;
    document.getElementById('minus').disabled = disable;
    document.getElementById('like').disabled = disable;
}

// Comment functionality
document.getElementById('commentButton').addEventListener('click', () => {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;

    if (commentText) {
        const li = document.createElement('li');
        li.innerText = commentText;
        document.getElementById('commentList').appendChild(li);
        commentInput.value = ''; // Clear input
    }
});