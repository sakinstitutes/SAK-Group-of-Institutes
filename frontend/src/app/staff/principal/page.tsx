import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: "Principal's Profile",
  description: "Message and profile of the Principal at SAK Group of Institutions.",
};

export default function PrincipalPage() {
  return (
    <main>
      <PageHeader title="Principal's Profile" breadcrumb="Staff / Principal" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div className="responsive-grid-1-2" style={{ alignItems: 'start' }}>
          
          <div style={{ position: 'relative', minHeight: '350px', height: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image 
              src="/gallery7.jpeg" 
              alt="Principal Profile" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontSize: '2.5rem' }} className="animate-on-load">Mr. Sunil Gowda</h2>
            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 500 }}>Principal, SAK Group of Institutions</h4>

            <div className="glass-panel card-3d" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Message from the Principal</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontStyle: 'italic' }}>
                &ldquo;Welcome to SAK Group of Institutions. Our mission is to prepare compassionate, highly skilled, and ethical nursing professionals who can meet the dynamic healthcare needs of society. We provide a supportive, evidence-based learning environment that challenges our students to achieve excellence in both academics and clinical practice.&rdquo;
              </p>
            </div>

            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} className="animate-on-load">Qualifications</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
              <li>M.Sc Nursing</li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
}
