export function Modal({ isOpen, onConfirm, onCancel, children, modalRef }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={modalRef} className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm">
                <div className="mb-6 text-center">{children}</div>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                    >
                        취소
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}
