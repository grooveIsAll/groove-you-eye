import classNames from "classnames";

import styles from "./Spinner.module.scss";

const Spinner = ({ className, style, size='medium' }: SpinnerProps) => {
  const sizeValue = getSize(size)

  return (
    <div
      className={classNames(styles.loaderWrap, className)}
      style={{
        ...style,
        width: sizeValue,
        height: sizeValue,
      }}
    >
      <svg
        width={sizeValue}
        height={sizeValue}
        viewBox={`0 0 ${sizeValue} ${sizeValue}`}
        fill="none"
        className={classNames(styles.loader, styles[size])}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.path}
          cx={sizeValue / 2}
          cy={sizeValue / 2}
          r={sizeValue / 2 - 3}
        />
        <circle
          className={styles.backPath}
          cx={sizeValue / 2}
          cy={sizeValue / 2}
          r={sizeValue / 2 - 3}
        />
      </svg>
    </div>
  );
};

export default Spinner;

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  style?: React.CSSProperties;
}

Spinner.defaultProps = {
  className: '',
  style: {},
  size: 'large'
} as Partial<SpinnerProps>

const getSize = (size: string): number => {
  switch (size) {
    case 'small':
      return 24
    case 'medium':
      return 32
    case 'large':
      return 40
    case 'xlarge':
      return 80
    default:
      return 32
  }
}