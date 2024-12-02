import'./globals.css';

export const metadata = {
  title: 'GoMove Login',
  description: 'Página de login estilizada em Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
