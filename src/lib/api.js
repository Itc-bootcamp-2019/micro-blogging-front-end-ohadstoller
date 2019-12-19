import axios from 'axios';

export function postTweetOnline(tweet) {

    return axios.post("https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet", {
        "tweet": {
            content: tweet.content, userName: tweet.userName,
            date: new Date().toISOString(),
        }
    });
}

export function getOnlineTweets() {

    return (axios.get("https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet")
       
    )
    

};


export function getOnlineTweets2() {
    // We're using axios instead of Fetch
    return axios.get("https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet")
        // Once we get a response, we'll map the API endpoints to our props
        .then(response =>
            response.data.results.map(user => ({
                name: `${user.name.first} ${user.name.last}`,
                username: `${user.login.username}`,
                email: `${user.email}`,
                image: `${user.picture.thumbnail}`
            }))
        )
        // Let's make sure to change the loading state to display the data
        .then(users => {
            this.setState({
                users,
                isLoading: false
            });
        })
        // We can still use the `.catch()` method since axios is promise-based
        .catch(error => this.setState({ error, isLoading: false }));
}
