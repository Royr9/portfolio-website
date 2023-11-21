import "./glowing_fill_button.css"

type ButtonPropsType = {
  Element: keyof JSX.IntrinsicElements;
  children: string;
  href?: string;
  download? :string;

};


export default function GlowingFillButton({Element, children,href,download}: ButtonPropsType) {

  return (
    <Element href={href} download={download}  className="glow-btn">
        {children}
    </Element>
  )
}
