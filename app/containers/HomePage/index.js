import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from '../../store/reducers/getMoviesReducer';
import saga from '../../store/saga';
import HomePage from './HomePage';

//fetching data from api
import { requestMoviesData } from "../../store/actions/getMoviesActions"



const mapDispatchToProps = (dispatch) => ({
  
});

const mapStateToProps = state => ({ data: state.data});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
