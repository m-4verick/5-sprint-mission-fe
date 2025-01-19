import Image from "next/image";
import facebook from "@/assets/images/footer/ic_facebook.png";
import twitter from "@/assets/images/footer/ic_twitter.png";
import youtube from "@/assets/images/footer/ic_youtube.png";
import instagram from "@/assets/images/footer/ic_instagram.png";

export default function Sns() {
  return (
    <div className="order-2 flex items-center justify-end gap-3">
      <a href="#">
        <Image src={facebook} alt="facebook icon" />
      </a>
      <a href="#">
        <Image src={twitter} alt="twitter icon" />
      </a>
      <a href="#">
        <Image src={youtube} alt="youtube icon" />
      </a>
      <a href="#">
        <Image src={instagram} alt="instagram icon" />
      </a>
    </div>
  );
}
