import gabi from "../assets/gabi.png";
import lu from "../assets/lu.png";
import rafa from "../assets/rafa.png";
import ju from "../assets/ju.png";

export function Layout({ children, count }) {
  let kid;

  switch (count) {
    case 0:
      kid = gabi;
      document.body.classList.add("gabi");
      break;
    case 1:
      kid = lu;
      document.body.classList.remove("gabi");
      document.body.classList.add("lu");
      break;
    case 2:
      kid = rafa;
      document.body.classList.remove("lu");
      document.body.classList.add("rafa");
      break;
    case 3:
      kid = ju;
      document.body.classList.remove("rafa");
      document.body.classList.add("ju");
      break;
  }

  return (
    <div className={`container`}>
      <img src={kid} />
      {children}
    </div>
  );
}
