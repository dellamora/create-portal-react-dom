import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import Image from "next/image";
import { motion } from "framer-motion";
import CloseIcon from "../closeIcon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props): JSX.Element => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <></>;
  }
  return createPortal(
    <>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none fixed z-50 flex h-screen  w-screen  items-center justify-center"
          >
            <div className="pointer-events-auto relative flex h-auto max-h-screen w-full flex-col overflow-y-hidden  rounded-lg bg-[#1E1E1E]   md:w-3/5 lg:max-h-[90vh] lg:max-w-7xl ">
              <CloseIcon
                className="absolute top-0 right-0 block md:hidden"
                onClick={() => {
                  onClose();
                }}
              />
              <div className="flex grow flex-col overflow-y-auto p-4 pb-24 text-white">
                <h1 className=" text-bold mb-5 text-3xl font-bold">
                  Hoje vamos falar sobre um recurso bem legal do React: o
                  createPortal.
                </h1>
                <span className=" text-justify text-lg ">
                  Você já teve aquele componente que precisava ser renderizado
                  em um lugar específico fora da árvore de componentes, mas não
                  queria bagunçar toda a estrutura da sua aplicação? <br /> Pois
                  é, o createPortal é a solução para esses casos! Com ele, você
                  pode renderizar componentes em um local diferente do
                  componente pai, mantendo a sua árvore de componentes
                  organizada. <br /> Usar o createPortal é bem simples.
                  Primeiro, você cria um elemento de destino no HTML, e depois
                  passa esse elemento como o primeiro argumento da chamada da
                  função createPortal. <br /> O segundo argumento é o componente
                  que você deseja renderizar dentro desse elemento de destino. E
                  pronto, o React cuidará do resto! <br /> O createPortal é
                  perfeito para componentes como modais, tooltips ou context
                  menus, que precisam ser renderizados em um local específico
                  fora da árvore de componentes. <br /> Se você deseja ter uma
                  aplicação React organizada e clara, e precisa renderizar
                  componentes em lugares específicos fora da árvore de
                  componentes, o createPortal é a solução perfeita para você!
                </span>
              </div>
            </div>
          </motion.div>
          <Backdrop
            onClose={() => {
              onClose();
            }}
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
