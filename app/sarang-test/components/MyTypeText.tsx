export default function MyTypeText({ topCategory }: { topCategory: string | undefined }) {
  let myType = "";
  switch (topCategory) {
    case "예배영성국":
      myType = "S";
      break;
    case "한반도이웃사랑선교국":
      myType = "A";
      break;
    case "운영국":
      myType = "R";
      break;
    case "양육국":
      myType = "Y";
      break;
    case "해외선교국":
      myType = "G";
      break;
    default:
      myType = "?";
      break;
  }

  return <span>{myType}</span>;
}
