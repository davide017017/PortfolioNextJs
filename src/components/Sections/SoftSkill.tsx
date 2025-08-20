import { FC, memo } from 'react';
import { FaComment, FaPeopleCarry, FaUserClock } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { GrTroubleshoot } from 'react-icons/gr';
import { LuRocket } from 'react-icons/lu';

import { SectionId } from '../../data/data';
import Section from '../Layout/Section';

const SoftSkills: FC = memo(() => {
  const sizeIcon = 32;
  const softSkillsData = [
    {
      id: 1,
      name: 'Comunicazione',
      icon: <FaComment size={sizeIcon} />,
      alt: 'Icona abilità comunicative',
      description:
        'Mi esprimo con chiarezza, ascolto attivamente e adatto il mio stile comunicativo a chi ho davanti.',
    },
    {
      id: 2,
      name: 'Risoluzione dei problemi',
      icon: <GrTroubleshoot size={sizeIcon} />,
      alt: 'Icona abilità risoluzione problemi',
      description:
        'Mi piace affrontare ostacoli con approccio pratico e creativo, cercando sempre la soluzione più efficace.',
    },
    {
      id: 3,
      name: 'Lavoro di squadra',
      icon: <FaPeopleCarry size={sizeIcon} />,
      alt: 'Icona abilità lavoro di squadra',
      description:
        'Credo nella collaborazione: condividere idee e supportarsi porta sempre a risultati migliori.',
    },
    {
      id: 4,
      name: 'Adattabilità',
      icon: <LuRocket size={sizeIcon} />,
      alt: 'Icona abilità adattabilità',
      description:
        'Mi adatto facilmente a contesti nuovi e sfide impreviste, con voglia di imparare e migliorarmi.',
    },
    {
      id: 5,
      name: 'Gestione del tempo',
      icon: <FaUserClock size={sizeIcon} />,
      alt: 'Icona gestione del tempo',
      description:
        'Mi organizzo in modo autonomo, stabilisco priorità e rispetto le scadenze con costanza.',
    },
    {
      id: 6,
      name: 'Pensiero critico',
      icon: <GiBrain size={sizeIcon} />,
      alt: 'Icona pensiero critico',
      description:
        'Valuto le situazioni in modo analitico e prendo decisioni basate su logica ed esperienza.',
    },
  ];

  // Ordinamento (opzionale - se necessario)
  const sortedSoftSkills = [...softSkillsData].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Section className="bg-dark-olive-50" sectionId={SectionId.SoftSkills}>
      <div className="py-3">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-serif text-off-white-100 mb-4 text-center">
            Soft Skills
          </h2>
          <div className="grid gap-1 justify-items-center grid-cols-3 md:grid-cols-6">
            {sortedSoftSkills.map(softSkill => (
              <div
                className="shadow-lg shadow-black rounded-lg bg-off-white-700 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col px-1 py-2 w-full"
                key={softSkill.id}
              >
                <div className="flex flex-col items-center text-sage-green-400">
                  {softSkill.icon} {/* Icona usata direttamente */}
                  <span className="mt-2 text-sm font-bold text-dark-olive-700 text-center break-words">
                    {softSkill.name}
                  </span>
                </div>
                <div className="mt-4 text-center text-dark-olive-700">
                  <p className="break-words text-base py-2 px-1">{softSkill.description}</p>
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
