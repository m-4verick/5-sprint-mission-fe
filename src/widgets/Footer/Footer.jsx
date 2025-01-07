import instagram from '../../assets/images/insta.png';
import facebook from '../../assets/images/facebook.png';
import youtube from '../../assets/images/youtube.png';
import twitter from '../../assets/images/twitter.png';

export default function Footer() {
    return (
        <div className="w-scrren h-[160px] bg-[#111827] mt-[140px]">
            <div className="flex justify-between text-white pt-[32px]">
                <p className="ml-[200px]">©codeit - 2024</p>
                <div className="flex gap-[12px]">
                    <a href="#">Privacy Policy</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="flex gap-[12px] mr-[200px]">
                    <a href="#"><img src={facebook} /></a>
                    <a href="#"><img src={twitter} /></a>
                    <a href="#"><img src={youtube} /></a>
                    <a href="#"><img src={instagram} /></a>
                </div>
            </div>
        </div>
    )
}