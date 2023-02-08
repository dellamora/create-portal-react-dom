import { type NextPage } from "next";
import { useState } from "react";
import Modal from "../components/modal";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b to-[#131313] from-[#1E1E1E]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Desvendando o <span className="text-[#F83941]">createPortal</span>   do React
          </h1>
          <button 
           onClick={() => setIsOpen(true)}
           className="font-semibold py-[10px] px-[20px] border rounded border-[#F83941] transition-colors hover:bg-[#f8394355] text-white "
          >
            Modal
          </button>
        </div>
        <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      </main>
    </>
  );
};

export default Home;
