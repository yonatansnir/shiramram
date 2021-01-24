import { pages } from './blog.module.scss';

const PostID = ({ post }) => (
    <div className={pages}>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </div>
)

PostID.getInitialProps = async (context) => {
    let { id } = context.query;
    let resp = await fetch(`https://shiramram-66360a.ingress-alpha.easywp.com/wp-json/wp/v2/posts/${id}?_embed`);
    let data = await resp.json();

    return {
        post: data
    }

}

export default PostID;