import { useEffect, useState } from "react";
import axios from "axios";

const CLICKED_KEY = "CLICKED";
const varushaID = "642981917";

export const Like = () => {
  const [disabled, setDisabled] = useState(true);

  const like = async () => {
    localStorage.setItem(CLICKED_KEY, "1");
    setDisabled(true);

    const ipResponse = await axios.get("https://checkip.amazonaws.com/");
    const data = {
      browserInfo: navigator.userAgent,
      ip: ipResponse.data.trim(),
    };
    axios.post(
      "https://api.telegram.org/bot6182167656:AAH_bxhz9iK_vbV9BCix_TdKyuG7TpSVrOs/sendMessage",
      {
        chat_id: varushaID,
        text: `Like on VarushaProject. Information: \n${JSON.stringify(
          data,
          null,
          2
        )}`,
      }
    );
  };

  useEffect(() => {
    const disabledLocalStorage = localStorage.getItem(CLICKED_KEY);
    if (disabledLocalStorage !== undefined && disabledLocalStorage === "1") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, []);

  return (
    <main className="flex flex-col w-100 my-4 justify-center items-center">
      <span className="text-2xl text-center font-bold">
        Тебе понравился проект?
      </span>
      <span className="text-2xl text-center font-bold">Тогда жми кнопку!</span>
      <button
        onClick={like}
        disabled={disabled}
        className={
          disabled
            ? "text-3xl my-2 border-2 rounded-lg p-5 bg-gray-300"
            : "text-3xl my-2 border-2 rounded-lg p-5 bg-white hover:scale-110 hover:bg-red-200 active:bg-red-500"
        }
      >
        Поставить лайк{" "}
      </button>
      {disabled && <span className="text-lg opacity-60">(поставлен)</span>}
    </main>
  );
};
