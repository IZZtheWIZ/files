const Vote = (vote) => {
        return (
            <div>
                <input value="1" id="number"/>
                <button className="up" onClick={incrementValue}>Up</button>
                <button className="down" onClick={decrementValue}>Down</button>
            </div>
        )
}

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}
// const votes = [];

// const addVote = (data) => {
//     votes.push(data);
//     return data;
// };

// const getChannelVote = (channel) =>
//     votes.filter((vote) => vote.channel === channel);
export default Vote;
//module.exports = {addVote, getChannelVote, Vote};