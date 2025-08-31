import "./HeroAndBrandLogos.scss";
import Image from 'next/image';

const HeroAndBrandLogos = () => {
  const brands = [
    { name: 'Adidas', logo: "/brandLogos/Adidas.png" },
    // { name: 'AmericanEagle', logo: "/brandLogos/AmericanEagle.png" },
    { name: 'CalvinKlein', logo: "/brandLogos/CalvinKlein.png" },
    { name: 'Defacto', logo: "/brandLogos/Defacto.png" },
    { name: 'Guess', logo: "/brandLogos/Guess.png" },
    { name: 'HugoBoss', logo: "/brandLogos/HugoBoss.png" },
    { name: 'Lacoste', logo: "/brandLogos/lacoste.png" },
    { name: 'Mango', logo: "/brandLogos/Mango.png" },
    { name: 'MassimoDutti', logo: "/brandLogos/MassimoDutti.png" },
    { name: 'Nike', logo: "/brandLogos/Nike.png" },
    { name: 'Puma', logo: "/brandLogos/Puma.png" },
    // { name: 'RalphLauren', logo: "/brandLogos/RalphLauren.png" },
    { name: 'Reebok', logo: "/brandLogos/Reebok.png" },
    { name: 'UnderArmour', logo: "/brandLogos/UnderArmour.png" },
    { name: 'Zara', logo: "/brandLogos/Zara.png" },
  ];
  const repeatedBrands = [...brands, ...brands, ...brands];

  return (
      <section className="container mx-auto">
        <Image  // hero image
          src="/Hero.png"
          alt="Hero Image"
          width={1920}
          height={700}
          className="w-full h-full object-cover"
        />
        <div className="logos-wrapper py-[6px] sm:py-2 md:py-4">
          <div className="logos-container items-center">
            {repeatedBrands.map((brand, index) => (
              <div key={index} className="logo-item">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={70}
                  height={35}
                  className="contain max-h-5 md:max-h-8 w-fit"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default HeroAndBrandLogos;