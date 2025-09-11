import React, { useCallback, useState } from "react";
const Button = React.memo(({ customClick }: any) => {
  return (
    <>
      <button onClick={customClick}>Change Name</button>
    </>
  );
});

export default function MemoEx() {
  const [name, setName] = useState("");

  const clicked = useCallback(() => {
    setName("changed name");
  }, []);

  return (
    <>
      My name is {name}
      <Button customClick={clicked}></Button>
    </>
  );
}
