import PageHead from '../../components/pageHead/PageHead';
import PostItem from '../../components/posts/PostItem';
import { blogPage, postsSection } from './blog.module.scss';

const Blog = ({ posts }) => {
    return (
        <div className={blogPage}>
            <PageHead title={"הבלוג"} description={"ברוכות הבאות לבלוג שלי"} />
            <h1>פוסטים אחרונים</h1>
            <div className={postsSection}>
                {posts.map(post => <PostItem post={post} />)}
            </div>
        </div>
    )
}

Blog.getInitialProps = async (ctx) => {
    let resp = await fetch('https://shiramram-66360a.ingress-alpha.easywp.com/wp-json/wp/v2/posts?_embed');
    let data = await resp.json();

    return {
        posts: data
    }
}

export default Blog;