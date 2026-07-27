import PageHeader from '@/components/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: 'Apply for Nursing Admission',
  description: 'Submit an enquiry for nursing programs at SAK Group of Institutions.',
};

export default function ApplyOnlinePage() {
  return (
    <main>
      <PageHeader title="Enquire Now" breadcrumb="Enquire" />
      
      <section style={{ padding: '5rem 1rem 8rem 1rem', background: '#f8fafc', position: 'relative' }}>
        
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'var(--primary-color)',
          filter: 'blur(100px)',
          opacity: 0.05,
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'var(--secondary-color)',
          filter: 'blur(120px)',
          opacity: 0.05,
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="animate-on-load">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
