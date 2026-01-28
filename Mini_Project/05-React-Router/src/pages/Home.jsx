import React from 'react'

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        {/* Changed gap for better breathing room and ensured items center on mobile */}
        <div className="flex flex-col md:flex-row md:gap-12 lg:items-center">
          
          {/* Image Column */}
          <div className="w-full md:w-5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/32496991/pexels-photo-32496991.jpeg"
              alt="React development team"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="w-full mt-8 md:mt-0 md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-900 font-extrabold md:text-4xl lg:text-5xl leading-tight">
              React development is carried out by passionate developers
            </h2>
            
            <div className="mt-8 space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                aperiam.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
              </p>
            </div>

            {/* Added a CTA button for a "Home Page" feel */}
            <div className="mt-10">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}