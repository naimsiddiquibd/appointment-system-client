import person1 from '../images/people-1.png';
import person2 from '../images/people-2.png';
import person3 from '../images/people-3.png';
import fluoride from '../images/fluoride.png';
import cavity from '../images/cavity.png';
import whitening from '../images/whitening.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

export const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        Icon: AccessTimeIcon,
        background: '#1cc7c1'
    },
    {
        title: 'Visit Our Location',
        description: '11 Ave, West Banani, Dhaka',
        Icon: LocationOnIcon,
        background: '#1C1F2A'
    },
    {
        title: 'Call Us Now',
        description: '+8801643471297 ',
        Icon: WifiCalling3Icon,
        background: '#1cc7c1'
    }
]

export const bookings = [
    {
        id: 1,
        name: 'Dr. Naim Siddiqui',
        time: '08:00 AM - 09:00 AM',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 2,
        name: 'Dr. Naim Hasan',
        time: '08:00 AM - 09:00 AM',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 3,
        name: 'Dr. Naim Hossain',
        time: '10:00 AM - 11:00 AM',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 4,
        name: 'Dr. Naim Patwari',
        time: '11:00 AM - 12:30 PM',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 5,
        name: 'Dr. Naim Sheikh',
        time: '02:00 AM - 04:00 PM',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 6,
        name: 'Dr. Naim Haque',
        time: '04:00 AM - 05:00 PM',
        space: '10 SPACES AVAILABLE',
    },
]

export default infoData;