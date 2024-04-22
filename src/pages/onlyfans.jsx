import { ReactComponent as Logo } from "./assets/matrica_sudby.svg";

export const Onlyfans = () => {
  return (
    <main className="flex flex-col w-100">
      <span className="text-center text-2xl my-2 font-bold">
        Евгений Евтушенко
      </span>
      <div className="flex flex-col mx-auto border-2 p-5 rounded-lg bg-white">
        <span className="text-lg text-center">
          <span className="font-bold">Р</span>одился в год (по китайскому
          календарю) <span className="text-red-600 font-bold">обезьяны</span>
        </span>

        <span className="text-lg text-center">
          <span className="font-bold">П</span>о знаку зодиака{" "}
          <span className="text-red-600 font-bold">рак (июльский)</span>
        </span>
        <span className="text-lg text-center">
          <span className="font-bold">Г</span>лавный талисман{" "}
          <span className="text-red-600 font-bold">коралл</span>
        </span>
        <span className="text-lg text-center">
          <span className="font-bold">Ц</span>вет года{" "}
          <span className="text-red-600 font-bold">черный</span>
        </span>

        <span className="text-lg text-center">
          <span className="font-bold">С</span>тихия года{" "}
          <span className="text-red-600 font-bold">вода</span>
        </span>
      </div>
      <hr className="border-1 border-black w-1/2 mx-auto my-2" />
      <div className="flex flex-col my-2 w-100">
        <span className="text-center text-2xl font-bold my-2">
          Нотальные карта и таблица
        </span>

        <div className="flex flex-col md:justify-evenly justify-center items-center px-5">
          <span className="text-center text-gray-800 text-lg">
            Нотальная карта
          </span>
          <img
            className="my-2 rounded-lg"
            src="evtushenko/assets/natal_card.png"
            alt="Натальная карточка"
          />
          <span className="text-center text-gray-800 text-lg">
            Нотальная таблица
          </span>
          <img
            className="my-2 rounded-lg"
            src="evtushenko/assets/natal_table.png"
            alt="Натальная таблица"
          />
        </div>
      </div>
      <hr className="border-1 border-black w-1/2 mx-auto my-2" />
      <div className="flex flex-col my-2 w-100">
        <span className="text-center text-2xl font-bold my-2">
          Матрица судьбы
        </span>
        <div className="lg:h-1/2 lg:w-1/2 w-full h-full px-5 mx-auto">
          <Logo className="rounded-lg" />
        </div>
      </div>
      <hr className="border-1 border-black w-1/2 mx-auto my-2 " />
      <div className="flex flex-col my-2 w-100 items-center justify-center">
        <span className="text-center text-2xl font-bold my-2">Соперницы</span>
        <div className="flex flex-col px-5 justify-center items-center">
          <div className="flex">
            <img
              className="rounded-lg"
              src="evtushenko/assets/1.webp"
              alt="Белла Ахмадулина"
            />
          </div>
          <div className="flex flex-col mx-5 md:py-0 py-2 md:w-1/2 w-full">
            <span className="text-xl text-center">Белла Ахмадулина</span>
            <span className="text-lg text-center text-gray-700">
              (1955 - 1958)
            </span>
            <span className="text-xl md:py-0 py-1">
              Любовь между известными поэтами была вдохновляющей, но закончилась
              разочарованием и разрывом из-за нежелания мужа принять отцовство.
              Позднее поэт пожалел о своем поведении и радовался, узнав, что она
              родила дочь.
            </span>
          </div>
        </div>

        <div className="flex w-100 flex-col my-5 px-5 justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              className="rounded-lg"
              src="evtushenko/assets/2.jpg"
              alt="Галина Сокол-Луконина"
            />
          </div>
          <div className="flex flex-col mx-5 md:py-0 py-2 md:w-1/2 w-full">
            <span className="text-xl text-center">Галина Сокол-Луконина</span>
            <span className="text-lg text-center text-gray-700">
              (неизвестно)
            </span>
            <span className="text-xl md:py-0 py-1">
              Эта связь выросла из 12-летней дружбы, хотя Галина Семеновна была
              замужем за другом Евтушенко. Они не перешли черту, пока их браки
              не развалились. Галина не могла иметь детей, поэтому они усыновили
              мальчика. Но и это не уберегло семью от распада. Она была сильной
              личностью, иногда критиковала его. Евтушенко чувствовал себя под
              давлением. После разрыва она попыталась покончить с собой, но это
              не помогло спасти отношения.
            </span>
          </div>
        </div>

        <div className="flex w-100 flex-col my-5 px-5 justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              className="rounded-lg"
              src="evtushenko/assets/3.webp"
              alt="Джан Батлер"
            />
          </div>
          <div className="flex flex-col mx-5 md:py-0 py-2 md:w-1/2 w-full">
            <span className="text-xl text-center">Джан Батлер</span>
            <span className="text-lg text-center text-gray-700">
              (1974-1986)
            </span>
            <span className="text-xl md:py-0 py-1">
              Летом 1974 года Евтушенко встречает свою третью избранницу,
              ирландку Джан Батлер. Они поженились, и у них родились два сына.
              Однако отношения постепенно охладели, особенно после рождения
              второго, больного сына. Батлер не могла сопровождать мужа в его
              творческих поездках из-за забот о детях. Развод прошел довольно
              спокойно после 12 лет совместной жизни.
            </span>
          </div>
        </div>

        <div className="flex w-100 flex-col my-5 px-5 justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              className="rounded-lg"
              src="evtushenko/assets/4.webp"
              alt="Мария Новикова"
            />
          </div>
          <div className="flex flex-col mx-5 md:py-0 py-2 md:w-1/2 w-full">
            <span className="text-xl text-center">Мария Новикова</span>
            <span className="text-lg text-center text-gray-700">
              (1987-конец жизни)
            </span>
            <span className="text-xl md:py-0 py-1">
              Летом 1986 года Евтушенко встретил свою четвертую музу в
              Петрозаводске, медучилищницу Марию. Они поженились всего через
              несколько месяцев. Несмотря на значительную разницу в возрасте, их
              союз был счастливым и долгим, длившимся 30 лет, до самой смерти
              поэта.
            </span>
            <span className="text-xl md:py-0 py-1">
              В последующем поэт посвятил своей молодой жене следующие строки:
            </span>
            <div className="flex flex-col justify-center items-center">
              <span className="text-center italic">
                Последняя попытка стать счастливым
              </span>
              <span className="text-center italic">
                Как будто призрак мой перед обрывом
              </span>
              <span className="text-center italic">
                И хочет прыгнуть ото всех обид
              </span>
              <span className="text-center italic">
                Туда, где я давным-давно разбит
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
