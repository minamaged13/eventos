

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex flex-center min-h-screen w-full bg-primary-50" >
      {children}
    </div>
  );
}