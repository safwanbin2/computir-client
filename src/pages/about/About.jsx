import React, { useEffect, useRef } from "react";

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    // Initially apply the "slide-up" class to hide the content
    page.classList.add("slide-up");

    // Add a slight delay before triggering the "slide-up-visible" class for the animation
    setTimeout(() => {
      page.classList.add("slide-up-visible");
    }, 100); // Add a small delay to let the DOM render before the animation starts
  }, []);
  return (
    <>
      <div ref={pageRef} className="text-white w-11/12 mx-auto py-10">
        About Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        quos. Quisquam dicta excepturi temporibus doloribus nihil perspiciatis
        saepe non, sapiente iste beatae hic libero debitis, maiores odio
        cupiditate soluta reiciendis? Repellat pariatur adipisci modi numquam
        quae, eveniet, fugit omnis facilis, veritatis repellendus quaerat
        officia quibusdam! Consequatur, veritatis consequuntur quasi placeat
        illo cupiditate, asperiores repellat ipsam incidunt quibusdam officia
        eaque esse molestias! Molestias repellat rerum aliquid deleniti, tempora
        nisi temporibus ullam nulla odio magni qui aliquam tenetur consequatur
        impedit sunt ipsam natus soluta! At odio, deserunt hic nesciunt
        distinctio impedit, veniam reiciendis voluptatum, ad nostrum iste saepe
        ea sit voluptates accusantium explicabo maiores animi qui cum in numquam
        molestiae similique. Quas mollitia et similique nulla veritatis
        voluptate, neque doloribus quia ducimus a unde deserunt asperiores
        molestias recusandae perferendis assumenda libero voluptatum. Nisi
        eveniet ducimus sit aspernatur rem possimus quis nostrum quaerat fuga
        odit id explicabo dolorem, nihil voluptatem omnis incidunt accusamus
        vitae quos non! Sunt id dignissimos adipisci atque assumenda
        reprehenderit nobis, dolorum animi architecto dolores velit labore alias
        illo praesentium repudiandae officia veritatis odit quisquam aspernatur
        error mollitia. Qui quis molestias odio hic neque quibusdam tempore nemo
        expedita alias repellat eum, nam debitis sunt iste, suscipit aut
        provident reprehenderit nesciunt?
      </div>
      <div className="text-white w-11/12 mx-auto py-10">
        About Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        quos. Quisquam dicta excepturi temporibus doloribus nihil perspiciatis
        saepe non, sapiente iste beatae hic libero debitis, maiores odio
        cupiditate soluta reiciendis? Repellat pariatur adipisci modi numquam
        quae, eveniet, fugit omnis facilis, veritatis repellendus quaerat
        officia quibusdam! Consequatur, veritatis consequuntur quasi placeat
        illo cupiditate, asperiores repellat ipsam incidunt quibusdam officia
        eaque esse molestias! Molestias repellat rerum aliquid deleniti, tempora
        nisi temporibus ullam nulla odio magni qui aliquam tenetur consequatur
        impedit sunt ipsam natus soluta! At odio, deserunt hic nesciunt
        distinctio impedit, veniam reiciendis voluptatum, ad nostrum iste saepe
        ea sit voluptates accusantium explicabo maiores animi qui cum in numquam
        molestiae similique. Quas mollitia et similique nulla veritatis
        voluptate, neque doloribus quia ducimus a unde deserunt asperiores
        molestias recusandae perferendis assumenda libero voluptatum. Nisi
        eveniet ducimus sit aspernatur rem possimus quis nostrum quaerat fuga
        odit id explicabo dolorem, nihil voluptatem omnis incidunt accusamus
        vitae quos non! Sunt id dignissimos adipisci atque assumenda
        reprehenderit nobis, dolorum animi architecto dolores velit labore alias
        illo praesentium repudiandae officia veritatis odit quisquam aspernatur
        error mollitia. Qui quis molestias odio hic neque quibusdam tempore nemo
        expedita alias repellat eum, nam debitis sunt iste, suscipit aut
        provident reprehenderit nesciunt?
      </div>
      <div className="text-white w-11/12 mx-auto py-10">
        About Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        quos. Quisquam dicta excepturi temporibus doloribus nihil perspiciatis
        saepe non, sapiente iste beatae hic libero debitis, maiores odio
        cupiditate soluta reiciendis? Repellat pariatur adipisci modi numquam
        quae, eveniet, fugit omnis facilis, veritatis repellendus quaerat
        officia quibusdam! Consequatur, veritatis consequuntur quasi placeat
        illo cupiditate, asperiores repellat ipsam incidunt quibusdam officia
        eaque esse molestias! Molestias repellat rerum aliquid deleniti, tempora
        nisi temporibus ullam nulla odio magni qui aliquam tenetur consequatur
        impedit sunt ipsam natus soluta! At odio, deserunt hic nesciunt
        distinctio impedit, veniam reiciendis voluptatum, ad nostrum iste saepe
        ea sit voluptates accusantium explicabo maiores animi qui cum in numquam
        molestiae similique. Quas mollitia et similique nulla veritatis
        voluptate, neque doloribus quia ducimus a unde deserunt asperiores
        molestias recusandae perferendis assumenda libero voluptatum. Nisi
        eveniet ducimus sit aspernatur rem possimus quis nostrum quaerat fuga
        odit id explicabo dolorem, nihil voluptatem omnis incidunt accusamus
        vitae quos non! Sunt id dignissimos adipisci atque assumenda
        reprehenderit nobis, dolorum animi architecto dolores velit labore alias
        illo praesentium repudiandae officia veritatis odit quisquam aspernatur
        error mollitia. Qui quis molestias odio hic neque quibusdam tempore nemo
        expedita alias repellat eum, nam debitis sunt iste, suscipit aut
        provident reprehenderit nesciunt?
      </div>
    </>
  );
};

export default About;
