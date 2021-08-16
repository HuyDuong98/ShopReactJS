import { connect } from 'react-redux';
import Shop from '../pages/shop';
import { setProducts, fetchProducts } from '../redux/product'

const mapStateToProps = (state) => {
    return {
        products: state.products.items,
    }
}

const mapActionToProps = dispatch => ({
    setProducts: (items) => dispatch(setProducts(items)),
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps,mapActionToProps)(Shop)