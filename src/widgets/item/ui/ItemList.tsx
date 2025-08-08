'use client';

import { useModal } from '@/features/modal';
import { useOutsideClick } from '@/features/modal';
import { Modal } from '@/widgets/modal';
import { useState } from 'react';

type Item = { id: number; name: string };

const initialItems: Item[] = [
    { id: 1, name: '첫 번째 아이템' },
    { id: 2, name: '두 번째 아이템' },
    { id: 3, name: '세 번째 아이템' },
];

export function ItemList() {
    const [items, setItems] = useState<Item[]>(initialItems);
    const { isOpen, onConfirm, onCancel, confirm } = useModal();
    const modalRef = useOutsideClick<HTMLDivElement>(() => {
        if (isOpen) onCancel();
    });

    const handleDeleteClick = async (id: number) => {
        const ok = await confirm();
        if (ok) {
            setItems((prev) => prev.filter((item) => item.id !== id));
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">아이템 목록</h2>

            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                        <span className="text-gray-800">{item.name}</span>
                        <button
                            onClick={() => handleDeleteClick(item.id)}
                            className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
                        >
                            삭제
                        </button>
                    </div>
                ))}
                {items.length === 0 && (
                    <div className="text-center text-gray-500 py-4">No Items</div>
                )}
            </div>

            <Modal isOpen={isOpen} onConfirm={onConfirm} onCancel={onCancel} modalRef={modalRef}>
                <p className="text-center text-lg font-medium">정말 이 항목을 삭제하시겠습니까?</p>
            </Modal>
        </div>
    );
}
