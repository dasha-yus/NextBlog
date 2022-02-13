import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeturedPosts } from "../lib/posts-util";
import Hero from "./../components/home-page/hero";

const HomePage = (props) => {
  <>
    <Head>
      <title>Dasha` Blog</title>
      <meta name="description" content="This is my blog" />
    </Head>
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
