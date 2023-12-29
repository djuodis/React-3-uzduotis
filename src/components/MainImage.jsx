export const MainImage = ({ women, descriptor }) => {
  return (
    <div className="image">
      {women ? (
        <img src={women} alt=""/>):(<p>Vieta jūsų nuotraukai</p>)}
      <p>{descriptor ? descriptor : ""}</p>
    </div>
  )
}

export default MainImage
