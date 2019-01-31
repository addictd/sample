import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../actions/actions';
import ProfileSection from '../components/profile';

class App extends React.Component{
    render() {
        console.log(this.props);
        return(
            <div>
                <h1 onClick={() => this.props.toggleAction()}>{this.props.title}</h1>
                <h1 onClick={ () => this.props.myAction() }>custom button</h1>
                <ProfileSection />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title : state.title.title
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);

