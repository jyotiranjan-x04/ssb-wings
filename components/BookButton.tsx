"use client";

import { useContactModal } from "./ModalProvider";

export default function BookButton({
  children = "Book Free Counselling",
  className = "btn btn-gold btn-shine",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { open } = useContactModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
