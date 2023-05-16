const Page = ({ params }) => {
  return (
    <div>
      <h1>Page</h1>
      <p>I am rendered statically (ISR)</p>
      <pre>{
        JSON.stringify({
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
      params: context.params
    }
  }
}

export default Page;