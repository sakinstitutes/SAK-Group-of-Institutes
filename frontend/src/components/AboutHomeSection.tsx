import Link from 'next/link';
import styles from './AboutHomeSection.module.css';

export default function AboutHomeSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <h2 className={styles.title}>Why SAK Group of Institutions is a Top Nursing College in Bangalore</h2>
        <div className={styles.content}>
          <p>
            Choosing the right <strong>nursing college</strong> is one of the most important decisions in a
            healthcare career, and SAK Group of Institutions has built a reputation as a trusted{' '}
            <strong>nursing college in Bangalore</strong> for students who want a rigorous, hands-on education
            backed by real clinical exposure. As an Indian Nursing Council (INC) recognized institution with
            over 15 years of academic experience, we are consistently regarded among the{' '}
            <strong>best nursing colleges in Bangalore</strong> by students, parents, and healthcare recruiters
            alike.
          </p>

          <h3 className={styles.subTitle}>Our Nursing Programs</h3>
          <p>
            We offer a complete range of nursing programs designed to take a student from their first year of
            study through to an advanced nursing career. Our <strong>GNM</strong> (General Nursing &amp;
            Midwifery) program is one of the most sought-after <strong>GNM colleges in Bangalore</strong>,
            preparing students for hospital and community health roles in just three years. For students aiming
            for a full undergraduate degree, our <strong>B.Sc Nursing college in Bangalore</strong> program
            delivers a comprehensive four-year curriculum covering clinical, theoretical, and practical nursing
            education. Working professionals and diploma holders can accelerate their qualification through our{' '}
            <strong>Post Basic B.Sc Nursing</strong> program, while graduates looking to specialize can pursue
            our <strong>M.Sc Nursing college in Bangalore</strong> program to move into advanced clinical,
            teaching, or leadership roles. Together, these programs make SAK a genuine one-stop{' '}
            <strong>B.Sc nursing college</strong> and postgraduate destination for nursing aspirants across
            Karnataka.
          </p>

          <h3 className={styles.subTitle}>Placements &amp; Alumni Network</h3>
          <p>
            Academic excellence means little without real career outcomes, which is why we back every program
            with <strong>100% placement assistance</strong>. Our dedicated placement cell works directly with
            hospitals and healthcare networks to connect graduating students with roles that match their
            training. This commitment has helped us build a thriving community of <strong>2000+ alumni
            nurses</strong> working across India and abroad — a network that continues to open doors for our
            current students through referrals, mentorship, and internship opportunities.
          </p>

          <h3 className={styles.subTitle}>Why Students Choose Us</h3>
          <p>
            With <strong>15+ years of trust</strong> from students and families, a faculty team of{' '}
            <strong>50+ experienced educators</strong>, and full recognition from the Indian Nursing Council, SAK
            Group of Institutions offers the credibility, infrastructure, and support system that prospective
            nursing students look for when searching for a <strong>nursing college near me</strong>. Whether
            you&apos;re looking for a <strong>GNM college near me</strong>, a{' '}
            <strong>B.Sc Nursing near me</strong> option after 12th grade, or an{' '}
            <strong>M.Sc Nursing near me</strong> program to advance an existing nursing career, SAK&apos;s Bangalore
            campus puts every one of these programs within easy reach. Whether you&apos;re comparing the{' '}
            <strong>top nursing colleges in Bangalore</strong> or shortlisting a{' '}
            <strong>top 10 nursing college in Bangalore</strong> list for admission season, we invite you to
            visit our campus, meet our faculty, and see why so many students choose SAK as their partner for a
            career in healthcare.
          </p>

          <h3 className={styles.subTitle}>Admissions &amp; Campus Life</h3>
          <p>
            <strong>Nursing admission</strong> at SAK is a straightforward, guided process — our counselling
            team walks every applicant through eligibility, documentation, and course selection, whether
            they&apos;re applying to our <strong>GNM college</strong> program straight out of school or transferring
            into our M.Sc program after completing a B.Sc. Our campus is built around practical{' '}
            <strong>healthcare education</strong>: fully equipped simulation labs, a central medical library,
            and clinical rotations at our affiliated hospitals give every student real patient-care experience
            long before graduation, not just classroom theory. That combination of INC-recognized academics,
            hands-on clinical training, and dedicated placement support is what continues to set SAK Group of Institutions
            apart from other institutions offering similar programs in the city, and it&apos;s why so many families
            researching a <strong>B.Sc Nursing college Bangalore</strong> option end up choosing us.
          </p>

          <p>
            Ready to take the next step? Explore our{' '}
            <Link href="/courses">nursing courses</Link> or{' '}
            <Link href="/admission/apply">apply for admission</Link> today.
          </p>
        </div>
      </div>
    </section>
  );
}
