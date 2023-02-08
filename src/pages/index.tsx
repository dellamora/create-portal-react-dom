import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b to-[#131313] from-[#1E1E1E]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Desvendando o <span className="text-[#F83941]">createPortal</span>   do React
          </h1>
          <button className="font-semibold py-[10px] px-[20px] border rounded border-[#F83941] transition-colors hover:bg-[#f8394355] text-white ">Modal</button>
        </div>
      </main>
    </>
  );
};

export default Home;
