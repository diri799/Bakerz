import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-page">
      {" "}
      <br /> <br /> <br />
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to <strong>Bakerz Bite</strong> — where every bite tells a
          story.
        </p>

        <div>
          <h2> Our Story</h2>
          <p>
            Founded in 2025, Bakerz Bite began as a small home bakery with a big
            dream: to bring warmth and joy through the magic of baked goods.
            What started as a five-people passion project has grown into a
            beloved neighborhood spot, known for our attention to detail,
            high-quality ingredients, and heartwarming service.
          </p>
        </div>

        <div>
          <h2> What Makes Us Special</h2>
          <ul>
            <li>
              <strong>Freshly Baked Daily</strong> – Every item is made from
              scratch each morning.
            </li>
            <li>
              <strong>Locally Sourced Ingredients</strong> – Supporting local
              farmers and suppliers.
            </li>
            <li>
              <strong>Made With Love</strong> – Baking isn't just a process;
              it's a passion.
            </li>
          </ul>
        </div>

        <div>
          <h2> Creators in Code & Crumbs</h2>
          <p>
            At Bakerz Bite, our team is a unique blend of talented bakers and
            creative software engineers. Whether it’s crafting the perfect
            croissant or building a seamless user experience, we bring the same
            passion, precision, and artistry to everything we do. We believe
            that great things happen when flavor meets function — and we’re
            proud to bake and build with heart.
          </p>

        </div>
        <div className="">

        </div>
      </div>

    </section>
  );
};
export default About;
