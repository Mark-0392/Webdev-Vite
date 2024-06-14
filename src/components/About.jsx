import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element-center grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            laudantium, ducimus veniam odio quos officiis velit perspiciatis qui
            sint voluptatum est, laboriosam id, at laborum possimus ipsam amet
            delectus! Cum perferendis ad incidunt et explicabo itaque. Officiis
            inventore explicabo fugit!
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
