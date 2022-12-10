import React from 'react'
import Anonymous from './Anonymous';
import IsLoggedIn from './IsLoggedIn';
function Home(props){
    return props.isLoggedIn ? <IsLoggedIn/> : <Anonymous/>
};
export default Home;
