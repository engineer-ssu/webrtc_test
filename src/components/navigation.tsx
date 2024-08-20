'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

 const Navigation = () => {
    const path = usePathname();

  return (
      <nav>
          <ul>
              <li>
                  <Link href="/">Home {path === "/" ? "🔥" : ""}</Link>
              </li>
              <li>
                  <Link href="/chat">화상채팅  {path === "/chat" ? "🔥" : ""}</Link>
              </li>
              <li>
                  <Link href="/screen-sharing">화면 공유 {path === "/screen-sharing" ? "🔥" : ""}</Link>
              </li>
          </ul>
      </nav>
  )
}

export default Navigation;