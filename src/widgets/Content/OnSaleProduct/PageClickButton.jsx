const PageClickButton = ({ handlePageChange, value, isSelected }) => {
    const baseClassName = "w-[40px] h-[40px] rounded-full border font-bold";
    const selectedClassName = "bg-[#2F80ED] text-white";
    return (
        <button
            onClick={isSelected ? undefined : handlePageChange}
            value={value}
            className={`${baseClassName} ${isSelected ? selectedClassName : ""}`}
        >
            {value}
        </button>
    );
};

export default PageClickButton;