document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends)
    {
        friend.style.backgroundColor = 'steelblue'
    }
})

document.getElementById('center-btn').addEventListener('click', function(){
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center';
})

document.getElementById('add-new-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend')
    friend.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Something new Added</p>
    `
    friendContainer.appendChild(friend)
})