// "use client";

import { useState, FC } from "react";
import styles from "@/styles/SideBarNav.module.css";
import Link from "next/link";

const SidebarNav: FC = () => {
  const [activeKey, setActiveKey] = useState<string>("1");

  const navlinks: [string, string][] = [
    ["intro", "home"],
    ["about", "about"],
    ["projects", "projects"],
  ];

  return (
    <div className={styles["sidebar-nav"]}>
      <div className={styles["sidebar-links"]}>
        {navlinks.map((linkArr, i) => (
          <div key={i}>
            <Link href={`#${linkArr[0]}`}>/{linkArr[1]}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarNav;