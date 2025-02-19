import {FC, memo} from 'react';
import {FaComment, FaPeopleCarry, FaUserClock} from 'react-icons/fa';
import {GiBrain} from 'react-icons/gi';
import {GrTroubleshoot} from 'react-icons/gr';
import {LuRocket} from 'react-icons/lu';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const SoftSkills: FC = memo(() => {
  const sizeIcon = 32;
  const softSkillsData = [
    {
      id: 1,
      name: 'Comunicazione',
      icon: <FaComment size={sizeIcon} />, // Icona direttamente qui
      alt: 'Icona abilità comunicative',
      description:
        'Fornisco consulenza chiara e adattata a diversi interlocutori. Gestisco efficacemente le relazioni con i fornitori.',
    },
    {
      id: 2,
      name: 'Risoluzione dei problemi',
      icon: <GrTroubleshoot size={sizeIcon} />,
      alt: 'Icona abilità risoluzione problemi',
      description:
        'Trovo soluzioni creative per la gestione di attività complesse. Risolvo problemi specifici per le esigenze dei clienti.',
    },
    {
      id: 3,
      name: 'Lavoro di squadra',
      icon: <FaPeopleCarry size={sizeIcon} />,
      alt: 'Icona abilità lavoro di squadra',
      description:
        'Collaboro attivamente per raggiungere obiettivi comuni. Contribuisco a un ambiente di lavoro positivo e produttivo.',
    },
    {
      id: 4,
      name: 'Adattabilità',
      icon: <LuRocket size={sizeIcon} />,
      alt: 'Icona abilità adattabilità',
      description:
        'Mi adatto con successo a diversi ruoli e contesti lavorativi. Apprendo rapidamente nuove competenze e tecnologie.',
    },
    {
      id: 5,
      name: 'Gestione del tempo',
      icon: <FaUserClock size={sizeIcon} />,
      alt: 'Icona gestione del tempo',
      description:
        'Organizzo efficacemente il tempo per gestire attività multiple. Rispetto le scadenze e mi impegno per la produttività.',
    },
    {
      id: 6,
      name: 'Pensiero critico',
      icon: <GiBrain size={sizeIcon} />,
      alt: 'Icona pensiero critico',
      description:
        "Prendo decisioni informate basate su analisi accurate. Identifico le priorità e valuto l'impatto delle azioni.",
    },
  ];
  // Ordinamento (opzionale - se necessario)
  const sortedSoftSkills = [...softSkillsData].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Section className="bg-dark-olive-50" sectionId={SectionId.SoftSkills}>
      <div className="py-3">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-serif text-off-white-100 mb-4 text-center">Soft Skills</h2>
          <div className="grid gap-1 justify-items-center grid-cols-3 md:grid-cols-6">
            {sortedSoftSkills.map(softSkill => (
              <div
                className="shadow-lg shadow-black rounded-lg bg-off-white-700 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col px-1 py-2 w-full"
                key={softSkill.id}>
                <div className="flex flex-col items-center text-sage-green-400">
                  {softSkill.icon} {/* Icona usata direttamente */}
                  <span className="mt-2 text-xxs font-bold text-dark-olive-700 text-center break-words">
                    {softSkill.name}
                  </span>
                </div>
                <div className="mt-4 text-center text-dark-olive-700">
                  <p className="break-words text-xxs">{softSkill.description}</p>
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
