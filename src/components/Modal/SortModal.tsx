"use client";

import Image from "next/image";
import Modal from ".";
import type { SortOption } from "@/types/sort";

export type { SortOption };

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  options: SortOption[];
  selectedValue: string;
  /** 항목 선택 시 호출. 선택 즉시 모달을 닫는다 */
  onSelect: (value: string) => void;
}

function SortModal({
  isOpen,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
}: SortModalProps) {
  const handleSelect = (value: string) => {
    onSelect(value);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <ul>
        {options.map((option) => {
          const isActive = selectedValue === option.value;
          return (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => handleSelect(option.value)}
                className="h-12.5 w-full flex items-center gap-2"
              >
                {/* 선택된 항목에만 체크 아이콘 표시, 미선택 항목은 아이콘 너비만큼 빈 공간 유지 */}
                {isActive ? (
                  <Image src="/img/check.svg" alt="" width={14} height={14} />
                ) : (
                  <span className="w-4 shrink-0" />
                )}
                <span className={`text-sm ${isActive ? "font-extrabold" : ""}`}>
                  {option.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
}

export default SortModal;
