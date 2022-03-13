import React, { useEffect, useState } from "react";
import SinglePet from "./SinglePet";

function Pets() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const getPets = async () => {
      const details = await fetch(
        `https://api.github.com/users/dheeraj-projects/repos`,
        {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        }
      );
      const data = await details.json();
      setPets(data);
    };

    getPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mx-auto p-10">
      <h1 className="text-center tracking-tighter text-4xl">
        <span className="text-pink">/</span>pets
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => {
              return (
                <SinglePet
                  key={pet.id}
                  name={pet.name}
                  description={pet.description}
                  homepage={pet.homepage}
                  topics={pet.topics}
                />
              );
            })}
          </div>
        </section>
      </h1>
    </div>
  );
}

export default Pets;
