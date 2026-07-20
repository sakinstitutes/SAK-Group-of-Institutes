import Link from 'next/link';
import styles from './CourseCarousel.module.css';
import { COURSES } from '@/data/staticData';

const icons = ['🏥', '⚕️', '🎓', '👩‍⚕️'];
const images = ['/nursing_students.png', '/medical_research.png'];

export default function CourseCarousel() {
  const activeCourses = COURSES.filter(c => c.isActive).slice(0, 6);

  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Programs We Offer</h2>
          <p className={styles.subtitle}>Discover a range of undergraduate and postgraduate courses tailored to industry needs.</p>
        </div>

        <div className={styles.grid}>
          {activeCourses.map((course, index) => (
            <div
              key={course.id}
              className={`glass-panel ${styles.card}`}
              style={{ backgroundImage: `url(${images[index % images.length]})` }}
            >
              <div className={styles.icon}>{icons[index % icons.length]}</div>
              <h3 className={styles.cardTitle}>{course.name}</h3>
              <p className={styles.cardDesc}>{course.description || `Duration: ${course.duration} | Seats: ${course.seats}`}</p>
              <Link href="/courses" className={styles.cardLink}>
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
