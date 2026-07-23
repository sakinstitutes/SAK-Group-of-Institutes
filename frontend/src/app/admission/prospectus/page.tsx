import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import styles from './Prospectus.module.css';
import { LuBookOpen, LuCircleCheck, LuDownload, LuInfo } from 'react-icons/lu';

export const metadata = {
  title: 'Prospectus | SAK Group of Institutions',
  description: 'Download the official prospectus of SAK Group of Institutions.',
};

export default function ProspectusPage() {
  return (
    <main>
      <PageHeader title="College Prospectus" breadcrumb="Prospectus" />
      
      <section className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Side: Info & Download */}
          <div className={styles.infoCard}>
            <div className={styles.topBorder}></div>
            <div className={styles.iconWrapper}>
              <LuBookOpen />
            </div>
            
            <h2 className={`animate-on-load ${styles.title}`}>Information Brochure</h2>
            <p className={styles.description}>
              Our official prospectus is a comprehensive guide to everything SAK Group of Institutions has to offer. 
              Inside, you will find detailed information regarding our infrastructure, expert faculty, modern curriculum, and vibrant campus life.
            </p>
            
            <div className={styles.featuresBox}>
              <h4 className={styles.featuresTitle}>
                <LuInfo /> What&apos;s inside?
              </h4>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <LuCircleCheck className={styles.checkIcon} />
                  <span>Detailed Course Curriculum & Syllabi</span>
                </li>
                <li className={styles.featureItem}>
                  <LuCircleCheck className={styles.checkIcon} />
                  <span>Hospital Tie-ups & Clinical Training details</span>
                </li>
                <li className={styles.featureItem}>
                  <LuCircleCheck className={styles.checkIcon} />
                  <span>Hostel & Campus Facility highlights</span>
                </li>
                <li className={styles.featureItem}>
                  <LuCircleCheck className={styles.checkIcon} />
                  <span>Complete Fee Structure & Scholarship Info</span>
                </li>
              </ul>
            </div>
            
            <button className={`btn-primary ${styles.downloadBtn}`} disabled>
              <LuDownload />
              Download PDF (Coming Soon)
            </button>
          </div>

          {/* Right Side: Image Showcase */}
          <div className={styles.imageWrapper}>
            <Image 
              src="/gallery1.jpeg" 
              alt="Nursing Students reading prospectus" 
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.imageOverlay}>
              <h3 className={`animate-on-load ${styles.overlayTitle}`}>Begin Your Journey</h3>
              <p className={styles.overlayText}>Join thousands of alumni making a difference in global healthcare.</p>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
