import Link from 'next/link';

export default function Category() {
  return (
    <div className="flex flex-wrap gap-2 dark:text-white font-light">
      <Link href="#" className="text-md border rounded-full px-3 py-2 max-w-fit">
        Category
      </Link>
    </div>
  );
}
