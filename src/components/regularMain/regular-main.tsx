
export default function RegularMain({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center pt-10 sm:pt-24 px-2">
      {children}
    </main>
  )
}
