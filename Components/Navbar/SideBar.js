import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const SideBar = (props) => {
  return (
    <ul className={props.classes}>
      <li className="p-2 flex justify-end">
        <AiOutlineClose
          className="p-1 cursor-pointer text-2xl"
          onClick={props.onClickHandler}
        />
      </li>
      <Link href="/">
        <li
          onClick={props.onClickHandler}
          className="flex justify-between p-2 text-center cursor-pointer hover:bg-neutral-900"
        >
          Home
        </li>
      </Link>
      <Link href="/movies">
        <li
          onClick={props.onClickHandler}
          className="flex justify-between p-2 text-center cursor-pointer hover:bg-neutral-900"
        >
          Movies
        </li>
      </Link>
      <Link href="/tvshows">
        <li
          onClick={props.onClickHandler}
          className="flex justify-between p-2 text-center cursor-pointer hover:bg-neutral-900"
        >
          TV Shows
        </li>
      </Link>
      <Link href="/topimdb">
        <li
          onClick={props.onClickHandler}
          className="flex justify-between p-2 text-center cursor-pointer hover:bg-neutral-900"
        >
          Top IMDB
        </li>
      </Link>
    </ul>
  );
};

export default SideBar;
