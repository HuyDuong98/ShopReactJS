import Banner from './components/banner';
import NewProduct from './components/NewProduct';
import NewCollection from './components/NewCollection';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Brand from '../../components/Brand';

export default function Home(params) {
    return(
        <>
        <Banner/>
        <NewProduct/>
        <NewCollection/>
        <Blog/>
        <Testimonial/>
        <Brand/>
        </>
    )
};