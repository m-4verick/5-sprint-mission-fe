import instagram from "../../assets/images/insta.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";

export default function Footer() {
  return (
    <div className="w-screen bg-[#111827] h-[160px] mt-[135px] md:mt-[160px]">
      <div className="text-white grid grid-cols-2 md:grid-cols-3 justify-between mx-[16px] md:mx-[24px] xl:mx-[200px] pt-[32px]">
        <p className="order-4 md:order-1 md:text-center mt-[10px] md:mt-0">&copy;codeit - 2024</p>
        <div className="flex gap-[30px] order-2 md:justify-center">
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
        <div className="flex gap-[12px] order-3 justify-end md:justify-center">
          <a href="#">
            <img src={facebook} />
          </a>
          <a href="#">
            {" "}
            <img src={twitter} />
          </a>
          <a href="#">
            {" "}
            <img src={youtube} />
          </a>
          <a href="#">
            {" "}
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
}
