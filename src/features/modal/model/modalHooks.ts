import { useCallback, useEffect, useRef, useState } from 'react';

export function useToggle(initial: boolean = false) {
    const [state, setState] = useState(initial);
    const open = useCallback(() => setState(true), []);
    const close = useCallback(() => setState(false), []);
    return { state, open, close };
}

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback();
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [callback]);

    return ref;
}

export function useModal() {
    const { state: isOpen, open, close } = useToggle(false);
    const [resolveFn, setResolveFn] = useState<(value: boolean) => void>(() => {});

    const confirm = useCallback(() => {
        return new Promise<boolean>((resolve) => {
            setResolveFn(() => resolve);
            open();
        });
    }, [open]);

    const onConfirm = () => {
        close();
        resolveFn(true);
    };

    const onCancel = () => {
        close();
        resolveFn(false);
    };

    return { isOpen, onConfirm, onCancel, confirm };
}
