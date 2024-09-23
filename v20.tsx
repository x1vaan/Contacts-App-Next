import { useState } from 'react'
import { format } from "date-fns"
import { Home, User, UserPlus, Search, Phone, Mail, MoreHorizontal, X, LogOut, Upload, Image as ImageIcon, Pencil, Trash2, Calendar } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid phone number.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  birthday: z.date({
    required_error: "Please select a date.",
  }),
})

export default function Component() {
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [newContact, setNewContact] = useState({
    photo: null
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category: "",
      birthday: new Date(),
    },
  })

  const currentUser = {
    name: 'Jane Doe',
    username: 'jane_doe',
    avatarUrl: '/placeholder.svg?height=40&width=40'
  }

  const contacts = [
    { name: 'John Doe', phone: '+1 234 567 890', email: 'john@example.com', avatarUrl: '/placeholder.svg?height=32&width=32' },
    { name: 'Jane Smith', phone: '+1 234 567 891', email: 'jane@example.com', avatarUrl: '/placeholder.svg?height=32&width=32' },
    { name: 'Bob Johnson', phone: '+1 234 567 892', email: 'bob@example.com', avatarUrl: '/placeholder.svg?height=32&width=32' },
  ]

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewContact(prev => ({ ...prev, photo: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send this data to your backend
  }

  const handleEditContact = (contact: any) => {
    console.log('Edit contact:', contact)
    // Implement edit functionality
  }

  const handleDeleteContact = (contact: any) => {
    console.log('Delete contact:', contact)
    // Implement delete functionality
  }

  return (
    <div className="flex h-screen bg-[#121212] text-white">
      {/* Sidebar */}
      <div className="w-64 bg-black p-6 flex flex-col">
        {/* User Info */}
        <div className="flex items-center space-x-3 mb-8">
          <Avatar className="w-10 h-10">
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-sm">{currentUser.name}</p>
          </div>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <button
                className={`flex items-center w-full py-2 rounded-md ${activeTab === 'home' ? 'text-[#1DB954] font-bold' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('home')}
              >
                <Home className="mr-4" size={24} />
                Home
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full py-2 rounded-md ${activeTab === 'profile' ? 'text-[#1DB954] font-bold' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('profile')}
              >
                <User className="mr-4" size={24} />
                Profile
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full py-2 rounded-md ${activeTab === 'create' ? 'text-[#1DB954] font-bold' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('create')}
              >
                <UserPlus className="mr-4" size={24} />
                Create Contact
              </button>
            </li>
          </ul>
        </nav>
        {/* Logout Button */}
        <button className="mt-auto w-full py-2 text-gray-400 font-medium hover:text-white transition-colors duration-300 flex items-center">
          <LogOut className="mr-4" size={24} />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'home' && (
          <div className="p-8">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search contacts..."
                  className="w-full pl-10 pr-10 py-3 bg-[#242424] border-none rounded-full focus:ring-2 focus:ring-[#1DB954] focus:outline-none text-white placeholder-gray-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Contacts List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contacts.map((contact, index) => (
                <div key={index} className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Avatar className="w-12 h-12 mr-3">
                        <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-bold">{contact.name}</h3>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-gray-400 hover:text-white">
                          <MoreHorizontal size={20} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-[#282828] border-gray-700">
                        <DropdownMenuItem onClick={() => handleEditContact(contact)} className="text-white focus:bg-[#3E3E3E] focus:text-[#1DB954]">
                          <Pencil className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteContact(contact)} className="text-white focus:bg-[#3E3E3E] focus:text-[#E22134]">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <Phone size={16} className="mr-2" />
                    {contact.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Mail size={16} className="mr-2" />
                    {contact.email}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="h-full overflow-auto">
            <div className="bg-gradient-to-r from-purple-800 to-purple-900 p-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">Create Contact</h1>
                <p className="text-xl text-gray-300 mb-6">Add a new contact to your network</p>
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{currentUser.name}</p>
                    <p className="text-sm text-gray-300">{contacts.length} contacts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-40 h-40 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center bg-[#282828]">
                      {newContact.photo ? (
                        <img src={newContact.photo} alt="Contact" className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <ImageIcon size={48} className="text-gray-500" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-2">
                        <Upload size={16} className="text-black" />
                      </div>
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Contact name" {...field} className="bg-[#282828] border-none text-white focus:ring-2 focus:ring-[#1DB954]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email address" {...field} className="bg-[#282828] border-none text-white focus:ring-2 focus:ring-[#1DB954]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone number" {...field} className="bg-[#282828] border-none text-white focus:ring-2 focus:ring-[#1DB954]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[#282828] border-none text-white focus:ring-2 focus:ring-[#1DB954]">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#282828] border-none text-white">
                            <SelectItem value="family">Family</SelectItem>
                            <SelectItem value="friend">Friend</SelectItem>
                            <SelectItem value="work">Work</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birthday"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Birthday</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={`w-full pl-3 text-left font-normal bg-[#282828] border-none text-white focus:ring-2 focus:ring-[#1DB954] ${!field.value && "text-muted-foreground"}`}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <Calendar className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-[#282828] border-none" align="start">
                            <CalendarComponent
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-black font-bold py-3 rounded-full">
                    Create Contact
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

<>
{isMobile && (
  <Button
    onClick={toggleSidebar}
    className="fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-full"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </Button>
)}
<nav
  className={`bg-black h-[100vh] shadow-md shadow-current ${isMobile ? "fixed" : "relative"} z-40 transition-all duration-300 ${
    isOpen ? "w-72" : "w-0"
  } ${isMobile ? "overflow-hidden" : ""}`}
>
  <div className="w-inherit h-full flex flex-col items-center text-textGray p-2">
    {/* USER INFO */}
    <div className="w-full flex justify-start items-center mt-6 space-x-3 pb-4 border-b border-[#282828]">
      {/* ALTERNATIVA QUE QUEDA EPICA */}
      {/* <div className="w-full flex justify-start items-center mt-8 space-x-3 p-4 rounded-md bg-gradient-to-b from-customViolet via-customViolet/80 to-customViolet/50"> */}
      <Link href="/profile">
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarFallback className="text-gray-600">
            {session.data?.user?.name?.charAt(0) || ""}
          </AvatarFallback>
        </Avatar>
      </Link>
      <div className="h-full flex flex-col items-start justify-center">
        <p className="font-semibold text-sm text-white">
          {session.data?.user?.user || "User"}
        </p>
        <p className="text-xs text-textGray">
          {session.data?.user?.email}
        </p>
      </div>
    </div>
    {/* OPTIONS NAVIGATION */}
    <div className="w-full flex flex-col justify-center items-center gap-2 mt-10">
      {sidebarLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            href={link.href}
            key={link.label}
            className={`w-full h-10 rounded-md flex justify-start items-center gap-5 p-4 text-base transition-colors ease-linear duration-200 ${
              pathname.includes(link.href)
                ? "bg-selectedColor text-greenSpotify"
                : "hover:text-white"
            }`}
            onClick={() => isMobile && setIsOpen(false)}
          >
            <Icon size={20} />
            {link.label}
          </Link>
        );
      })}
    </div>
    {/* LOGOUT BUTTON */}
    <div className="w-full h-full flex items-end justify-center">
      <Button
        className="w-full flex justify-start mb-3 bg-inherit text-textGray font-medium transition-colors ease-linear duration-200 hover:text-red-600"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        <LogOut size={20} className="mr-2" /> Log out
      </Button>
    </div>
  </div>
</nav>
</>