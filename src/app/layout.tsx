import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const chaney = localFont({
    src: '../../public/fonts/chaney.woff2',
    variable: '--font-chaney',
});

export const metadata: Metadata = {
    title: 'Modal Test',
    description: '모달을 구현하는 프로젝트입니다.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`h-screen min-h-screen leading-none ${chaney.variable}`} lang="ko">
            <body className=" h-full w-full font-chaney">{children}</body>
        </html>
    );
}
