import { connect, Connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const mapStateToProps = (state) => {
    return{
        cars: state.cars 
        //  cars aka list of cars, state.car aka redux folder state.js file --> cars
    }
}

export default connect(mapStateToProps)(Dashboard); 