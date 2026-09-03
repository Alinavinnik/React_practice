import { useState } from "react";
import { accordionItems } from "./accordionItems";

const Accordion = () => {
  const [active, setActive] = useState<number | null>(null);

  const handelClick = (i: number) => {
    if (active === i) {
      setActive(null);
      return;
    }
    setActive(i);
  };
  return (
    <ul className="flex flex-col gap-3 text-center justify-center mx-auto max-w-96 pt-20">
      {accordionItems.map((item, i) => (
        <li key={item.id}>
          <h2>
            <button
              onClick={() => handelClick(i)}
              className="cursor-pointer text-text-primary text-xl p-3 bg-text-accent rounded-2xl size-full mb-4"
            >
              {item.title}
            </button>
          </h2>
          {active === i && (
            <p className="p-3 bg-input-bg rounded-2xl">{item.content}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
