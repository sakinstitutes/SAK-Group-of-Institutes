import PageHeader from '@/components/PageHeader';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu';
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SAK Group of Institutions for admissions, inquiries, or more information.',
};

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <PageHeader title="Contact Us" breadcrumb="Contact" />

      <section className="container">
        <div className={styles.contactGrid}>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.description}>
              Have questions about our nursing programs, admissions, or campus facilities?
              Reach out to our dedicated support team.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <LuMapPin />
                </div>
                <div>
                  <h3 className="animate-on-load">Campus Address</h3>
                  <p>SAK Group of Institutions Campus<br />Bangalore, Karnataka, India</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <LuPhone />
                </div>
                <div>
                  <h3 className="animate-on-load">Call Us</h3>
                  <p>+91 8884330808</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <LuMail />
                </div>
                <div>
                  <h3 className="animate-on-load">Email Us</h3>
                  <p>info@sakcollege.edu<br />admissions@sakcollege.edu</p>
                </div>
              </div>
            </div>

            <div className={styles.socialFollow}>
              <h3>Follow Our Journey</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialBtn}><FaFacebookF style={{ marginRight: '6px' }}/> Facebook</a>
                <a href="#" className={styles.socialBtn}><FaXTwitter style={{ marginRight: '6px' }}/> Twitter</a>
                <a href="#" className={styles.socialBtn}><FaInstagram style={{ marginRight: '6px' }}/> Instagram</a>
              </div>
            </div>
          </div>

          {/* Contact Form Component */}
          <div className={styles.contactFormWrapper}>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe
          /* TODO: replace with the exact "Share > Embed a map" snippet once campus coordinates are confirmed */
          src="https://maps.google.com/maps?q=SAK+Group+of+Institutions,+Bengaluru,+Karnataka&output=embed"
          title="SAK Group of Institutions campus location"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
