import '../styles/Main.css';
import MainImage from './MainImage';

export const Main = ({ title, subTitle, imagePath, descriptor }) => {
  return (
    <div className="container">
      <h1>{title ? title : "Pavadinimas"}</h1>
      <p>{subTitle ? subTitle : "Vieta jūsų tekstui"}</p>
      <div className="images">
        {[...Array(6)].map((_, index) => (
          <MainImage
            key={index}
            women={imagePath} 
            descriptor={descriptor ? descriptor : "Vieta jūsų tekstui"}
          />
        ))}
      </div>
    </div>
  );
};
