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

    const handleClickOutside = (e: MouseEvent) => {
      // Check if the click is outside the image container
      const target = e.target as HTMLElement;
      if (target.classList.contains("modal-backdrop")) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    window.addEventListener("mousedown", handleClickOutside);

    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop animate-fade animate-once animate-duration-300 animate-ease-in fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/90 p-4">
      <div className="animate-zoom-in animate-once animate-duration-500 animate-ease-out relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-all duration-300 hover:rotate-90 hover:bg-black/70"
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

        <div className="rounded-lg bg-black p-2 shadow-2xl">
          <Image
            src={imageUrl}
            alt="Modal image"
            width={1200}
            height={800}
            className="h-auto max-h-[80vh] w-full rounded object-contain transition-all"
            priority
          />
        </div>
      </div>
    </div>
  );
}
