import logoImage from '../../assets/images/logo.png';

export default function Header() {
    return (
        <div className="fixed top-0 w-screen h-[70px] flex justify-between items-center border-b bg-white">
            <div className="flex items-center ml-[200px] gap-[24px]">
                <img src={logoImage}/>
                <div className="text-[#4B5563] font-bold text-[18px] flex gap-[30px]">
                    <a href="#">자유게시판</a>
                    <a href="#">중고마켓</a>
                </div>
            </div>
            <div className="mr-[200px]">
                <button className="bg-[#3692FF] px-[23px] py-[8px] rounded-lg text-white font-bold">로그인</button>
            </div>
        </div>
    )
}