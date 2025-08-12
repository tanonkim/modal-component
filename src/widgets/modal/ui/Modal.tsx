'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { usePhotoStore } from '../model/store';

export function Modal({ children, id }: { children: React.ReactNode; id: string }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    function handleDelete() {
        usePhotoStore.getState().deletePhoto(id);
    }

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
            onClick={onDismiss}
        >
            <dialog
                ref={dialogRef}
                className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/50"
                onClose={onDismiss}
            >
                <div className="flex justify-between">
                    <button
                        onClick={onDismiss}
                        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                    {children}
                    <button onClick={handleDelete} className="pr-5">
                        해당 아이템 삭제하기
                    </button>
                </div>
            </dialog>
        </div>,
        document.getElementById('modal-root')!
    );
}
