import Banner from './components/banner';
import NewProduct from './components/NewProduct';
import NewCollection from './components/NewCollection';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Brand from '../../components/Brand';
import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

export default function Home(params) 
{
    let [state, setState] = useState({
        online:[],
        offline:[],
        loading:true
    })
    useEffect(()=>{
        fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/courses')
        .then(res => res.json())
        .then((res)=>{
            setState({
                ...res,
                loading: false
            })
        })
    },[])
    if(state.loading) return 'Loading...'
    return(
        <>
        <Banner/>
        <NewProduct/>
        <NewCollection online={state.online} offline={state.offline}/>
        <Blog/>
        <Testimonial/>
        <Brand/>
        </>
    )
};