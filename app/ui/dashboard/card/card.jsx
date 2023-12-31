import { FaBookBookmark } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="p-5 rounded-xl flex gap-5 w-full cursor-pointer bg-white shadow hover:bg-blue-100">
      <div className="texts flex gap-5 items-center">
        <div>
          <FaBookBookmark className="text-5xl" />
        </div>
        <div className="desc flex flex-col gap-3">
          <span>Total Buku</span>
          <span className="text-2xl font-medium">53</span>
          <span>6% lebih dari minggu lalu</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
