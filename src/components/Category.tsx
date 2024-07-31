import Link from 'next/link';

export default function Category() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Chủ đề</h2>
      <div className="flex flex-wrap gap-2 dark:text-white font-light">
        <Link href="#" className="text-md border rounded-full px-3 py-2 max-w-fit">
          Category
        </Link>
        <Link href="#" className="text-md border rounded-full px-3 py-2 max-w-fit">
          Category
        </Link>
        <Link href="#" className="text-md border rounded-full px-3 py-2 max-w-fit">
          Category
        </Link>
        <Link href="#" className="text-md border rounded-full px-3 py-2 max-w-fit">
          Category
        </Link>
        <Link href="#" className="text-md border rounded-full px-3 py-2 max-w-fit">
          Categoryaasdsd
        </Link>
      </div>
    </div>
  );
}
