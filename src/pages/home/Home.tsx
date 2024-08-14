import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/redux/store";
import { changeLanguage } from "src/redux/lang/langSlice";
import translations from "src/translations/translate";
import { TLanguage } from "src/types/language.type";

const langList = ["eng", "chinese"];

const langBox = {
  gap: "20px",
  display: "flex",
};

function Home() {
  const dispatch = useDispatch();
  const selectedLang = useSelector((state: RootState) => state.language.lang);

  function handleLanguage(lang: string) {
    dispatch(
      changeLanguage({
        lang,
      })
    );
  }

  const t = translations.get(selectedLang) as TLanguage;

  return (
    <div>
      <h2>{t.name}</h2>
      <h1>{t.list.title}</h1>
      <div style={langBox}>
        {langList.map((lang) => {
          return (
            <button onClick={handleLanguage.bind(null, lang)}>{lang}</button>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
