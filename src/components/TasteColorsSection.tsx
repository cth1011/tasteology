"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ImageModal from "~/components/Modal";

export default function TasteColorsSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isVisible, setIsVisible] = useState({
    title: false,
    items: [false, false, false],
  });

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    fileName: string,
  ) => {
    e.preventDefault();
    const img = e.currentTarget.querySelector("img");
    console.log("Clicked element:", e.currentTarget);
    setModalImage(fileName);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check which element triggered the intersection
          if (entry.target === titleRef.current) {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, title: true }));
            }
          } else {
            // Find which item triggered the intersection
            const index = itemRefs.current.findIndex(
              (ref) => ref === entry.target,
            );
            if (index !== -1 && entry.isIntersecting) {
              setIsVisible((prev) => {
                const newItems = [...prev.items];
                newItems[index] = true;
                return { ...prev, items: newItems };
              });
            }
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    // Observe title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe each item
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
    <section
      ref={sectionRef}
      className="mx-auto min-h-screen max-w-6xl py-16 md:py-24"
    >
      <div className="mb-16 text-center">
        <h1
          ref={titleRef}
          className={`mx-auto mb-6 w-fit md:border-b md:pb-7.5 ${
            isVisible.title
              ? "animate-fade-down animate-once animate-duration-1000 animate-delay-100 animate-ease-in"
              : "opacity-0"
          }`}
        >
          TASTE THE COLOURS
        </h1>
        <div className="mx-auto h-0.5 w-16 bg-gray-400 md:hidden"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:px-16 lg:px-4">
        {colorTastes.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`group text-center ${
              isVisible.items[index]
                ? `animate-fade-up animate-once animate-duration-1000 animate-delay-${(index + 1) * 200} animate-ease-in`
                : "opacity-0"
            }`}
          >
            <a
              href="#"
              className="mb-6 block overflow-hidden"
              onClick={(e) => handleClick(e, item.image)}
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
