import PageHeader from '@/components/PageHeader';
import styles from './Administration.module.css';

export const metadata = {
  title: 'Administration | Staff',
  description: 'Administrative and support staff at SAK Group of Institutions.',
};

type Member = {
  name: string;
  designation: string;
  qualification: string;
  region?: string;
};

const GOVERNING_BODY: Member[] = [
  { name: 'Mr. Mahamed Farooq', designation: 'Chairman and Managing Director', qualification: 'MBA' },
  { name: 'Mrs. Safoora Nayab', designation: 'President', qualification: 'M.Sc' },
  { name: 'Mr. Imran Hussain', designation: 'Director', qualification: 'B. Pharmacy' },
];

const ACADEMIC_LEADERSHIP: Member[] = [
  { name: 'Mr. Sunil Gowda', designation: 'Principal', qualification: 'M.Sc Nursing (Community Health Nursing)' },
  { name: 'Sharath B C', designation: 'Vice Principal', qualification: 'M.Sc Nursing (Psychiatric Nursing)' },
];

const ADMISSIONS_TEAM: Member[] = [
  { name: 'Mr. Rakshith', designation: 'Administrator / Administrative Officer', qualification: 'B.Com' },
  { name: 'Mr. Tarun Roy', designation: 'Admission Officer / Business Development and Admission Manager', qualification: 'B.A', region: 'North India' },
  { name: 'Mr. Sukanta Bhattacharjee', designation: 'Admission Officer / Business Development and Admission Manager', qualification: 'B.Sc Nursing', region: 'Northeast' },
];

function initials(name: string) {
  const words = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, '').split(' ').filter(Boolean);
  return words.slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <div
      className={`glass-panel card-3d animate-on-load ${styles.card}`}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className={styles.cardAccent} />
      <div className={styles.avatar}>{initials(member.name)}</div>
      <h3 className={styles.name}>{member.name}</h3>
      <span className={styles.designation}>{member.designation}</span>
      <p className={styles.qualification}>{member.qualification}</p>
      {member.region && <div className={styles.region}>{member.region}</div>}
    </div>
  );
}

function Tier({ title, members }: { title: string; members: Member[] }) {
  return (
    <>
      <div className={styles.tierHeading}>
        <h3>{title}</h3>
        <div className={styles.tierLine} />
      </div>
      <div className={styles.grid}>
        {members.map((member, index) => (
          <MemberCard key={member.name + member.designation} member={member} index={index} />
        ))}
      </div>
    </>
  );
}

export default function AdministrationPage() {
  return (
    <main>
      <PageHeader title="Administrative Staff" breadcrumb="Staff / Administration" />
      <section className="container" style={{ padding: '4rem 0 6rem 0', minHeight: '50vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }} className="animate-on-load">The Backbone of SAK Group of Institutions</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '1rem auto' }}>
            Our dedicated leadership and administrative staff ensure the smooth day-to-day operations of the college, hostels, and clinical facilities.
          </p>
        </div>

        <Tier title="Governing Body" members={GOVERNING_BODY} />
        <Tier title="Academic Leadership" members={ACADEMIC_LEADERSHIP} />
        <Tier title="Administration & Admissions" members={ADMISSIONS_TEAM} />
      </section>
    </main>
  );
}
