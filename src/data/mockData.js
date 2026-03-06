import {
  campaigns as campaignImgs,
  people as peopleImgs,
  partners as partnerImgs,
  news as newsImgs,
  events as eventImgs,
  blog as blogImgs,
} from '../assets'

export const stats = [
  { value: 12500, suffix: '+', label: 'People Helped' },
  { value: 340, suffix: '+', label: 'Volunteers' },
  { value: 52, suffix: 'L', label: 'Donations (₹ Cr)' },
  { value: 89, suffix: '+', label: 'Projects Completed' },
]

export const campaigns = [
  {
    id: 1,
    title: 'Clean Water for Villages',
    description: 'Providing safe drinking water and sanitation to 50 villages.',
    image: campaignImgs.campaign1,
    raised: 450000,
    goal: 800000,
    progress: 56,
  },
  {
    id: 2,
    title: 'Education for Every Child',
    description: 'Building schools and providing learning materials in rural areas.',
    image: campaignImgs.campaign2,
    raised: 720000,
    goal: 1000000,
    progress: 72,
  },
  {
    id: 3,
    title: 'Healthcare Camps',
    description: 'Free medical camps and essential medicines for underserved communities.',
    image: campaignImgs.campaign3,
    raised: 380000,
    goal: 500000,
    progress: 76,
  },
  {
    id: 4,
    title: 'Women Empowerment',
    description: 'Skill development and micro-loans for women entrepreneurs.',
    image: campaignImgs.campaign4,
    raised: 290000,
    goal: 600000,
    progress: 48,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Regular Donor',
    quote: 'Knowing my contribution helps feed families and educate children gives me immense satisfaction. Hope Foundation is transparent and impactful.',
    image: peopleImgs.person1,
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'Corporate Partner',
    quote: 'We have partnered with Hope Foundation for three years. Their on-ground execution and reporting standards are exceptional.',
    image: peopleImgs.person2,
  },
  {
    id: 3,
    name: 'Anita Krishnan',
    role: 'Volunteer',
    quote: 'Volunteering here changed my perspective. The team is dedicated and the impact is real. I encourage everyone to get involved.',
    image: peopleImgs.person3,
  },
]

export const partners = [
  { name: 'Partner 1', logo: partnerImgs.partner1 },
  { name: 'Partner 2', logo: partnerImgs.partner2 },
  { name: 'Partner 3', logo: partnerImgs.partner3 },
  { name: 'Partner 4', logo: partnerImgs.partner4 },
  { name: 'Partner 5', logo: partnerImgs.partner5 },
]

export const news = [
  {
    id: 1,
    title: 'New School Inaugurated in Rural Maharashtra',
    excerpt: 'A new primary school built with community support will serve 200+ children.',
    image: newsImgs.news1,
    author: 'Hope Foundation',
    date: 'Mar 1, 2025',
    slug: 'new-school-inaugurated',
  },
  {
    id: 2,
    title: 'Water Project Reaches 10,000 Families',
    excerpt: 'Our clean water initiative has successfully reached its first major milestone.',
    image: newsImgs.news2,
    author: 'Hope Foundation',
    date: 'Feb 28, 2025',
    slug: 'water-project-milestone',
  },
  {
    id: 3,
    title: 'Volunteer Drive 2025: Join Us',
    excerpt: 'We are looking for passionate volunteers for our summer programs.',
    image: newsImgs.news3,
    author: 'Hope Foundation',
    date: 'Feb 25, 2025',
    slug: 'volunteer-drive-2025',
  },
]

export const team = [
  { name: 'Dr. Kavita Reddy', role: 'Founder & CEO', image: peopleImgs.person1 },
  { name: 'Arjun Nair', role: 'Operations Director', image: peopleImgs.person2 },
  { name: 'Meera Iyer', role: 'Program Head', image: peopleImgs.person3 },
  { name: 'Vikram Singh', role: 'Finance & Partnerships', image: peopleImgs.person4 },
]

export const timeline = [
  { year: '2015', title: 'Foundation', desc: 'Hope Foundation was established with a vision to create lasting change.' },
  { year: '2017', title: 'First Campaign', desc: 'Launched our first major water and sanitation campaign.' },
  { year: '2019', title: '10K Lives', desc: 'Reached 10,000 beneficiaries across three states.' },
  { year: '2022', title: 'National Recognition', desc: 'Awarded for excellence in rural development.' },
  { year: '2025', title: 'Scale & Impact', desc: 'Expanding to 5 states with 50+ active projects.' },
]

export const events = [
  {
    id: 1,
    title: 'Annual Charity Run 2025',
    date: '2025-04-15',
    time: '6:00 AM',
    location: 'Marine Drive, Mumbai',
    image: eventImgs.event1,
    slug: 'charity-run-2025',
  },
  {
    id: 2,
    title: 'Youth Leadership Workshop',
    date: '2025-04-22',
    time: '10:00 AM',
    location: 'Bangalore Innovation Center',
    image: eventImgs.event2,
    slug: 'youth-leadership-workshop',
  },
  {
    id: 3,
    title: 'Fundraising Gala',
    date: '2025-05-10',
    time: '7:00 PM',
    location: 'Taj Palace, Delhi',
    image: eventImgs.event3,
    slug: 'fundraising-gala',
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'How We Are Transforming Rural Education',
    excerpt: 'A deep dive into our education initiatives and the impact on thousands of children.',
    image: blogImgs.blog1,
    author: 'Dr. Kavita Reddy',
    date: 'Mar 5, 2025',
    slug: 'transforming-rural-education',
    content: 'Full blog content would go here...',
  },
  {
    id: 2,
    title: 'The Power of Community in Development',
    excerpt: 'Why community participation is at the heart of sustainable development.',
    image: blogImgs.blog2,
    author: 'Meera Iyer',
    date: 'Mar 2, 2025',
    slug: 'power-of-community',
    content: 'Full blog content would go here...',
  },
  {
    id: 3,
    title: 'Water Crisis: Our Response and Learnings',
    excerpt: 'Addressing water scarcity through technology and community ownership.',
    image: blogImgs.blog3,
    author: 'Arjun Nair',
    date: 'Feb 28, 2025',
    slug: 'water-crisis-response',
    content: 'Full blog content would go here...',
  },
  {
    id: 4,
    title: 'Women at the Forefront of Change',
    excerpt: 'Stories of women leading change in their villages.',
    image: blogImgs.blog4,
    author: 'Hope Foundation',
    date: 'Feb 20, 2025',
    slug: 'women-forefront-change',
    content: 'Full blog content would go here...',
  },
]
