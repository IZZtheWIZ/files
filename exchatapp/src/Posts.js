const posts = [];

const addPost = (data) => {
    posts.push(data);
    return data;
}

const getChannelPosts = (channel)  =>
    posts.filter((post) => post.channel === channel);

module.exports = { addPost, getChannelPosts};