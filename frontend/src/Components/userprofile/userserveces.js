import React from 'react'
import UserCard from './usercard'
import store from "../../store"
import './user.css'
import { userServices } from '../../store/actions/userActions'




class UserServeces extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserService: []
        }
    }


    componentDidMount() {
        var { userid } = store.getState().UserReducer
        var id = JSON.parse(userid)
        store.dispatch(userServices(id))
        this.setState({
            UserService: JSON.parse(store.getState().UserReducer.userServices)
        })

    }


    render() {
        return (
            <div className="profile-body">
                <div className="profile-services tap">
                    {
                        this.state.UserService.length !== 0 ?
                            this.state.UserService.map((ser, id) => {
                                return <UserCard ser={ser} key={id} />

                            })
                            : <div className='user__ser'><h3>No Services</h3></div>
                    }
                </div>
            </div>
        )
    }


}

export default UserServeces