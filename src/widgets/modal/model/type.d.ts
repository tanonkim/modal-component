type ModalProps = {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    children: ReactNode;
    modalRef?: RefObject<HTMLDivElement | null>;
};
