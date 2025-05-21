import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, memo } from 'react';

import { socialLinks } from '../data/data';

const Socials: FC = memo(() => (
  <div className="flex justify-center space-x-4">
    {socialLinks.map(({ label, icon, href }) => (
      <a
        aria-label={label}
        className="flex flex-col items-center justify-center p-1 lg:p-4 rounded-md transition duration-300 text-off-white-200 hover:text-forest-green-50 focus:outline-none focus:ring-2 focus:ring-forest-green-50"
        href={href}
        key={label}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon className="h-9 w-9 mb-2" icon={icon} />
        <span className="text-sm">{label}</span>
      </a>
    ))}
  </div>
));

Socials.displayName = 'Socials';
export default Socials;
