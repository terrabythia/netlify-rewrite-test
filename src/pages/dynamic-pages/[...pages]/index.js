import Link from "next/link";

const paramOptions = ['one', 'two', 'three'];

const Page = ({ query, params }) => {
  const currentParam = params.pages[params.pages.length - 1];
  const nextParam = paramOptions[(paramOptions.indexOf(currentParam) + 1) % paramOptions.length];
  return (
    <div>
      <h1>Page</h1>
      <p>I am rendered server side (SSR)</p>
      <Link href={`/render/ssr/${nextParam}`}>
        Go to /render/ssr/{nextParam}
      </Link>
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