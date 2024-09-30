import React, { useEffect, useRef } from "react";

const Service = () => {
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
      Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
      aspernatur aliquam nemo provident veniam fugit illum dolore quas rem
      placeat unde nisi maxime enim rerum iste eius modi sit eos libero fugiat
      facere velit nesciunt, quis consequatur? Sequi quas delectus earum minima
      libero fugiat alias quo provident iusto necessitatibus beatae voluptatem
      officia, tempore porro in laborum repellat voluptates eveniet praesentium
      quod debitis, veniam reprehenderit? Eveniet quam earum nam molestiae
      cumque tempore iure quaerat, commodi aliquam ab quibusdam praesentium sit,
      beatae repellat perspiciatis similique laborum nisi ipsum a quod dolore.
      Praesentium esse a doloribus aliquid eligendi consequatur molestias quod
      officiis totam velit provident, distinctio odit aut beatae maiores
      exercitationem qui modi sapiente neque aperiam omnis? Temporibus unde
      inventore optio, nulla tempora libero vel nam accusamus quo nemo
      praesentium nisi sequi? Laborum itaque recusandae mollitia dolorum soluta
      deserunt repudiandae qui fugit inventore nesciunt numquam maxime corporis
      placeat et, rerum maiores culpa! Possimus maiores optio molestias omnis
      odit cum, est vitae itaque in reprehenderit eos iure unde at corporis
      quisquam adipisci laboriosam quaerat exercitationem vero dolorum ullam.
      Reiciendis et quae facere reprehenderit a amet exercitationem suscipit
      doloremque, recusandae provident! Fugit rem, praesentium quo, labore, et
      pariatur perspiciatis cupiditate magnam ipsam suscipit enim illo.
    </div>
  );
};

export default Service;
