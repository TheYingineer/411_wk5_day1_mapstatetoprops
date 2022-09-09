import { connect, Connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state) => {
    return{
        cars: state.cars,
        //  cars aka list of cars, state.car aka redux folder state.js file --> cars
        username: state.username,
        email: state.email
    }
}

export default connect(mapStateToProps)(Home); //Here we are exporting the connect function which we imported where it connects the the two things together, component to props, then after this function is loaded, we are going to preload the “partial application”, second function call “Home.”
