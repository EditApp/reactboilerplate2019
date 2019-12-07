import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from '../../store/reducers/getMoviesReducer';
import saga from '../../store/saga';
import HomePage from './HomePage';
/// NEW STORE 
import { moviesList } from "../../store/actions/movies_actions";
import { bindActionCreators } from "redux";

function mapStateToProps(state){
    console.log('state')
    console.log(state)
    return {
        films:state.films
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({moviesList},dispatch)
}
//  NEW  STORE


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
