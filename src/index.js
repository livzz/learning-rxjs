import "./styles.css";
import Rx from "rxjs/Rx";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const output = console.log;

const registerclick = e => {
  output("Without Rx", e.clientX, e.clientY);
};

document.body.addEventListener("click", registerclick);

Rx.Observable.fromEvent(document, "click")
  .filter(c => c.clientX < window.innerWidth / 2)
  .take(2)
  .subscribe(c => output("With Rx", c.clientX, c.clientY));
