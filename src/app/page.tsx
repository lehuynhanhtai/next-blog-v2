interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}
export default function Home({ searchParams }: IProps) {
  return <div>{searchParams?.message && <p className="text-center text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>}</div>;
}
