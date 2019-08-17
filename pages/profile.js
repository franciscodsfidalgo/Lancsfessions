import React, { Component } from "react";
import Layout from "../components/layout";
import { connect } from 'react-redux';
import { SignOut } from '../actions/authActions';
import Router from 'next/router'



class Profile extends Component{
  constructor(props) {
    super(props);
    this.onClickLogOut=this.onClickLogOut.bind(this);
  }

  onClickLogOut(){
    this.props.SignOut();
  }

  render(){
    return(
        <div>
          <Layout>
            <div className='container-flex'>
              <div className='row justify-content-center'>
                <button onClick={this.onClickLogOut}>Log Out</button>
              </div>
            </div>
            <style jsx>{`
                .container-flex {
                padding: 6%;
                }
              `}
            </style>
          </Layout>
        </div>
      )
    }
}
  

const mapStateToProps = state => ({
  auth: state.firebase.auth
})

const mapDispatchToProps = (dispacth) => {
  return {
    SignOut: ()=>dispacth(SignOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
