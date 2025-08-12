// store.ts
import { create } from 'zustand';

type Store = {
    deletedPhotos: string[];
    deletePhoto: (id: string) => void;
};

export const usePhotoStore = create<Store>((set) => ({
    deletedPhotos: [],
    deletePhoto: (id) =>
        set((state) => ({
            deletedPhotos: [...state.deletedPhotos, id],
        })),
}));
