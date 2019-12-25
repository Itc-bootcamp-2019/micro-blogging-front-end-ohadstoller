import React from 'react';

class NewProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
    }

    handleNameChange(event) {
        this.setState({
            userName: event.target.value
        });
    }

    save() {
        console.log("saving");
        localStorage.setItem('userName', this.state.userName)
    }

    clearContents = (element) => {
        this.setState({
            userName: ''
        });
    }

    render() {
        return (
            <div>
                <div className="profile-header">
                    Profile
                </div>

                <div className="user-name-placer">
                    {localStorage.getItem('userName')}
                </div>

                <textarea
                    className="user-name-text-area"
                    value={this.state.userName}
                    type="text"
                    placeholder="type your user name.."
                    onChange={event => this.handleNameChange(event)}
                    rows="2" cols="50"
                />

                <button
                    className="save-button"
                    onClick={
                        () => { this.save() }
                    }
                > Save
                </button>

            </div>

        )
    }
}

export default NewProfile;



