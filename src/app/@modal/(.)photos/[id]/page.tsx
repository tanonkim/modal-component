import { Modal } from '@/widgets/modal';

export default async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
    const photoId = (await params).id;
    return <Modal id={photoId}>{photoId}</Modal>;
}
