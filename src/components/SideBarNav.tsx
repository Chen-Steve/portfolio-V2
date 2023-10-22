import { useState, FC } from "react";
import styles from "@/styles/SideBarNav.module.css";
import Link from "next/link";

interface NavLink {
  id: string;
  label: string;
}

const SidebarNav: FC = () => {
  const [activeKey, setActiveKey] = useState<string>("intro");

  const navlinks: NavLink[] = [
    { id: "intro", label: "home" },
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
  ];

  return (
    <div className={styles["sidebar-nav"]}>
      <div className={styles["sidebar-links"]}>
        {navlinks.map((link) => (
          <div key={link.id}>
            <Link href={`#${link.id}`} className={link.id === activeKey ? styles.active : ""}>
              /{link.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarNav;