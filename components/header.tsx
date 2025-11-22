import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-white/60 dark:bg-slate-900/60 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: logo / home */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="SkillNav Logo" width={40} height={40} />
            <span className="text-lg font-semibold">SkillNav</span>
          </Link>
        </div>

        {/* Right: Industry Insights, Growth Tools, Profile */}
        <div className="flex items-center gap-3">
          {/* Industry Insights (public) */}
          <SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-3 py-2 rounded-md">
                <FileText className="h-5 w-5" />
                <span className="hidden sm:inline">Industry Insights</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/insights/market" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Market Trends</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/insights/skills" className="flex items-center gap-2">
                  <StarIcon className="h-4 w-4" />
                  <span>In-demand Skills</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Growth Tools (signed in) */}
          
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="flex items-center gap-2 px-3 py-2 rounded-md">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="hidden sm:inline">Growth Tools</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-yellow-500" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-5 w-5 text-yellow-500" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-yellow-500" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Auth / Profile */}
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton>
                <button className="text-sm px-3 py-2 hover:underline">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-9 sm:h-10 px-3 sm:px-4 hover:opacity-95">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton
              appearance={{
                elements:{
                    avatarBox :"w-10 h-10",
                    userButtonPopoverCard : "shadow-xl",
                    userPreviewMainIdentifier : "font-semibold",
                },
              }} />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;