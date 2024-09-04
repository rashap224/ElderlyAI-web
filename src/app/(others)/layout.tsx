export default async function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full px-2">{children}</main>;
}
