import React from "react";
import { Link } from "react-router-dom";
import Screenshot from '../IMG/Screenshot.png';
import Screenshot1 from '../IMG/Screenshot1.png';
import Screenshot2 from '../IMG/Screenshot2.png';

function Home() {
  return (
    <div className="p-3 mb-2 bg-dark-subtle ">
      <h2>Welcome HEAD & TAIL Home PAGE</h2>

      <ul>
        <li>
          {" "}
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/HeadTail">Head-Tail</Link>
        </li>
        <li>
          <p className="fw-medium brown-darker-hover">Head&Tail game Like theese pictures type {"([{<$>}])"}</p>
        </li>
      </ul><div class="container text-center">
  <div className="row">
    <div className="col">
    <img src={Screenshot} alt="Image" width={500} height={200}/>
    </div>
    <div className="col mb-2">
    <img src={Screenshot1} alt="Image" width={500} height={200}/>
    </div>
    <div className="col">
    <img src={Screenshot2} alt="Image" width={500} height={200}/>
    </div>
  </div>
</div>
    </div>
  );
}
export default Home;
