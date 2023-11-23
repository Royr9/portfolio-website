import GlowingFillButton from "../../library/library_components/glowing_fill_button/GlowingFillButton";


export default function AboutSection() {
  return (
   <section id="about">
    <div className="image-col">
    <img src="/media/images/roy-img.png" alt="" />
    <h3>Roy Ramati</h3>
    <div className="social-icons">
        <span>Github</span>
        <span>Linkedin</span>
    </div>
    </div>
    <div className="about-description-col"></div>
   <h2>&lt;/about me&gt;</h2>
   <p></p>
   <GlowingFillButton Element="button">
    Download CV
   </GlowingFillButton>
    <GlowingFillButton Element="button">
    Email Me
   </GlowingFillButton>


   </section>
  )
}
