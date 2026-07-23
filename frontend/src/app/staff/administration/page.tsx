import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Administration | Staff',
  description: 'Administrative and support staff at SAK Group of Institutions.',
};

const LEADERSHIP = [
  { name: 'Mr. Mahamed Farooq', designation: 'Chairman and Managing Director', qualification: 'MBA' },
  { name: 'Mrs. Safoora Nayab', designation: 'President', qualification: 'M.Sc' },
  { name: 'Mr. Imran Hussain', designation: 'Director', qualification: 'B. Pharmacy' },
  { name: 'Mr. Sunil Gowda', designation: 'Principal', qualification: 'M.Sc Nursing' },
  { name: 'Sharath B C', designation: 'Vice Principal', qualification: 'M.Sc Nursing' },
  { name: 'Mr. Rakshith', designation: 'Administrator / Administrative Officer', qualification: 'B.Com' },
  { name: 'Mr. Tarun Roy', designation: 'Admission Officer / Business Development and Admission Manager', qualification: 'B.A' },
  { name: 'Mr. Sukanta Bhattacharjee', designation: 'Admission Officer / Business Development and Admission Manager', qualification: 'B.Sc Nursing' },
];

export default function AdministrationPage() {
  return (
    <main>
      <PageHeader title="Administrative Staff" breadcrumb="Staff / Administration" />
      <section className="container" style={{ padding: '4rem 0 6rem 0', minHeight: '50vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }} className="animate-on-load">The Backbone of SAK Group of Institutions</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '1rem auto' }}>
            Our dedicated leadership and administrative staff ensure the smooth day-to-day operations of the college, hostels, and clinical facilities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {LEADERSHIP.map((member, index) => (
            <div
              key={member.name + member.designation}
              className="glass-panel card-3d animate-on-load"
              style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--primary-color)', animationDelay: `${0.1 * index}s` }}
            >
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem' }}>{member.designation}</p>
              {member.qualification && (
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{member.qualification}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
