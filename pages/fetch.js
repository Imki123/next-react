// pages/fetch.js

import Link from 'next/Link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

export default function Fetch(props) {
    let shows = props.shows.map(show => (
            <li key={show.id}>
                <Link href={`/p2/[batmans]?title=${show.name}`}
                    as={`/p2/${show.name}`}>
                    <a>{show.name}</a>
                </Link>
            </li>
        ))
    return (
        <div>
            <Layout>
                <h1>Batman TV Shows</h1>
                <ol>
                    {shows}
                </ol>
            </Layout>
            <style jsx>{`
            {
            }
            `}</style>
        </div>
    );
}

Fetch.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};