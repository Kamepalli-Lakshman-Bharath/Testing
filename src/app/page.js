import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="text-[32px] underline text-blue-500 text-center font-bold">
        Hello world
      </div>
      <Link
        className="border p-2 ml-[50px] hover:text-white hover:bg-green-500 rounded-[16px] "
        href="/homepage"
      >
        Go to home
      </Link>
      <Link
        className="border p-2 ml-[50px] hover:text-white hover:bg-green-500 rounded-[16px] "
        href="/aboutPage"
      >
        Go to about
      </Link>
    </>
  );
}
