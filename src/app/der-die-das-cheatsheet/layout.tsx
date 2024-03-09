import NavBar from "@/components/NavBar";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 my-7 prose">
        {children}
      </div>
    </>
  );
}
