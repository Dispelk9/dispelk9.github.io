import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      id="btn-back-to-top"
      aria-label="Back to top"
      onClick={handleClick}
      className="btn btn-primary back-to-top"
      style={{ display: visible ? "inline-flex" : "none" }}
    >
      ↑
    </button>
  );
}
