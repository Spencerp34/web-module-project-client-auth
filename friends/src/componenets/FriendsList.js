import axios from 'axios';
import React from 'react';
import axiosWithAuth from './utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = { 
        friends: [{
            id: 1,
            name: 'Rachel Green',
            age: 30,
            email: 'rachel@friends.com'
          },
          {
            id: 2,
            name: 'Joey Tribbiani',
            age: 34,
            email: 'joey@friends.com'
          },
          {
            id: 3,
            name: 'Chandler Bing',
            age: 32,
            email: 'chandler@friends.com'
          },
          {
            id: 4,
            name: 'Ross Geller',
            age: 32,
            email: 'ross@friends.com'
          },
          {
            id: 5,
            name: 'Monica Bing',
            age: 31,
            email: 'monica@friends.com'
          },
          {
            id: 6,
            name: 'Phoebe Buffay-Hannigan',
            age: 30,
            email: 'phoebe@friends.com'
          }]
    };

    componentDidMount() {
        // this.getData();
    }

    getData = () => {
        axios
            .get('http://localhost:5000/api/friends')
            .then(res => {
                // console.log(res.data)
                this.setState = {
                    ...this.state,
                    friends: res.data
                }
            })
            .catch(err => {
                // console.log(err)
            })
        
    }

    render() {

        

        return(
            <div className='friends-list'>
                {this.state.friends.map((friend) => {
                    // key={friend.id}
                    return(
                        <div> {friend.name } </div>
                    )
                    
                })}
                
            </div>
        )
    }

}

export default FriendsList;