import { CodeXml, Landmark, LayoutDashboard, LayoutDashboardIcon, ShieldPlusIcon, Sparkle, TelescopeIcon } from "lucide-react"

export const NavMenuItems = [
    {
        href: "/courses",
        label: "Courses",
        values: 'Courses',
    },
    {
        href: "/docs",
        label: "Docs",
        values: 'Docs',
    },
    {
        href: "/about",
        label: "About",
        values: 'About',
    },

]

export const CategoryItems = [
    {
        label: "IT",
        values: 'it',
        href: '/it',
    },
    {
        label: "Finance",
        values: 'finance',
        href: '/finance',
    },
    {
        label: "Accouting",
        values: 'accouting',
        href: '/accouting',
    },
]

export const SocialAccounts = [
    {
        href: "https://www.facebook.com/",
        label: "Facebook",
    },
    {
        href: "https://www.instagram.com/",
        label: "Instagram",
    },
    {
        href: "https://www.tiktok.com/",
        label: "Tiktok",
    },
    {
        href: "https://www.youtube.com/",
        label: "Youtube",
    },
]

export const SidebarDashboardItems = [
    {
        href: "/dashboard",
        label: "Dashboard",
        value: 'dashboard',
        icon: LayoutDashboardIcon
    },
    {
        href: "/dashboard/explore",
        label: "Explore",
        value: 'explore',
        icon: TelescopeIcon
    },
    {
        href: "/dashboard/upgrade",
        label: "Upgrade",
        value: 'upgrade',
        icon: ShieldPlusIcon
    }
]

export const LanguageItems = [
    { label: 'English', value: 'en' },
    { label: 'Vietnamese', value: 'vn' }
]


export const LevelItems = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' },
];

export const DurationItems = [
    { label: '1 Hour', value: '1 hour' },
    { label: '2 Hours', value: '2 hours' },
    { label: 'More than 3 hours', value: 'more than 3 hours' },
];

export const VideoItems = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
];

export const SidebarCoursesItems = [
    { label: 'All Courses', value: '', icon: LayoutDashboard },
    { label: 'IT', value: 'it', icon: CodeXml },
    { label: 'Finance', value: 'finance', icon: Landmark },
    { label: 'Accounting', value: 'accounting', icon: Sparkle },
];

export const MAX_COURSE_FREE = 5;