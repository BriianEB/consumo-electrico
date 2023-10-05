import CheckIcon from '@/_shared/icons/CheckIcon';

type CheckBoxProps = {
  name: string;
  color: string;
  defaultChecked?: boolean
};

function Checkbox({ name, color, defaultChecked = false }: CheckBoxProps) {

  const colorVariantsInContainer: { [key:string]: string } = {
    blue: 'focus-within:ring-blue-300',
    red: 'focus-within:ring-red-300'
  };

  const colorVariantsInCheck: { [key:string]: string } = {
    blue: 'peer-checked:bg-blue-400 peer-checked:shadow-blue-500/50 peer-checked:border-blue-400',
    red: 'peer-checked:bg-red-500 peer-checked:shadow-red-500/50 peer-checked:border-red-500'
  };  

  return (
    <span
      className={`
        relative w-4 h-4 rounded transition-all duration-300
        focus-within:ring
        ${colorVariantsInContainer[color]}
      `}
    >
      <input
        type="checkbox"
        id={name}
        name={name}
        className={`
          peer absolute top-0 left-0 w-4 h-4 opacity-0 z-20
        `}
        defaultChecked={defaultChecked}
      />

      <div
        className={`
          flex justify-center items-center w-[inherit] h-[inherit] border border-neutral-500/50
          shadow-sm shadow-neutral-500/50 rounded transition-all
          ${colorVariantsInCheck[color]}
          peer-checked:[&>*:first-child]:text-white
        `}
      >
        <CheckIcon
          className={`
            inline w-3 h-3 text-transparent
          `}
        />
      </div>
    </span>
  );
}

export default Checkbox;