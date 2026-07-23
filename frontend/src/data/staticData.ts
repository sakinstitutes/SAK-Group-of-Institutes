// Static site data — edit this file to update content

export const SITE_SETTINGS = {
  collegeName: 'SAK Group of Institutions',
  email: 'info@sakcollege.edu',
  phone: '+91 8884330808',
  address: 'SAK Group of Institutions Campus, Banglore, India',
  facebookUrl: 'https://share.google/2uQP8rSyNgw5uwJaq',
  instagramUrl: 'https://www.instagram.com/sak_institutionsblr07/',
  twitterUrl: '#',
  linkedinUrl: '#',
};

export const COURSES = [
  {
    id: 'gnm',
    name: 'GNM (General Nursing & Midwifery)',
    duration: '3 Years',
    seats: 60,
    fees: 'Contact college for fee details',
    eligibility: '10+2 with English, minimum 40% marks',
    description: 'Prepares general nurses to function as members of the health team in hospital and community health environments.',
    iconUrl: '/icons/gnm-icon-v2.png',
    isActive: true,
  },
  {
    id: 'bsc',
    name: 'B.Sc. Nursing',
    duration: '4 Years (8 Semesters)',
    seats: 100,
    fees: 'Contact college for fee details',
    eligibility: '10+2 with PCB & English, minimum 45% marks',
    description: 'Prepares students to become competent professional nurses providing comprehensive care across all health sectors.',
    iconUrl: '/icons/bsc-icon-v2.png',
    isActive: true,
  },
  {
    id: 'post-basic',
    name: 'Post Basic B.Sc. Nursing',
    duration: '2 Years',
    seats: 40,
    fees: 'Contact college for fee details',
    eligibility: 'GNM diploma holders registered as R.N.R.M.',
    description: 'Upgrades registered nurses with a GNM diploma to a bachelor\'s degree, expanding clinical expertise and career opportunities.',
    iconUrl: '/icons/post-basic-icon-v2.png',
    isActive: true,
  },
  {
    id: 'msc',
    name: 'M.Sc. Nursing',
    duration: '2 Years',
    seats: 25,
    fees: 'Contact college for fee details',
    eligibility: 'B.Sc. Nursing with minimum 55% marks and 1 year work experience',
    description: 'Advanced nursing program preparing practitioners, educators, and researchers with specializations in 5 disciplines.',
    iconUrl: '/icons/msc-icon-v2.png',
    isActive: true,
  },
];

export const GALLERY_IMAGES = [
  { id: '1', imageUrl: '/gallery1.jpeg', caption: 'Campus Life', category: 'CAMPUS' },
  { id: '2', imageUrl: '/gallery2.jpeg', caption: 'Clinical Training', category: 'LABS' },
  { id: '3', imageUrl: '/gallery3.jpeg', caption: 'Nursing Students', category: 'CAMPUS' },
  { id: '4', imageUrl: '/gallery4.jpeg', caption: 'Medical Laboratory', category: 'LABS' },
  { id: '5', imageUrl: '/gallery5.jpeg', caption: 'Campus Events', category: 'EVENTS' },
  { id: '6', imageUrl: '/gallery6.jpeg', caption: 'Student Life', category: 'CAMPUS' },
  { id: '7', imageUrl: '/gallery7.jpeg', caption: 'Clinical Practice', category: 'LABS' },
  { id: '8', imageUrl: '/gallery8.jpeg', caption: 'Campus Grounds', category: 'CAMPUS' },
  { id: '9', imageUrl: '/gallery9.jpeg', caption: 'Academic Session', category: 'EVENTS' },
  { id: '10', imageUrl: '/gallery10.jpeg', caption: 'Practical Training', category: 'LABS' },
  { id: '11', imageUrl: '/gallery11.jpeg', caption: 'College Building', category: 'CAMPUS' },
  { id: '12', imageUrl: '/gallery12.jpeg', caption: 'Student Activities', category: 'EVENTS' },
  { id: '13', imageUrl: '/gallery13.jpeg', caption: 'Nursing Lab', category: 'LABS' },
  { id: '14', imageUrl: '/gallery14.jpeg', caption: 'Graduation Day', category: 'EVENTS' },
  { id: '15', imageUrl: '/gallery15.png', caption: 'Medical Research', category: 'LABS' },
];

export const NOTICES = [
  {
    id: '1',
    content: '<strong>Admissions Open 2024–25</strong> — Apply now for GNM, B.Sc., Post Basic & M.Sc. Nursing programs.',
    link: '/admission/online-application',
    isActive: true,
  },
  {
    id: '2',
    content: 'Merit list for B.Sc. Nursing intake will be published shortly. Stay tuned.',
    link: '/admission/merit-list',
    isActive: true,
  },
  {
    id: '3',
    content: 'Download the prospectus for detailed program information and fee structure.',
    link: '/admission/prospectus',
    isActive: true,
  },
];

export const FACULTY: {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  department: string | null;
  imageUrl: string | null;
  isActive: boolean;
}[] = [];
// Add faculty entries here when available, e.g.:
// { id: '1', name: 'Ms. Anjali Sharma', designation: 'Principal', qualification: 'M.Sc. Nursing', department: 'Administration', imageUrl: null, isActive: true },
