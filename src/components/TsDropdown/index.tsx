import React, { ChangeEvent } from 'react';

type Base = {
  id: string;
  title: string;
};

type GenericSelectProps<T> = {
  values: T[];
  onChange: (value: T) => void;
};

const TsDropdown = <T extends Base>({
  values,
  onChange,
}: GenericSelectProps<T>) => {
  const onSelectChange = (e: ChangeEvent) => {
    const element = e.target as HTMLOptionElement;
    const val = values.find((value) => value.id === element.value);

    val && onChange(val);
  };

  const renderOptions = values.map((value) => (
    <option key={value.id} value={value.id}>
      {value.title}
    </option>
  ));

  return <select onChange={onSelectChange}>{renderOptions}</select>;
};

export default TsDropdown;
