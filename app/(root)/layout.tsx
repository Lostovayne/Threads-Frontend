export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container mx-auto">{children}</main>;
}
