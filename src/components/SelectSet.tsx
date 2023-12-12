import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { QuestionElementProps } from 'types/types';
import { StepContext } from '@components/App/App';

const SelectSet = (props: QuestionElementProps): ReactElement => {
  const { state, dispatch } = useContext(StepContext);
  const prevValue = state.questions.get(props.question.name) || '';
  const [selectedOptions, setSelectedOptions] = useState<string[]>(Array.isArray(prevValue) ? prevValue : [prevValue]);

  useEffect(() => {
    state.questions.set(props.question.name, selectedOptions);
  }, [selectedOptions]);

  const handleOptionsChoosing = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  const variants = Array.from(props.question.variants.keys());
  const arrVariantsElem = variants.map((variant, index) => {
    return React.createElement(
      'option',
      {
        className: 'fieldset__option',
        id: variant,
        value: variant,
        key: index,
      },
      props.question.variants.get(variant)
    );
  });

  return (
    <fieldset className="fieldset fieldset_select">
      <select
        multiple
        className="select"
        onChange={handleOptionsChoosing}
        value={selectedOptions.length === 0 ? props.value : selectedOptions}
      >
        {arrVariantsElem}
      </select>
    </fieldset>
  );
};

export default SelectSet;
