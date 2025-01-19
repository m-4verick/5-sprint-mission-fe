import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

export default function NoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[70px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
