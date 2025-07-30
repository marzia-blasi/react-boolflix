export default function LittleStart({ vote }) {
  const stars = Math.ceil(vote / 2);
  if (stars === 5) {
    return "★★★★★";
  } else if (stars === 4) {
    return "★★★★☆";
  } else if (stars === 3) {
    return "★★★☆☆";
  } else if (stars === 2) {
    return "★★☆☆☆";
  } else if (stars === 1) {
    return "★☆☆☆☆";
  } else {
    return "☆☆☆☆☆";
  }
}
