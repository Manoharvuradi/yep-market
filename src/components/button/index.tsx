import { forwardRef } from "react";
import clsx from "clsx";

interface ButtonOptions {
  variant?: "primary" | "secondary" | "ghost",
  size?: 'sm' | 'md' | 'lg',
  rounded?: boolean,
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {

  const {
    type = "button",
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    rounded = true,
    disabled = false,
    ...rest
  } = props;

  const _className = clsx({
    "font-gordita font-medium": true,
    "py-2 px-4 md:text-sm text-xs": size === 'sm',
    "py-3 px-6 md:text-md text-sm": size === 'md',
    "py-4 px-8 md:text-lg text-md": size === 'lg',
    "rounded-[15px]": rounded,
    ["border-2 border-gunmetal bg-gunmetal hover:bg-gunmetal-dark text-white "]: variant === 'primary',
    ["border-2 border-gunmetal"]: variant === 'secondary',
    [className]: true,
    [`opacity-40 hover:cursor-not-allowed`]: disabled
  });

  return (
    <button ref={ref} type={type} className={_className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
