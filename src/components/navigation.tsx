'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

 const Navigation = () => {
    const path = usePathname();

  return (
      <nav>
          <ul>
              <li>
                  <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
              </li>
              <li>
                  <Link href="/chat">화상채팅</Link>  {path === "/chat" ? "🔥" : ""}
              </li>
              <li>
                  <Link href="/screen-sharing">화면 공유</Link>  {path === "/screen-sharing" ? "🔥" : ""}
              </li>
          </ul>
      </nav>
  )
}

export default Navigation;