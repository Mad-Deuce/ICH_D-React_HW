import { useRef, useState } from "react";

import ValueDisplay from "/src/shared/components/ValueDisplay/ValueDisplay";
import TextInput from "/src/shared/components/TextInput/TextInput";
import Container from "/src/shared/components/Container/Container";

import "/src/shared/styles/styles.css";

export default function App() {
  const [currentValue, setCurrentValue] = useState();
  const previousValue = useRef();

  const handleChange = (event) => {
    previousValue.current = currentValue;
    setCurrentValue(event.target.value);
  };

  return (
    <Container>
      <h1>Current and Previous Value</h1>
      <TextInput
        handleChange={handleChange}
        type="text"
        placeholder="placeholder"
      />
      <ValueDisplay
        currentValue={currentValue}
        previousValue={previousValue.current}
      />
    </Container>
  );
}
