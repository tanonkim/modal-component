'use client';

import { usePhotoStore } from '@/widgets/modal/model/store';
import { useRouter } from 'next/navigation';

export function ItemList({ items }: { items: number[] }) {
    const router = useRouter();

    const deleted = usePhotoStore((state) => state.deletedPhotos);
    const visiblePhotos = items.filter((id) => !deleted.includes(id.toString()));

    return (
        <div className="w-full flex gap-2">
            {visiblePhotos.map((id) => (
                <div key={id} onClick={() => router.push(`/photos/${id}`)}>
                    {id}
                </div>
            ))}
        </div>
    );
}
