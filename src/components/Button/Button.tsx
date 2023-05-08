import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = forwardRef<any, ButtonProps>((props, ref) => {
    const classes = classNames(["font-small", styles.button, props.className], {
      [styles.disabled]: props.disabled
    });

    return (
      <props.tag
        ref={ref}
        className={classes}
        style={props.style}
        onClick={props.onClick}
        onKeyDown={props.onKeyDown}
        type={props.type}
        disabled={props.disabled}
        form={props.form}
        target={props.target}
        href={props.href}
        rel={props.rel}
      >
        {props.label}
      </props.tag>
    );
  }
);

export default Button;

interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit";
  form?: string;
  disabled?: boolean;
  label?: string;
  tag: 'button' | 'a';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string
  href?: string
  onClick?: (event: any) => void;
  onKeyDown?: (event: any) => void;
}

Button.defaultProps = {
  className: '',
  type: 'button',
  tag: 'button',
  label: 'Button',
} as Partial<ButtonProps>