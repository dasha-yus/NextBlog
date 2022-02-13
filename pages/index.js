import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeturedPosts } from "../lib/posts-util";
import Hero from "./../components/home-page/hero";

const HomePage = (props) => {
  <>
    <Hero />
    <FeaturedPosts posts={props.posts} />
  </>;
};

export function getStaticProps() {
  const featuredPosts = getFeturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
