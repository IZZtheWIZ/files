const channels = [
    {
        id: 1,
        name: "comments",
        users: [],  
    }, 
];

const addUserToChannel = (channel, nickname) => {
    channels.filter((c) => c.name === channel).map((c) => {
        c.users.push(nickname);
        return c;
    });
}

module.export = {channels, addUserToChannel};