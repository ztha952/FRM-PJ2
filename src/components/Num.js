import React, {useState} from "react";
import incre from "../images/icon-plus.svg";
import decre from "../images/icon-minus.svg";

const Num = () => {

const [num, setNum] = useState(0);

const decrease = () => {
  if(num > 0){
    setNum(num-1)
  }
}

  return (
    <div className="rounded-lg flex gap-5 bg-gray-200 items-center py-2 px-3">
      <img className="left1" src={decre} onClick={decrease} />
      <input
        type="text"
        className="qty w-6 text-center bg-gray-200"
        id="qty"
        value={num}
      />

      <img className="right1" src={incre} onClick={() => setNum(num + 1)} />
    </div>
  );
};

export default Num;
