import dynamic from "next/dynamic";
import {useState} from "react";

const A = dynamic(() => import("../components/A"));
const B = dynamic(() => import("../components/B"));

export default function Home() {
  const [display, setDisplay] = useState(false)

  return (
      <div>
        <A/>
        { display && <B/> }
        <div style={{ cursor: "pointer" }} onClick={ () => setDisplay(!display) }>Click to load/unload B</div>
      </div>
  )
}
