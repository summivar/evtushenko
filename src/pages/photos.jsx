import { Outlet } from "react-router";

export const Photos = () => {
  return (
    <main className="flex flex-col w-100 my-2">
      <span className="text-center font-bold text-2xl">
        Все фотки
        <span className="text-gray-500 opacity-50"> (что я нашла)</span> Евгения
        Евтушенко:
      </span>
      <span className="text-center text-gray-500 opacity-40 text-lg">
        возможны растяжения фото
      </span>
      <Outlet />
    </main>
  );
};
