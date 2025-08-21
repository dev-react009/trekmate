export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] to-[#1c1c2a] text-white">
      {children}
    </section>
  );
}
