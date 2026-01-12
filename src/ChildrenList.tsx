import { useData } from "./DataContext";

export const ChildrenPage = () => {
  const { childrenList } = useData();

  return (
    <>
      <h2>Gyerekek listája</h2>
      <ul>
        {childrenList.map((c) => (
          <li className="children" key={c.id}>
            <strong>Név:</strong> {c.name}, <br /><strong>Cím:</strong> {c.address},{" "} <br /><strong>Jó volt-e?</strong> {" "}
            {c.wasGoodOrNot ? "jó volt" : "rossz volt"}
          </li>
        ))}
      </ul>
    </>
  );
};
