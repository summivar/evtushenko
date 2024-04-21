export const Onlyfans = () => {
  return (
    <main className="flex flex-col w-100">
      <span className="text-center text-2xl my-2 font-bold">
        Евгений Евтушенко
      </span>
      <div className="flex flex-col mx-auto border-2 p-5 rounded-lg bg-white">
        <span className="text-lg text-center">
          Родился в год (по восточному календарю){" "}
          <span className="text-red-600 font-bold">обезьяна</span>
        </span>
        <span className="text-lg text-center">
          Родился в год (по китайскому календарю){" "}
          <span className="text-red-600 font-bold">козы</span>
        </span>

        <span className="text-lg text-center">
          По знаку зодиака{" "}
          <span className="text-red-600 font-bold">рака (июльская)</span>
        </span>

        <span className="text-lg text-center">
          Стихия по гороскопу{" "}
          <span className="text-red-600 font-bold">вода</span>
        </span>
        <span className="text-lg text-center">
          Главный талисман{" "}
          <span className="text-red-600 font-bold">коралл</span>
        </span>
      </div>
      <div className="flex flex-col my-2 w-100">
        <span className="text-center text-2xl my-2 font-bold">
          Нотальные карта и таблица
        </span>
        <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center">
          <img
            className="h-96 w-96 my-2"
            src="evtushenko/assets/natal_card.png"
            alt="Натальная карточка"
          />
          <img
            className="h-96 w-96 my-2"
            src="evtushenko/assets/natal_table.png"
            alt="Натальная таблица"
          />
        </div>
      </div>
    </main>
  );
};
