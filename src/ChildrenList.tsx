import { useData } from "./DataContext";

export const ChildrenPage = () => {
  const { childrenList } = useData();

  return (
    <>
      <h2>Gyerekek listája</h2>
      <ul>
        {childrenList.map((c) => (
          <li key={c.id}>
            {c.name} – {c.country} –{" "}
            {c.wasGoodOrNot ? "Jó volt" : "Rossz volt"}
          </li>
        ))}
      </ul>
    </>
  );
};
