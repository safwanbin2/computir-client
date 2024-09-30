import React, { useEffect, useRef } from "react";

const Contact = () => {
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
    <div ref={pageRef} className="text-white w-11/12 mx-auto py-10">
      Contact Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
      quis labore pariatur, tempore minus eum consectetur aperiam magnam vel
      possimus optio sint cumque nisi neque aspernatur quasi temporibus omnis
      veniam? Enim commodi hic unde, id totam rem consequuntur tempore, culpa
      dicta autem aut illo. Inventore corporis nobis, tempora minus asperiores
      quisquam possimus necessitatibus dolor pariatur. Libero tenetur soluta
      nisi sed! Hic officia dolores sequi natus totam, odit perferendis,
      excepturi maiores nobis facere dolor nisi dicta? Soluta fugit reiciendis
      esse beatae, eaque libero cupiditate laborum molestias illo porro voluptas
      sed sequi facere maxime amet repellat laboriosam, necessitatibus nostrum
      quae ullam accusantium itaque! Facere voluptate in fugit minus doloribus
      autem odit facilis nisi molestiae. Nam consectetur omnis molestiae magnam
      minima repellat libero ipsam autem voluptates aliquid iste odit, eaque
      unde repellendus, eius alias fuga? Harum autem ad provident officiis
      culpa, quia aspernatur eaque similique sed, necessitatibus accusamus. Quia
      tempora rerum dignissimos est ullam aspernatur quo eius, perspiciatis et
      sapiente laborum, praesentium incidunt aut iste corporis blanditiis dolor
      optio. Quaerat cumque quibusdam sit commodi et eum dicta. Voluptatem eaque
      suscipit quis vitae iste adipisci dolor dolorum id quaerat tempora,
      voluptatum non, commodi nesciunt fuga voluptatibus impedit reprehenderit.
      Illo corrupti dolorum iste doloribus saepe.
    </div>
  );
};

export default Contact;
