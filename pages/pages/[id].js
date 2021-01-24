import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageHead from '../../components/pageHead/PageHead';
import Head from 'next/head';
import Loader from '../../components/loader/Loader';
import { pagesStyle } from './pages.module.scss';

const PageID = ({ state }) => {
    // const route = useRouter();
    // let { id } = route.query;
    // const [state, setState] = useState(null);

    // useEffect(() => {
    //     if (!id) return
    //     fetch(`https://shiramram-66360a.ingress-alpha.easywp.com/wp-json/wp/v2/pages/${id}`)
    //         .then(resp => resp.json())
    //         .then(data => setState(data));
    // }, [id])

    return (
        // !state ? <Loader /> :
        <div className={pagesStyle}>
            <PageHead title={state.title.rendered} description={state.excerpt.rendered} />
            <h1>{state.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: state.content.rendered }}></div>
        </div>
    )
}

PageID.getInitialProps = async (context) => {
    let { id } = context.query;

    let resp = await fetch(`https://shiramram-66360a.ingress-alpha.easywp.com/wp-json/wp/v2/pages/${id}`);
    let data = await resp.json();

    return {
        state: data, // will be passed to the page component as props
    }
}

export default PageID;