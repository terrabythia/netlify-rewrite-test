const Page = ({ query, params }) => {
  return (
    <div>
      <h1>Page</h1>
      <p>I am rendered statically (SSG)</p>
      <pre>{
        JSON.stringify({
          query,
          params
        }, null, 2)
      }</pre>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  return {
    props: {
      query: context.query || null,
      params: context.params
    },
    revalidate: 300,
  }
}

export default Page;