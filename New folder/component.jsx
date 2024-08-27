/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NrUgENH18EN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Virtual Assistant</h1>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>
      <main className="flex-1 p-6 grid gap-6">
        <div className="bg-card rounded-lg p-6 grid gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Virtual Assistant" />
              <AvatarFallback>VA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium">Virtual Assistant</p>
              <p className="text-muted-foreground text-sm">How can I assist you today?</p>
            </div>
          </div>
          <div className="grid gap-2">
            <Button variant="outline" className="justify-start">
              <CalendarDaysIcon className="mr-2 h-5 w-5" />
              Set Reminder
            </Button>
            <Button variant="outline" className="justify-start">
              <CloudIcon className="mr-2 h-5 w-5" />
              Check Weather
            </Button>
            <Button variant="outline" className="justify-start">
              <HomeIcon className="mr-2 h-5 w-5" />
              Control Smart Home
            </Button>
            <Button variant="outline" className="justify-start">
              <BookOpenIcon className="mr-2 h-5 w-5" />
              Get Information
            </Button>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6 grid gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Virtual Assistant" />
              <AvatarFallback>VA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium">Conversation</p>
              <p className="text-muted-foreground text-sm">Speak to me and I'll respond!</p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="bg-muted/20 rounded-lg p-4 flex items-center gap-4">
              <MicIcon className="h-6 w-6 text-muted-foreground" />
              <Input placeholder="Start speaking..." className="flex-1 bg-transparent border-none focus:ring-0" />
              <Button variant="ghost" size="icon" className="rounded-full">
                <SendIcon className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
            <div className="bg-muted/20 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Virtual Assistant" />
                  <AvatarFallback>VA</AvatarFallback>
                </Avatar>
                <p>Sure, I'd be happy to help! What would you like me to do?</p>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <p>Can you set a reminder for my dentist appointment?</p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Virtual Assistant" />
                  <AvatarFallback>VA</AvatarFallback>
                </Avatar>
                <p>Absolutely, I've added a reminder for your dentist appointment on Friday at 2pm.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-card p-4 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="rounded-full">
          <HomeIcon className="w-6 h-6" />
          <span className="sr-only">Home</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <SettingsIcon className="w-6 h-6" />
          <span className="sr-only">Settings</span>
        </Button>
      </footer>
    </div>
  )
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}