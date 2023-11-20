import "./glowing_fill_button.css"

type ButtonPropsType = {
  Element: keyof JSX.IntrinsicElements;
  children: string;
};


export default function GlowingFillButton({Element, children}: ButtonPropsType) {

  return (
    <Element className="glow-btn">
        {children}
    </Element>
  )
}
