export default function Stars({ vote = 0 }) {
  const roundedVote = Math.ceil(vote / 2); // Divide per 2 per avere un voto su 5, poi arrotonda per eccesso
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedVote) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>); // Stella piena
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>); // Stella vuota
    }
  }
  return <div>{stars}</div>;
}
