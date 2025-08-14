import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Unlock Uzbekistan</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#programs" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Programs</a>
              <a href="#contact" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="/apply" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium enhanced-apply-btn">Apply Now</a>
              <button className="text-sm text-gray-600 hover:text-orange-500">EN</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Unlock Your <span className="text-orange-500">Academic Future</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have successfully gained admission to top universities worldwide through our comprehensive guidance and support.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/apply" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold enhanced-apply-btn">
              Apply Now
            </a>
            <a href="#about" className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* University Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Students Study At</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {Array.from({length: 9}).map((_, i) => (
              <img 
                key={i}
                src={`/university-logos/${[
                  '32a4bd60-ed19-4188-b89b-d9b8cbf24bfd.png',
                  '51f0f87b-270c-4b54-adf3-598f29efee8d.png',
                  '5c017224-1f38-454c-9374-621edfa03086.png',
                  '5e81cc66-2bff-49e5-a2a7-60004ad433d6.png',
                  '6c19ad5f-715b-48d5-bf86-d0ddc58916e0.png',
                  '924fc8c1-9fee-4601-ae97-03ad0311c5ac.png',
                  '9ccd516d-c245-48eb-8999-27f5dcc701a9.png',
                  'c7ba6c55-997b-40c6-9631-dd5f11eacdbe.png',
                  'f0246711-0d84-4e23-a1be-7aeb67f9b2da.png'
                ][i % 9]}`}
                alt="University Logo"
                className="h-16 w-auto mx-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Unlock Uzbekistan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive guidance and support to students from Uzbekistan who want to pursue higher education abroad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Get personalized advice from our team of education consultants who have helped hundreds of students.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scholarship Support</h3>
              <p className="text-gray-600">We help you find and apply for scholarships that can significantly reduce your education costs.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Network</h3>
              <p className="text-gray-600">Access our network of universities and institutions across the globe for your perfect match.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Unlock Uzbekistan</h3>
              <p className="text-gray-400">Empowering students to achieve their academic dreams worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="/apply" className="hover:text-white">Apply</a></li>
                <li><a href="/admin" className="hover:text-white">Admin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/pdfs/asian-universities.pdf" className="hover:text-white">Asian Universities Guide</a></li>
                <li><a href="/pdfs/canada-scholarships.pdf" className="hover:text-white">Canada Scholarships</a></li>
                <li><a href="/pdfs/tks-guide.pdf" className="hover:text-white">TKS Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p>📧 info@unlockadmissions.uz</p>
                <p>📱 +998 90 123 45 67</p>
                <p>📍 Tashkent, Uzbekistan</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Unlock Uzbekistan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
