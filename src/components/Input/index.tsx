import * as Styled from './Input.styles';
interface InputProps {
  type: 'text';
  placeholder?: string;
  id?: string;
  value: string;
  disabled?: boolean;
  onChangeInp: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, type, placeholder, id, disabled, onChangeInp }: InputProps) => (
  <Styled.InputBox>
    <input
      type={type}
      {...(id ? { id: id } : {})}
      {...(placeholder ? { placeholder: placeholder } : {})}
      {...(disabled ? { disabled: disabled } : {})}
      value={value}
      onChange={onChangeInp}
    />
  </Styled.InputBox>
);

export default Input;
