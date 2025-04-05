"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "~/components/Modal";

export default function CookingSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    fileName: string,
  ) => {
    e.preventDefault();
    console.log("Clicked element:", e.currentTarget);
    setModalImage(fileName);
  };

  return (
    <section className="mx-auto py-16 md:max-w-6xl md:py-24">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className="col-span-1 hidden lg:block">
          <a href="#" onClick={(e) => handleClick(e, "/pot.png")}>
            <Image
              src="/pot.png"
              data-file-path="/pot.png"
              alt="Pot cooking over fire"
              width={372}
              height={600}
              className="animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
        </div>

        <div className="col-span-1 hidden gap-2 lg:grid">
          <a href="#" onClick={(e) => handleClick(e, "/chef.png")}>
            <Image
              src="/chef.png"
              alt="Chef experimenting with food"
              width={372}
              height={295}
              className="animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
          <a href="#" onClick={(e) => handleClick(e, "/eggs.png")}>
            <Image
              src="/eggs.png"
              alt="Egg yolks in different stages"
              width={372}
              height={295}
              className="animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
        </div>

        <div className="col-span-1 flex flex-col lg:pl-7.5">
          <div className="pb-2.5">
            <h1 className="animate-fade-left animate-once animate-duration-1000 animate-delay-700 animate-ease-in-out mx-auto w-fit px-4 pb-7.5 text-center md:border-b md:px-0 lg:text-left">
              WHAT DOES COOKING MEAN?
            </h1>
            <div className="animate-fade animate-once animate-duration-1000 animate-delay-800 mb-10 h-0.5 w-16 justify-self-center bg-gray-400 md:hidden"></div>
            <div className="hidden gap-2 px-16 pt-7.5 md:grid md:grid-cols-2 lg:hidden">
              <div className="col-span-1">
                <a href="#" onClick={(e) => handleClick(e, "/pot.png")}>
                  <Image
                    src="/pot.png"
                    alt="Pot cooking over fire"
                    width={372}
                    height={600}
                    className="animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>
              </div>
              <div className="col-span-1 grid gap-2">
                <a href="#" onClick={(e) => handleClick(e, "/chef.png")}>
                  <Image
                    src="/chef.png"
                    alt="Chef experimenting with food"
                    width={372}
                    height={295}
                    className="animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>
                <a href="#" onClick={(e) => handleClick(e, "/eggs.png")}>
                  <Image
                    src="/eggs.png"
                    alt="Egg yolks in different stages"
                    width={372}
                    height={295}
                    className="animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>
              </div>
            </div>
            <a
              href="#"
              className="block md:hidden"
              onClick={(e) => handleClick(e, "/pot.png")}
            >
              <Image
                src="/chef.png"
                alt="Chef experimenting with food"
                width={372}
                height={295}
                className="animate-fade animate-once animate-duration-1000 animate-delay-300 w-full object-cover"
              />
            </a>
            <p className="animate-fade animate-once animate-duration-1000 animate-delay-900 animate-ease-in-out px-4 pt-7.5 leading-relaxed font-light text-gray-300 md:px-16 lg:px-0">
              Is it simply applying heat to a food product? A way of making
              certain food safe to eat? Or a way to create flavour and make food
              more appealing? This is just part of what Hervé This, the father
              of molecular gastronomy, has dedicated his life to finding out. We
              spoke to him to find out what his experiments have told him. And
              in the process even discovered the secret to cooking the perfect
              egg...
            </p>
          </div>

          <a
            href="#"
            className="block pt-7.5 pb-2.5 md:hidden"
            onClick={(e) => handleClick(e, "/eggs.png")}
          >
            <Image
              src="/eggs.png"
              alt="Egg yolks in different stages"
              width={372}
              height={295}
              className="animate-fade animate-once animate-duration-1000 animate-delay-500 w-full object-cover"
            />
          </a>
          <div className="animate-fade animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out px-4 pt-7.5 md:px-16 lg:px-0">
            <p className="text-sm font-bold text-red-500 uppercase">
              THE PERFECT EGG
            </p>
            <p className="text-xl font-medium">
              Keep water between 67 and 68°C for a flavourful, tender yolk
            </p>
          </div>
        </div>
      </div>
      {modalImage && (
        <Modal imageUrl={modalImage} onClose={() => setModalImage(null)} />
      )}
    </section>
  );
}
