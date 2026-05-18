import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-32 pb-12 text-center bg-primary text-white">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Portfolio</h1>
        <p className="mt-4 opacity-70 font-medium">Explore the successful projects we've delivered.</p>
      </div>
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="p-12 border rounded-xl">Fixed Deposit Management System</div>
          <div className="p-12 border rounded-xl">Consumer Electronics E-commerce</div>
          <div className="p-12 border rounded-xl">Warehouse Management System</div>
          <div className="p-12 border rounded-xl">Educational Platform</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
