import {FC, memo} from 'react';
import {
  FaComment, // Comunicazione
  FaPeopleCarry, // Lavoro di squadra
  FaUserClock, // Gestione del tempo
} from 'react-icons/fa';
import {GiBrain} from 'react-icons/gi'; // Pensiero critico
import {GrTroubleshoot} from 'react-icons/gr'; // Risoluzione dei problemi
import {LuRocket} from 'react-icons/lu'; // Adattabilità/Innovazione

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const SoftSkills: FC = memo(() => {
  const softSkills = [
    {
      id: 1,
      name: 'Comunicazione',
      icon: <FaComment size={64} />,
      alt: 'Icona abilità comunicative',
      description: 'Trasmettere efficacemente concetti tecnici a un pubblico sia tecnico che non tecnico.',
    },
    {
      id: 2,
      name: 'Risoluzione dei problemi',
      icon: <GrTroubleshoot size={64} />,
      alt: 'Icona abilità risoluzione problemi',
      description:
        'Analizzare metodicamente i problemi, sviluppare soluzioni creative e implementarle in modo efficiente.',
    },
    {
      id: 3,
      name: 'Lavoro di squadra',
      icon: <FaPeopleCarry size={64} />,
      alt: 'Icona abilità lavoro di squadra',
      description:
        'Collaborare efficacemente con gli altri per raggiungere un obiettivo comune, favorendo un ambiente di lavoro positivo e produttivo.',
    },
    {
      id: 4,
      name: 'Adattabilità',
      icon: <LuRocket size={64} />,
      alt: 'Icona abilità adattabilità',
      description:
        'Accogliere il cambiamento, imparare prontamente nuove tecnologie e adattarsi ai requisiti evolutivi del progetto.',
    },
    {
      id: 5,
      name: 'Gestione del tempo',
      icon: <FaUserClock size={64} />,
      alt: 'Icona gestione del tempo',
      description:
        'Organizzare e pianificare efficacemente il tempo per rispettare le scadenze e ottimizzare la produttività.',
    },
    {
      id: 6,
      name: 'Pensiero critico',
      icon: <GiBrain size={64} />,
      alt: 'Icona pensiero critico',
      description:
        'Analizzare le informazioni in modo obiettivo, valutando diverse prospettive per prendere decisioni informate.',
    },
  ];

  return (
    <Section className="bg-dark-olive-50" sectionId={SectionId.SoftSkills}>
      <div className="py-3 ">
        <div className="container mx-auto px-8 ">
          <h2 className="text-3xl font-bold font-serif text-off-white-100 mb-8 text-center">Soft Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {softSkills.map(softSkill => (
              <div
                className="shadow-lg shadow-black p-6 rounded-lg bg-off-white-700 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col "
                key={softSkill.id}>
                <div className="flex flex-col items-center text-sage-green-400 ">
                  {softSkill.icon}
                  <span className="mt-2 text-dark-olive-700 text-2xl text-center break-words">{softSkill.name}</span>
                </div>
                <div className="mt-4 text-center text-dark-olive-700">
                  {' '}
                  <p className="break-words">{softSkill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

SoftSkills.displayName = 'SoftSkills';
export default SoftSkills;
