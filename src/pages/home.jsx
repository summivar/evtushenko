export const Home = () => {
  return (
    <main className="my-2">
      <div className="w-100 flex flex-wrap flex-col">
        <section className="flex flex-col my-4 xl:px-40 lg:px-32 md:px-28 sm:px-24 px-4 w-100">
          <span className="text-center font-bold text-2xl">
            Биографическая информация:
          </span>
          <span className="text-xl text-center">
            Евгений Александрович Евтушенко родился 18 июля 1932 года в городе
            Зима, Иркутская область. Родители: отец - поэт-любитель Александр
            Рудольфович Гангнус, мать - геолог и актриса Зинаида Ермолаевна
            Евтушенко. Образование: учился в двух московских школах, но получал
            плохие отметки. Занимался в поэтической студии при районном Доме
            пионеров в Москве. Исключен из первой школы за поджог журналов.
            Исключен из литературного института имени Горького за резкие
            высказывания в адрес литературных произведений и советской власти.
          </span>
        </section>
        <section className="flex flex-col my-4 xl:px-40 lg:px-32 md:px-28 sm:px-24 px-4 w-100">
          <span className="text-center font-bold text-2xl">Творчество:</span>
          <span className="text-xl text-center">
            Произведение, которое прославило его в 1952 году, - поэма "Братская
            ГЭС". Написал книгу "Голубь в Сантьяго", в которой затронул
            политические темы. Не чужды ему тонкая и интимная лирика, а также
            поэмы и циклы стихотворений по зарубежной и антивоенной тематике.
          </span>
        </section>

        <section className="flex flex-col my-4 xl:px-40 lg:px-32 md:px-28 sm:px-24 px-4 w-100">
          <span className="text-center font-bold text-2xl">Личная жизнь:</span>
          <span className="text-xl text-center">
            Был в браке с Беллой Ахмадулиной с 1954 по 1959 год, развелись из-за
            аборта. Часто устраивал вечера поэзии с Андреем Вознесенским.
            Женился на Галине Сокол-Лукониной, бывшей супруге Михаила Луконина.
            Усыновили Петю. Был в браке с Новиковой Марией Владимировной с 1986
            по 2017 год.
          </span>
        </section>

        <section className="flex flex-col my-4 xl:px-40 lg:px-32 md:px-28 sm:px-24 px-4 w-100">
          <span className="text-center font-bold text-2xl">
            Здоровье и политическая деятельность:
          </span>
          <span className="text-xl text-center">
            Был госпитализирован в США в тяжелом состоянии из-за рака в 2017
            году и скончался 1 апреля. Высказывался против российской власти,
            как в своих произведениях, так и в интервью, последнее из которых он
            дал итальянской газете "La Repubblica" в 2017 году. Написал
            стихотворение, выражающее его негодование по отношению к
            государству. Строчки из него:
          </span>
          <hr className="mt-4" />
          <div className="flex flex-col my-1">
            <span className="text-xl text-center">
              Нам мир навешал столько плюх!
            </span>
            <span className="text-xl text-center">
              "Спартак" в газетах круче "Барса"...
            </span>
            <span className="text-xl text-center">Я Родину свою люблю,</span>
            <span className="text-xl text-center">
              Но ненавижу государство!
            </span>
          </div>
          <hr />
        </section>
      </div>
    </main>
  );
};
