const Page = ({ query, params }) => {
  return (
    <div>
      <h1>Page</h1>
      <p>I am rendered server side (SSR)</p>
      <pre>{JSON.stringify({
        query,
        params
      }, null, 2)}</pre>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query,
      params: context.params
    }
  }
}

export default Page;