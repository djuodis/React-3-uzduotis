import "../styles/Header.css"

export const Header = ({title, subTitle, descriptor}) => {
  return (
    <>
    <header>
    <div className="container">

    <h1>{title ? title : "Pavadinimas"}</h1>
     
     <p>{subTitle ? subTitle : "Vieta jūsų tekstui"}</p>

     <p>{descriptor ? descriptor : "Vieta jūsų tekstui"}</p>

     <button>Button</button>

     </div>

     <div className="cover"></div>

    </header>
    </>
     
    )
  }