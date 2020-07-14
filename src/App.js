import React, { Component } from 'react';
import classes from './App.css';
class App extends Component {
    render(){
        return(
            <div className={classes.AppContainer}>
                <div className={classes.MessageBox}>
                    <h1 className={classes.HeadingPriamryMain}>Please do vist after few days</h1>
                    <h2 className={classes.HeadingPriamrySub}>Website is under construction ...</h2>
                </div>
            </div>
        )
    }
}
export default App;