import "./glowing_fill_button.scss";

type ButtonPropsType = {
  Element: keyof JSX.IntrinsicElements;
  children: string;
  href?: string;
  download? :string;
  colorClass?: string;

};


export default function GlowingFillButton({Element, children,href,download,colorClass}: ButtonPropsType) {

  return (
    <Element href={href} download={download}  className={`glow-btn ${colorClass}`}>
        {children}
    </Element>
  )
}
