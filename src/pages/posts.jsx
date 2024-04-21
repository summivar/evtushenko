import { Outlet } from "react-router";

export const Posts = () => {
  return (
    <main className="flex flex-col w-100 my-4">
      <span className="text-center font-bold text-2xl">
        Популярные произведения Евгения Евтушенко:
      </span>
      <Outlet />
    </main>
  );
};
