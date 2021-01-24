import Head from 'next/head';

const PageHead = ({ title, description }) => (
    <Head>
        <title>תחייכי את זה | {title}</title>
        <meta name="description" content={description} />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta charset="UTF-8" />
    </Head>
)

export default PageHead;