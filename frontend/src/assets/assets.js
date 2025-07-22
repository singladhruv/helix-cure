import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import logo from './logo.jpg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajiv Menon',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rajiv is dedicated to promoting preventive healthcare and providing holistic treatment to his patients.',
        fees: 500,
        address: {
            line1: '17th Cross, Indiranagar',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Neha Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Neha specializes in women’s health and is known for her compassionate care.',
        fees: 600,
        address: {
            line1: '27th Cross, Lajpat Nagar',
            line2: 'New Delhi, Delhi'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Ritu Patel',
        image: doc4,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Ritu provides expert dermatological treatments with a focus on long-term skin health.',
        fees: 300,
        address: {
            line1: 'Sector 21, Navi Mumbai',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Karan Kapoor',
        image: doc3,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Karan is passionate about child healthcare and early diagnosis of pediatric conditions.',
        fees: 400,
        address: {
            line1: 'Anand Vihar',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Meera Iyer',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Meera offers specialized care in neurological disorders with a patient-first approach.',
        fees: 500,
        address: {
            line1: 'Velachery Road',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Anuj Deshmukh',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Anuj focuses on providing thorough diagnosis and effective treatment for brain and nerve conditions.',
        fees: 500,
        address: {
            line1: 'Aundh, ITI Road',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Arvind Gupta',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. Arvind emphasizes preventive care and lifestyle management in his practice.',
        fees: 600,
        address: {
            line1: 'Hazratganj, MG Road',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Shraddha Joshi',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Shraddha is committed to providing safe and comprehensive reproductive care for women.',
        fees: 600,
        address: {
            line1: 'Satellite Road',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Swati Singh',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Swati treats a wide range of skin conditions with personalized treatment plans.',
        fees: 300,
        address: {
            line1: 'Sector 62, Noida',
            line2: 'Uttar Pradesh'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Nikhil Verma',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Nikhil provides child-friendly care and works closely with families for holistic wellness.',
        fees: 400,
        address: {
            line1: 'VIP Road, Zirakpur',
            line2: 'Chandigarh, Punjab'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Aarti Nair',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Aarti is known for her deep expertise in treating neurological disorders and patient engagement.',
        fees: 500,
        address: {
            line1: 'Panampilly Nagar',
            line2: 'Kochi, Kerala'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Raghav Reddy',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Raghav combines clinical knowledge and care to manage complex neurological conditions.',
        fees: 500,
        address: {
            line1: 'Banjara Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sangeeta Mishra',
        image: doc13,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sangeeta believes in preventive healthcare and maintaining long-term wellness.',
        fees: 500,
        address: {
            line1: 'Kanke Road',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Aditya Jain',
        image: doc14,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Aditya Jain is a skilled gastroenterologist with expertise in diagnosing and treating digestive and liver-related disorders.',
        fees: 600,
        address: {
            line1: 'Gomti Nagar',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Priya Kulkarni',
        image: doc15,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Priya is committed to enhancing patient confidence through advanced skincare treatments.',
        fees: 300,
        address: {
            line1: 'JM Road',
            line2: 'Pune, Maharashtra'
        }
    }
];
