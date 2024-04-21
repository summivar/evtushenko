import { photoUrls } from "../data/photos.constants";

export const PhotoLists = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 auto-rows-max mx-auto">
      {photoUrls.map((url) => (
        <div className="flex flex-col w-100" key={url.link}>
          <img key={url.link} src={url.link} alt={url.alt} className="h-52" />
          <span className="text-gray-600 opacity-30 text-center">
            {url.text}
          </span>
        </div>
      ))}
    </div>
  );
};
