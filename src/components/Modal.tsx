"use client";
import { useEffect } from "react";
import Image from "next/image";

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function Modal({ imageUrl, onClose }: ModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black p-4">
      <div className="animate-fadeIn relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="bg-opacity-50 hover:bg-opacity-70 absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-opacity"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="rounded-lg bg-black p-2">
          <Image
            src={imageUrl}
            alt="Modal image"
            width={1200}
            height={800}
            className="h-auto max-h-[80vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
