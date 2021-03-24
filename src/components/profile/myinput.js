import React, {useState} from 'react';

const (props) {
  const [disabled, setDisabled] = useState(false);

  function handleGameClick() {
    setDisabled(!disabled);
  }

  return (
    <div>
      <input
        disabled={disabled}
      />
      
    </div>
  );
}