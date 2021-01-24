import Link from 'next/link';
import { postItemStyle, postImage } from './posts.module.scss'; 

const PostItem = ({ post }) => (
    <Link href={`/blog/${post.id}`}>
    <div className={postItemStyle}>
        <div className={postImage} style={createStyleObject(post._embedded)}>
        </div>
        <div>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
            <p>{post.date}</p>
        </div>
    </div>
    </Link>
)

function createStyleObject(embedded){
    if (embedded && embedded["wp:featuredmedia"])
        return {
            backgroundImage: `url(${embedded["wp:featuredmedia"][0].source_url})`,
            backgroundSize: 'cover',
            BackgroundPosition: 'center'
        };

    return {};
}


export default PostItem;