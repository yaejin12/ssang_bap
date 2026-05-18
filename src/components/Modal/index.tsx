"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import IconButton from "@/components/Button/IconButton";
import useOutsideClick from "@/hooks/useOutsideClick";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** 모달 상단 타이틀. 없으면 닫기 버튼만 표시 */
  title?: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useOutsideClick(modalRef, onClose, isOpen);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-999999999">
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            ref={modalRef}
            className="absolute bottom-0 inset-x-0 bg-white rounded-tl-lg rounded-tr-lg pb-13 px-5.75"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="h-13 flex items-center justify-between">
              {title ? (
                <h2 className="text-base font-extrabold">{title}</h2>
              ) : (
                <span />
              )}
              <IconButton
                icon="close"
                size={15}
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default Modal;
