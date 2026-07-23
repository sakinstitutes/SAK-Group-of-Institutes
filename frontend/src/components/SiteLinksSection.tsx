import Link from 'next/link';
import { LuUsers, LuPhone, LuShield, LuFileText } from 'react-icons/lu';
import styles from './SiteLinksSection.module.css';

const LINKS = [
  {
    href: '/about',
    icon: LuUsers,
    title: 'About Us',
    description: 'Our history, mission, and what makes SAK Group of Institutions a trusted name in nursing education.',
  },
  {
    href: '/contact',
    icon: LuPhone,
    title: 'Contact Us',
    description: 'Reach our admission counselors, find our campus address, or send us a query directly.',
  },
  {
    href: '/privacy-policy',
    icon: LuShield,
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information across this website.',
  },
  {
    href: '/terms-of-service',
    icon: LuFileText,
    title: 'Terms of Service',
    description: 'The terms and conditions that govern your use of the SAK Group of Institutions website.',
  },
];

export default function SiteLinksSection() {
  return (
    <section className={styles.siteLinksSection}>
      <div className="container">
        <div className={styles.grid}>
          {LINKS.map(({ href, icon: Icon, title, description }) => (
            <Link key={href} href={href} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDescription}>{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
