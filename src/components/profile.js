import './profile.scss';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../actions/actions';

import Input from './input';

// import user_img from '../assets/images/kamal_pandey.jpg'


class HowItWorks extends Component {

    constructor(){
        super();

        this.state={
            edit : false,
            formData : {}
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    };

    handleEdit () {
        this.setState({ edit: !this.state.edit });
    }
    
    handleFormChange (label, e){
        let formData = this.state.formData;
        formData[label] = e.target.value;

        console.log("====", label, e.target.value)


        this.setState({
            formData : formData
        })
    }

    handleUpdate (e) {
        console.log("this is e: ", e)

        e.preventDefault();
    }

    render() {
        // console.log('formData   ', this.props )
        return (
            <section id="profile">
                <div className={this.state.edit ? "edit-form-container" : "hidden"}>
                    <button className="close-form" onClick={ this.handleEdit }><i class="fa fa-times"></i></button>

                    <div className="form-container">
                        <form>
                            <h2>Update profile</h2>
                            <div className="input-wrapper">
                                <Input label="Profile Picture" type="file" input_id="dp" onFormChange={this.handleFormChange } />
                                <Input label="Name" type="text" input_id="name" onFormChange={this.handleFormChange }/>
                                <Input label="Occupation" type="text" input_id="occupation" onFormChange={this.handleFormChange }/>
                                <Input label="Course" type="text" input_id="course" onFormChange={this.handleFormChange }/>
                                <Input label="College" type="text" input_id="college" onFormChange={this.handleFormChange }/>

                                <div className="submit-btn-container">
                                    <button className="update-btn button" onClick={ () => this.props.handleUpdate(this.state.formData) }>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="user-profile-container">
                    <span><h1>Profile</h1><button className="edit-btn" onClick={this.handleEdit}>Edit</button></span>
                    <div className="profile-wrapper">
                        <div className="dp">
                            {/* <img alt="user" src={user_img} /> */}
                        </div>
                        <div className="user-info">
                                <span><i className="fa fa-user gray"></i><h2>Name</h2></span>
                                <span><i className="fa fa-at gray"></i><p>user@mail.com</p></span>
                                <span><i className="fa fa-mobile-phone gray"></i><p>1234567890</p></span>
                                <span><i className="fa fa-user-tie gray"></i><p>Student/Job Seeker</p></span>
                                <span><i className="fa fa-graduation-cap gray"></i><p>B.Tech</p></span>
                                <span><i className="fa fa-building gray"></i><p>College</p></span>
                        </div>
                    </div>
                    hereeeeee----------
                    {this.props.profileData}
                </div>


                <div className="user-performance-container">
                
                    <div className="performance-wrapper">
                        <div className="p1 performance-card">
                        <h3>PERFORMANCE</h3>
                            <span><p><i className="fa fa-trophy gold"></i>Scholarship winner:</p><span className="count">No</span></span>
                            <span><p><i className="fa fa-check-square green"></i>Slides completed:</p><span className="count">10</span></span>
                            <span><p><i className="fa fa-step-forward red"></i>Slides skipped:</p><span className="count">3</span></span>
                            <span><p><i className="fab fa-algolia blue"></i>Average time/slide:</p><span className="count"> 5 min</span></span>
                            <span><p><i className="fa fa-stopwatch purple"></i>Average time/exercise:</p><span className="count"> 7 min</span></span>
                        </div>
                        <div className="p2 performance-card">
                            <h3>YOUR SCORE</h3>
                            <h3 className="score-count">70</h3>
                            <span><p><i className="fa fa-check-circle green"></i>Correct</p><span className="count">7</span></span>
                            <span><p><i className="fa fa-times-circle red"></i>Inorrect</p><span className="count">3</span></span>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title : state.title.title,
        profileData : state.profileData
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(HowItWorks);