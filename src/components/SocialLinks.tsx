import Image from 'next/image';
import styles from '@/styles/SocialLinks.module.css';

interface LinkProps {
    href: string;
    label: string;
    image: string;
}

const Link: React.FC<LinkProps> = ({ href, label, image }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
            <Image src={image} alt={label} width={40} height={40} />
        </a>
    );
};

const SOCIAL_LINKS: LinkProps[] = [
    { href: "mailto:zhangc2@illinois.edu", label: "Gmail", image: "/images/mail.svg" },
    { href: "https://www.linkedin.com/in/chensteven2077", label: "LinkedIn Profile", image: "/images/linkedin.svg" },
    { href: "https://github.com/Chen-Steve", label: "GitHub Profile", image: "/images/github.svg" },
    { href: "https://docs.google.com/document/d/1xmIMqafP0Zle2uJodoeWG2I6RN4yubo4GjkKqW9GLK0/edit?usp=sharing", label: "Resume", image: "/images/file-text.svg" }
];

const SocialLinks: React.FC = () => {
    return (
        <div className={styles.container}>
            {SOCIAL_LINKS.map(link => (
                <Link key={link.href} {...link} />
            ))}
        </div>
    );
};

export default SocialLinks;