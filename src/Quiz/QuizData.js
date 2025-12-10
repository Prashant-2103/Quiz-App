const quizQuestionsData = [
    {
      "question_number": 1,
      "question": "What fundamental concept dictates that energy cannot be created or destroyed, only transformed from one form to another?",
      "options": {
        "A": "Newton's Second Law",
        "B": "The First Law of Thermodynamics",
        "C": "The Second Law of Thermodynamics",
        "D": "Conservation of Momentum"
      },
      "correct_answer": "B",
      "explanation": "The First Law of Thermodynamics is the statement of the conservation of energy, where the change in internal energy equals heat supplied minus work done."
    },
    {
      "question_number": 2,
      "question": "In the context of fluid dynamics, what principle explains why the pressure in a fluid decreases as its speed increases?",
      "options": {
        "A": "Pascal's Principle",
        "B": "Archimedes' Principle",
        "C": "Poiseuille's Law",
        "D": "Bernoulli's Principle"
      },
      "correct_answer": "D",
      "explanation": "Bernoulli's Principle states that an increase in the speed of a fluid occurs simultaneously with a decrease in its potential energy or pressure."
    },
    {
      "question_number": 3,
      "question": "Which of the following describes the nature of **light** according to quantum mechanics?",
      "options": {
        "A": "It acts purely as a transverse wave.",
        "B": "It acts purely as a particle (photons).",
        "C": "It exhibits both wave and particle properties (wave-particle duality).",
        "D": "Its speed depends on the observer's velocity."
      },
      "correct_answer": "C",
      "explanation": "Quantum mechanics and phenomena like the photoelectric effect and diffraction confirm that light exhibits both wave and particle characteristics."
    },
    {
      "question_number": 4,
      "question": "What property of matter causes it to resist any change in its velocity (speed or direction)?",
      "options": {
        "A": "Force",
        "B": "Momentum",
        "C": "Weight",
        "D": "Inertia"
      },
      "correct_answer": "D",
      "explanation": "Inertia is the tendency of an object to maintain its current state of motion, which is directly proportional to its mass."
    },
    {
      "question_number": 5,
      "question": "The bending of waves as they pass through an opening or around the edge of an obstacle is known as:",
      "options": {
        "A": "Refraction",
        "B": "Reflection",
        "C": "Diffraction",
        "D": "Interference"
      },
      "correct_answer": "C",
      "explanation": "Diffraction is the spreading of waves (sound, light, water) when they encounter an obstacle or aperture."
    },
    {
      "question_number": 6,
      "question": "Which type of nuclear reaction involves the merging of lighter atomic nuclei to form a heavier nucleus, releasing vast amounts of energy?",
      "options": {
        "A": "Nuclear Fission",
        "B": "Beta Decay",
        "C": "Nuclear Fusion",
        "D": "Alpha Decay"
      },
      "correct_answer": "C",
      "explanation": "Nuclear Fusion is the process that powers the sun and hydrogen bombs, merging light elements like hydrogen isotopes."
    },
    {
      "question_number": 7,
      "question": "According to the Second Law of Thermodynamics, the total entropy of an isolated system must always:",
      "options": {
        "A": "Decrease",
        "B": "Remain constant",
        "C": "Remain constant or increase",
        "D": "Be converted to work"
      },
      "correct_answer": "C",
      "explanation": "The Second Law states that entropy (disorder) in an isolated system will either increase (for spontaneous processes) or remain constant (for reversible processes)."
    },
    {
      "question_number": 8,
      "question": "What is the force that acts between any two masses, proportional to the product of their masses and inversely proportional to the square of the distance between them?",
      "options": {
        "A": "Electromagnetic Force",
        "B": "Strong Nuclear Force",
        "C": "Gravitational Force",
        "D": "Weak Nuclear Force"
      },
      "correct_answer": "C",
      "explanation": "Newton's Law of Universal Gravitation describes the gravitational force, the weakest but longest-range of the four fundamental forces."
    },
    {
      "question_number": 9,
      "question": "In the study of optics, what term describes the phenomenon where all colors of light separate after passing through a prism?",
      "options": {
        "A": "Refraction",
        "B": "Dispersion",
        "C": "Total Internal Reflection",
        "D": "Polarization"
      },
      "correct_answer": "B",
      "explanation": "Dispersion occurs because the refractive index of a material varies slightly with the frequency (color) of light."
    },
    {
      "question_number": 10,
      "question": "Which of the following is true for an **isolated system** in which momentum is conserved?",
      "options": {
        "A": "The net external force on the system is zero.",
        "B": "The net internal force is zero.",
        "C": "The system is undergoing nuclear fission.",
        "D": "Kinetic energy is always conserved."
      },
      "correct_answer": "A",
      "explanation": "The law of conservation of momentum applies when the net force exerted on the system *by external sources* is zero."
    },
    {
      "question_number": 11,
      "question": "In the Bohr model of the atom, why are the energy levels of electrons considered quantized?",
      "options": {
        "A": "The electron's speed is constant.",
        "B": "Electrons can only exist in orbits where their angular momentum is an integer multiple of h(reduced planks constant).",
        "C": "The atom is a perfect sphere.",
        "D": "The nucleus is positively charged."
      },
      "correct_answer": "B",
      "explanation": "Bohr postulated that the electron's angular momentum is quantized ($L = n\\hbar$), leading directly to discrete, quantized energy levels."
    },
    {
      "question_number": 12,
      "question": "The induced electromotive force (EMF) in a circuit is proportional to the rate of change of the magnetic flux through the circuit. This is the definition of:",
      "options": {
        "A": "Ohm's Law",
        "B": "Lenz's Law",
        "C": "Faraday's Law of Induction",
        "D": "Ampère's Law"
      },
      "correct_answer": "C",
      "explanation": "Faraday's Law is the fundamental law of electromagnetism that describes how a changing magnetic field creates an electric current."
    },
    {
      "question_number": 13,
      "question": "According to Einstein's Special Theory of Relativity, what happens to the length of an object measured by a stationary observer when the object is moving at a velocity close to the speed of light?",
      "options": {
        "A": "The length appears to be longer (dilated).",
        "B": "The length appears to be shorter (contracted).",
        "C": "The length remains the same.",
        "D": "The length becomes infinite."
      },
      "correct_answer": "B",
      "explanation": "Length contraction states that the length of an object measured in the direction of motion is reduced relative to its proper length."
    },
    {
      "question_number": 14,
      "question": "Heat transfer through the movement of fluids (liquids or gases) is known as:",
      "options": {
        "A": "Conduction",
        "B": "Radiation",
        "C": "Convection",
        "D": "Absorption"
      },
      "correct_answer": "C",
      "explanation": "Convection involves the movement of hotter, less dense fluid rising and colder, denser fluid sinking, creating currents that transfer heat."
    },
    {
      "question_number": 15,
      "question": "What is the defining characteristic of a **non-conservative force**?",
      "options": {
        "A": "The force is proportional to the distance.",
        "B": "The work done by the force over a closed path is zero.",
        "C": "The work done by the force depends on the path taken.",
        "D": "It always opposes motion."
      },
      "correct_answer": "C",
      "explanation": "For a non-conservative force (like friction or air resistance), the work required to move an object between two points is dependent on the path taken."
    }
  ]

  export default quizQuestionsData;