export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        SIDEBAR
        HOME
        {children}
      </main>
    );
  }g A