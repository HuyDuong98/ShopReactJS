import { connect } from 'react-redux';
import Category from '../pages/shop/components/Category';
import { setCategory, fetchCategory } from '../redux/category'

const mapStateToProps = (state) => {
    return {
        category: state.category.items
    }
}

const mapActionToProps = dispatch => ({
    setCategory: (items) => dispatch(setCategory(items)),
    fetchCategory: () => dispatch(fetchCategory())
})

export default connect(mapStateToProps,mapActionToProps)(Category)