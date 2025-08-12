import { ItemList } from '@/widgets/home';

export function Home() {
    const items = Array.from({ length: 6 }, (_, i) => i + 1);

    return <ItemList items={items} />;
}
