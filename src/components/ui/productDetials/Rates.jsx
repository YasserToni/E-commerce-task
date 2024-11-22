import Rate from "./Rate";

function Rates() {
  return (
    <div>
      <Rate percentage={60} numberofStar={5} />
      <Rate percentage={40} numberofStar={4} />
      <Rate percentage={20} numberofStar={3} />
      <Rate percentage={10} numberofStar={2} />
      <Rate percentage={5} numberofStar={1} />
    </div>
  );
}

export default Rates;
