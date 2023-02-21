const friendsEven = (friends) => {
    const evenFriends = [];
    for(const friend of friends)
    {
        if(friend.length % 2 == 0)
        {
            evenFriends.push(friend);
        }
    }
    return evenFriends;
}

const friends = ['kareem', 'nayika', 'rohim', 'chodna'];
console.log(friendsEven(friends));