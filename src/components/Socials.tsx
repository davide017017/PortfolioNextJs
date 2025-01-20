import { FC, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from '../data/data';

const Socials: FC = memo(() => (
  <div className="flex justify-center space-x-4">
    {socialLinks.map(({ label, icon, href }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        className="flex flex-col items-center justify-center p-4 rounded-md transition duration-300 text-off-white-200 hover:text-forest-green-50 focus:outline-none focus:ring-2 focus:ring-forest-green-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} className="h-8 w-8 mb-2" />
        <span className="text-sm">{label}</span>
      </a>
    ))}
  </div>
));

Socials.displayName = 'Socials';
export default Socials;