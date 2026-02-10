const Card=()=>{
    const title="QUEEN OF TEARS"
    const returnGenre=()=>{
        const genre="RomCom";
        return genre;
    }
return (
    <>
    <div>
      <img src="qot.png" alt="qot.png" width="40%"height="40%" />
    </div>
      <h2>Name : {title} </h2>
      <h3>Rating : 8.2</h3>
      <p>
        Summary: Baek hyun-woo and hong hae in naviagte a tense relationship ,
        both at home at work ,but upon deciding his futur hyun-woo pay as visit
        a his family
      </p>
      <p>Genre:{returnGenre()}</p>
    </>
)
}
export default Card;