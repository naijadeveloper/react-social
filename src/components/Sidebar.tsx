import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  InstagramLogo,
  InstagramMobileLogo,
  CreatePostLogo,
  NotificationsLogo,
  SearchLogo,
} from "@/assets/IconConsts";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  const sideBarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: (
        <Avatar className="group-hover/trigger:border-2 group-hover/trigger:border-foreground">
          <AvatarImage src="/profilepic.jpg" className="object-cover" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      text: "Profile",
      link: "/enochmmeju",
    },
  ];
  return (
    <div className="w-full h-full border-r-2 border-border md:px-4">
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col gap-8">
        {/* instagram logo for desktop and mobile */}
        <Link
          to="/"
          className={cn(
            `${buttonVariants({ variant: "link" })} mt-3 max-md:hidden`
          )}
        >
          <InstagramLogo />
        </Link>
        <Link
          to="/"
          className={cn(
            `${buttonVariants({ variant: "link" })} mt-3 md:hidden`
          )}
        >
          <InstagramMobileLogo />
        </Link>

        {/* side bar items */}
        <div className="w-full grow flex flex-col gap-10">
          {sideBarItems.map((item, index) => (
            <TooltipProvider key={index} delayDuration={500}>
              <Tooltip>
                <TooltipTrigger asChild className="group/trigger">
                  {item.link ? (
                    <Link
                      to=""
                      className={cn(
                        `${buttonVariants({
                          variant: "link",
                        })} flex justify-center md:justify-start gap-x-4 md:pl-5 hover:no-underline hover:bg-border/80`,
                        {
                          "border-t border-t-border rounded-none pt-8 hover:bg-border/0":
                            item.text == "Profile",
                        }
                      )}
                    >
                      {item.icon}
                      <span className="hidden md:block">{item.text}</span>
                    </Link>
                  ) : (
                    <Button
                      variant="link"
                      className={cn(
                        "flex justify-center md:justify-start gap-x-4 md:pl-5 hover:no-underline hover:bg-border/80"
                      )}
                    >
                      {item.icon}
                      <span className="hidden md:block">{item.text}</span>
                    </Button>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className={cn("text-popover bg-popover-foreground md:hidden")}
                >
                  {item.text}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        {/* logout item */}
        <div className="w-full flex grow max-md:justify-center items-end pb-3">
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/auth"
                  className={cn(
                    `${buttonVariants({
                      variant: "link",
                    })} flex w-full justify-center md:justify-start gap-x-4 hover:no-underline hover:bg-border/80`
                  )}
                >
                  <BiLogOut size={24} />
                  <span className="hidden md:block">Logout</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className={cn("text-popover bg-popover-foreground md:hidden")}
              >
                Logout
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* end of sidebar items definitions */}
      </div>
    </div>
  );
}
