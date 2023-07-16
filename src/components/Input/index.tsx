import * as Styled from './Input.styles';
interface InputProps {
  type: 'text';
  placeholder?: string;
  name?: string;
  value: string;
  disabled?: boolean;
  onChangeInp: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, type, placeholder, name, disabled, onChangeInp }: InputProps) => (
  <Styled.InputBox>
    <input
      type={type}
      {...(name ? { name: name } : {})}
      {...(placeholder ? { placeholder: placeholder } : {})}
      {...(disabled ? { disabled: disabled } : {})}
      value={value}
      onChange={onChangeInp}
    />
  </Styled.InputBox>
);

export default Input;
