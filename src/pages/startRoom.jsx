import { useNavigate } from "react-router-dom";

export const StartRoom = () => {
  const navigate = useNavigate();

  const navigateToHome = async () => {
    navigate("/");
  };
  return (
    <main>
      <div className="flex flex-col my-4 justify-center items-center">
        <span className="text-2xl text-center font-bold">
          Привет. Я Сачек Варя.
        </span>
        <span className="text-2xl text-center font-bold">
          Это мой проект. Я очень буду рада, если вы поставите лайк)
        </span>
        <span className="text-2xl text-center font-bold">
          Для продолжения, нажмите кнопочку ниже:
        </span>
        <button
          onClick={navigateToHome}
          className="text-3xl my-5 border-2 rounded-lg p-5 bg-white hover:scale-110 hover:bg-gray-200 active:bg-green-300"
        >
          Продолжить
        </button>
      </div>
    </main>
  );
};
