import { useData } from "./DataContext";

export const ChildrenPage = () => {
  const { childrenList } = useData();

  return (
    <div className="container py-4">
      <h2 className="gyerekeklistaja">Gyerekek listája</h2>
      <ul>
        {childrenList.map((c) => (
          <li className="children" key={c.id}>
            <strong>Név:</strong> {c.name}, <br /><strong>Cím:</strong> {c.address},{" "} <br /><strong>Jó volt-e?</strong> {" "}
            {c.wasGoodOrNot ? "Igen" : "Nem"}
          </li>
        ))}
      </ul>
    </div>
  );
};
