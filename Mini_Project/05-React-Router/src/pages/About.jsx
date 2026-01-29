import React from "react";

export default function About(){
  return (
  <section className="bg-white py-6 lg:py-24 min-h-[627px]">
    <div className="max-w-screen mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className="order-last md:order-first">
        <img
            src="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?h=1000&w=1500&fit=crop&mark=https:%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txt%3DFree+Copyright+Free+Photos%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10"
            alt="Startup team working"
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
      </div>

      <div className="text-gray-600">
        <h2 className="text-3xl text-gray-900 font-bold md:text-4xl leading-tight">React development is carried out by passionate developers</h2>

        <div className="mt-6 space-y-4">
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis 
              voluptatem accusantium nemo perspiciatis delectus atque autem! 
            </p>
            <p>
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure 
              expedita at? Asperiores nemo possimus nesciunt dicta veniam.
            </p>
        </div>

        <button className="mt-8 px-6 py-3  bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition ease-in-out">
          Learn more
        </button>
      </div>
    </div>
  </section>
  )
}