import Copyright from "@/widgets/Footer/components/Copyright";
import Terms from "@/widgets/Footer/components/Terms";
import Sns from "@/widgets/Footer/components/Sns";

export default function Footer() {
  return (
    <div className="h-[160px] w-full bg-[#111827] text-white">
      <div className="mx-auto grid max-w-[1150px] grid-cols-2 justify-between gap-6 px-4 pt-8 md:flex md:justify-between">
        <Copyright />
        <Terms />
        <Sns />
      </div>
    </div>
  );
}
