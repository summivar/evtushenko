import { Link, useLocation } from "react-router-dom";
import "./css/text-multicolor.css";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <nav className="bg-gradient-to-r from-sky-300 to-rose-[#ffbe98]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start py-2">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`text-black hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === "/" ? "bg-white-400" : ""
                  }`}
                >
                  Главная страница
                </Link>
                <Link
                  to="/posts"
                  className={
                    "text-black hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Произведения
                </Link>
                <Link
                  to="/photos"
                  className={
                    "text-black hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Фотографии
                </Link>
                <Link
                  to="/onlyfans"
                  className={
                    "text-black hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Onlyfans
                </Link>
                <Link
                  to="/like"
                  className={
                    "text-multicolor fond-bold text-black hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Поставить лайк
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className={
                "text-black hover:bg-red-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              }
              aria-current="page"
            >
              Главная страница
            </Link>
            <Link
              to="/posts"
              className={
                "text-black hover:bg-red-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Произведения
            </Link>
            <Link
              to="/photos"
              className={
                "text-black hover:bg-red-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Фотографии
            </Link>
            <Link
              to="/onlyfans"
              className={
                "text-black hover:bg-red-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Onlyfans
            </Link>
            <Link
              to="/like"
              className={
                "text-multicolor text-black hover:bg-red-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Поставить лайк
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
