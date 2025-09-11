import { useMemo, useState } from "react";

export default function ProductList({
  product,
}: {
  product: { id: number; name: string }[];
}) {
  const [filter, setfilter] = useState("");
  const filteredProduct = useMemo(() => {
    return product.filter((p) => p.name.includes(filter));
  }, [product, filter]);
  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setfilter(e.target.value)}
      />
      <div>
        <ul>
          {filteredProduct.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
