import "./list.scss";
import { listData } from "../../lib/dummydate";
import Card from "../card/Card";

const list = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default list;
