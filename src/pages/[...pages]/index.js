const Page = () => {
  return (
    <div>
      <h1>Page</h1>
      <p>I am rendered statically (ISR)</p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Page;