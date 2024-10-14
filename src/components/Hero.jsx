function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800"
    >
      <div className="text-center">
        <h2 className="text-3xl font-thin dark:text-white">Hi I am</h2>
        <h1 className="text-5xl font-bold mb-4 animate-fade-in text-black dark:text-white">
          Akhaya kumar sahoo
        </h1>
        <p className="text-xl mb-8 animate-fade-in animation-delay-200 dark:text-white">
          Full Stack Developer & Tech enthusiast
        </p>
      </div>
    </section>
  );
}

export default Hero;
