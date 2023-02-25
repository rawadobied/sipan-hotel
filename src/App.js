import React from 'react';
import {BrowserRouter as Router ,Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import './ministyle.scss'
import Header from "./header";
import DiscoverOurStory from "./component/discover";
import Recipe from "./component/recipe";
import PerfectBlend from "./component/perfectBlend";
import Footer from "./component/footer";
import Rooms from "./component/rooms";
import GalleryPage from "./galleryPage";
import {GlobalProvider} from "./context/globalContext";
import OpenImg from "./component/openImg";
import SingleRoom from "./component/singleRoom";
import RoomTypes from "./component/roomType";
import ContactUs from "./component/contactUs";
import AllRooms from "./component/allRooms";


const App = (props)=> {
  return (
      <GlobalProvider>
    <Router>
      <OpenImg/>
      <Switch>
        <Redirect exact from={`/`} to={`/home`}/>
        <Route exact path={`/home`}>
          <Header hero={true}/>
          <DiscoverOurStory/>
          <Rooms single={true}/>
          <Recipe/>
          <PerfectBlend/>
        </Route>
        <Route exact path={`/gallery`} >
          <Header hero={false}/>
          <GalleryPage/>
        </Route>
        <Route exact path={`/rooms`} >
          <Header hero={false}/>
          <AllRooms/>
        </Route>
        <Route exact path={`/contactus`} >
          <Header hero={false}/>
          <ContactUs/>
        </Route>
        <Route exact path={'/room/:Id'}>
          <SingleRoom />
          <Header hero={false}/>
        </Route>
        {/*  /!*<Route component={GalleryPage}/>*!/*/}
      </Switch>
        <Footer/>
    </Router>
      </GlobalProvider>
  );
}

export default App;
