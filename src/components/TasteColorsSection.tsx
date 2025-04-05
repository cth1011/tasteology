"use client";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "~/components/Modal";

export default function TasteColorsSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const img = e.currentTarget.querySelector("img");
    if (img) {
      setModalImage(img.src);
    }
  };

  const colorTastes = [
    {
      color: "RED",
      image: "/red.png",
      description:
        "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
    },
    {
      color: "Green",
      image: "/green.png",
      description:
        "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",
    },
    {
      color: "White",
      image: "/white.png",
      description:
        "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
    },
  ];

  return (
    <section className="mx-auto min-h-screen max-w-6xl py-16 md:py-24">
      <div className="mb-16 text-center">
        <h1 className="mx-auto mb-6 w-fit md:border-b md:pb-7.5">
          TASTE THE COLOURS
        </h1>
        <div className="mx-auto h-0.5 w-16 bg-gray-400 md:hidden"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:px-16 lg:px-4">
        {colorTastes.map((item, index) => (
          <div key={index} className="group text-center">
            <a
              href="#"
              className="mb-6 block overflow-hidden"
              onClick={handleClick}
            >
              <Image
                src={item.image}
                alt={`${item.color} food on spoon`}
                width={375}
                height={300}
                className="w-full"
              />
            </a>
            <h2 className="mb-3 text-xl font-bold">{item.color}</h2>
            <p className="px-4 font-light text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
      {modalImage && (
        <ImageModal imageUrl={modalImage} onClose={() => setModalImage(null)} />
      )}
    </section>
  );
}
