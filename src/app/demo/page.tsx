"use client";
import { Button } from "@/components/ui/button";
import { useGlobalModal } from "@/hooks/use-global-ui";
import React from "react";

function Demo() {
  const modal = useGlobalModal();

  const openModal = () => {
    modal.custom({
      content: (
        <>
          <h1>This is a modal demo</h1>
          <Button onClick={() => modal.closeAll()}>Close Me</Button>
        </>
      ),
    });
  };

  return (
    <div className="h-[200vh] bg-red-100">
      <Button onClick={openModal}>Open Modal</Button>
    </div>
  );
}

export default Demo;

// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Switch } from "@/components/ui/switch";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Progress } from "@/components/ui/progress";
// import { Separator } from "@/components/ui/separator";
// import { useToast, useGlobalModal } from "@/hooks/use-global-ui";
// import {
//   AlertCircle,
//   CheckCircle,
//   Info,
//   Settings,
//   ImageIcon,
//   FileText,
//   Download,
//   Upload,
//   Calendar,
//   CreditCard,
//   Bell,
//   Shield,
//   Monitor,
//   Zap,
// } from "lucide-react";
// import { toast } from "sonner";

// export default function ModalDemo() {
//   const modal = useGlobalModal();
//   const [progress, setProgress] = useState(0);

//   // Sample data
//   const [userProfile, setUserProfile] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     role: "Administrator",
//     notifications: true,
//     theme: "light",
//   });

//   const modalExamples = [
//     {
//       category: "Basic Alerts",
//       icon: <AlertCircle className="w-5 h-5" />,
//       examples: [
//         {
//           title: "Success Alert",
//           description: "Simple success message",
//           variant: "success" as const,
//           action: () =>
//             modal.alert("Success!", "Your action was completed successfully."),
//         },
//         {
//           title: "Warning Alert",
//           description: "Important warning message",
//           variant: "warning" as const,
//           action: () =>
//             modal.alert(
//               "Warning",
//               "Please review your settings before proceeding."
//             ),
//         },
//         {
//           title: "Error Alert",
//           description: "Error notification",
//           variant: "destructive" as const,
//           action: () =>
//             modal.alert(
//               "Error Occurred",
//               "Something went wrong. Please try again later."
//             ),
//         },
//         {
//           title: "Info Alert",
//           description: "Informational message",
//           variant: "secondary" as const,
//           action: () =>
//             modal.alert(
//               "Information",
//               "Here's some important information you should know."
//             ),
//         },
//       ],
//     },
//     {
//       category: "Confirmations",
//       icon: <CheckCircle className="w-5 h-5" />,
//       examples: [
//         {
//           title: "Delete Confirmation",
//           description: "Destructive action confirmation",
//           variant: "destructive" as const,
//           action: () =>
//             modal.confirmDelete("Important Document", () => {
//               toast.success("Document deleted successfully!");
//             }),
//         },
//         {
//           title: "Save Changes",
//           description: "Save confirmation dialog",
//           variant: "default" as const,
//           action: () =>
//             modal.confirm(
//               "Save Changes",
//               "Do you want to save your changes before leaving?",
//               () => toast.success("Changes saved!"),
//               { confirmText: "Save", cancelText: "Discard" }
//             ),
//         },
//         {
//           title: "Logout Confirmation",
//           description: "Session termination",
//           variant: "outline" as const,
//           action: () =>
//             modal.confirm(
//               "Logout",
//               "Are you sure you want to logout?",
//               () => toast.info("Logged out successfully"),
//               {
//                 confirmText: "Logout",
//                 cancelText: "Stay",
//               }
//             ),
//         },
//       ],
//     },
//     {
//       category: "Forms & Input",
//       icon: <FileText className="w-5 h-5" />,
//       examples: [
//         {
//           title: "Contact Form",
//           description: "Multi-field form modal",
//           variant: "default" as const,
//           action: () =>
//             modal.custom({
//               title: "Contact Us",
//               size: "lg",
//               content: <ContactFormContent />,
//             }),
//         },
//         {
//           title: "Quick Note",
//           description: "Simple text input",
//           variant: "outline" as const,
//           action: () =>
//             modal.custom({
//               title: "Add Note",
//               size: "md",
//               content: <QuickNoteContent />,
//             }),
//         },
//         {
//           title: "Settings Panel",
//           description: "Complex settings form",
//           variant: "secondary" as const,
//           action: () =>
//             modal.custom({
//               title: "Application Settings",
//               size: "xl",
//               content: (
//                 <SettingsContent
//                   userProfile={userProfile}
//                   setUserProfile={setUserProfile}
//                 />
//               ),
//             }),
//         },
//       ],
//     },
//     {
//       category: "Media & Gallery",
//       icon: <ImageIcon className="w-5 h-5" />,
//       examples: [
//         {
//           title: "Image Gallery",
//           description: "Photo gallery viewer",
//           variant: "default" as const,
//           action: () =>
//             modal.custom({
//               title: "Photo Gallery",
//               size: "xl",
//               content: <ImageGalleryContent />,
//             }),
//         },
//         {
//           title: "File Upload",
//           description: "File upload interface",
//           variant: "outline" as const,
//           action: () =>
//             modal.custom({
//               title: "Upload Files",
//               size: "lg",
//               content: <FileUploadContent />,
//             }),
//         },
//         {
//           title: "Video Player",
//           description: "Embedded video player",
//           variant: "secondary" as const,
//           action: () =>
//             modal.custom({
//               title: "Video Preview",
//               size: "xl",
//               content: <VideoPlayerContent />,
//             }),
//         },
//       ],
//     },
//     {
//       category: "Data & Tables",
//       icon: <FileText className="w-5 h-5" />,
//       examples: [
//         {
//           title: "User Details",
//           description: "Detailed user information",
//           variant: "default" as const,
//           action: () =>
//             modal.custom({
//               title: "User Profile",
//               size: "lg",
//               content: <UserDetailsContent />,
//             }),
//         },
//         {
//           title: "Data Export",
//           description: "Export configuration",
//           variant: "outline" as const,
//           action: () =>
//             modal.custom({
//               title: "Export Data",
//               size: "md",
//               content: <DataExportContent />,
//             }),
//         },
//         {
//           title: "Analytics Dashboard",
//           description: "Mini analytics view",
//           variant: "secondary" as const,
//           action: () =>
//             modal.custom({
//               title: "Quick Analytics",
//               size: "xl",
//               content: <AnalyticsContent />,
//             }),
//         },
//       ],
//     },
//     {
//       category: "Interactive & Dynamic",
//       icon: <Zap className="w-5 h-5" />,
//       examples: [
//         {
//           title: "Progress Tracker",
//           description: "Multi-step process",
//           variant: "default" as const,
//           action: () => showProgressModal(),
//         },
//         {
//           title: "Payment Form",
//           description: "Checkout process",
//           variant: "outline" as const,
//           action: () =>
//             modal.custom({
//               title: "Complete Payment",
//               size: "lg",
//               content: <PaymentFormContent />,
//             }),
//         },
//         {
//           title: "Calendar Picker",
//           description: "Date selection interface",
//           variant: "secondary" as const,
//           action: () =>
//             modal.custom({
//               title: "Select Date",
//               size: "md",
//               content: <CalendarPickerContent />,
//             }),
//         },
//       ],
//     },
//   ];

//   const showProgressModal = () => {
//     const modalId = modal.custom({
//       title: "Processing Request",
//       size: "md",
//       closable: false,
//       content: (
//         <ProgressContent
//           progress={progress}
//           setProgress={setProgress}
//           modalId=""
//         />
//       ),
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Modal Categories */}
//         <div className="space-y-12">
//           {modalExamples.map((category, categoryIndex) => (
//             <div key={categoryIndex} className="space-y-6">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
//                   {category.icon}
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
//                     {category.category}
//                   </h2>
//                   <p className="text-muted-foreground">
//                     {category.examples.length} examples available
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {category.examples.map((example, exampleIndex) => (
//                   <Card
//                     key={exampleIndex}
//                     className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-[1.02] bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
//                   >
//                     <CardHeader className="pb-3">
//                       <div className="flex items-center justify-between">
//                         <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
//                           {example.title}
//                         </CardTitle>
//                         <Badge
//                           variant={
//                             example.variant ? example.variant : "default"
//                           }
//                           className="text-xs"
//                         >
//                           {example.variant}
//                         </Badge>
//                       </div>
//                       <CardDescription className="text-sm">
//                         {example.description}
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="pt-0">
//                       <Button
//                         onClick={example.action}
//                         className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300"
//                         variant={example.variant ? example.variant : "default"}
//                       >
//                         Open Modal
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Size Demonstration */}
//         <div className="mt-16 space-y-6">
//           <div className="flex items-center space-x-3">
//             <div className="p-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg text-white">
//               <Monitor className="w-5 h-5" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
//                 Size Variations
//               </h2>
//               <p className="text-muted-foreground">
//                 Different modal sizes for various content types
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//             {[
//               { size: "sm", label: "Small", description: "Quick actions" },
//               { size: "md", label: "Medium", description: "Standard forms" },
//               { size: "lg", label: "Large", description: "Detailed content" },
//               { size: "xl", label: "Extra Large", description: "Rich media" },
//               {
//                 size: "full",
//                 label: "Full Screen",
//                 description: "Complex interfaces",
//               },
//             ].map((sizeOption) => (
//               <Card
//                 key={sizeOption.size}
//                 className="text-center hover:shadow-lg transition-shadow"
//               >
//                 <CardContent className="p-4">
//                   <div className="mb-3">
//                     <div
//                       className={`mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-lg text-white flex items-center justify-center ${
//                         sizeOption.size === "sm"
//                           ? "w-8 h-8"
//                           : sizeOption.size === "md"
//                           ? "w-10 h-10"
//                           : sizeOption.size === "lg"
//                           ? "w-12 h-12"
//                           : sizeOption.size === "xl"
//                           ? "w-14 h-14"
//                           : "w-16 h-16"
//                       }`}
//                     >
//                       <Monitor className="w-4 h-4" />
//                     </div>
//                   </div>
//                   <h3 className="font-semibold text-sm mb-1">
//                     {sizeOption.label}
//                   </h3>
//                   <p className="text-xs text-muted-foreground mb-3">
//                     {sizeOption.description}
//                   </p>
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="w-full text-xs bg-transparent"
//                     onClick={() =>
//                       modal.custom({
//                         title: `${sizeOption.label} Modal`,
//                         size: sizeOption.size as any,
//                         content: (
//                           <div className="space-y-4">
//                             <p>This is a {sizeOption.size} sized modal.</p>
//                             <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                               <p className="text-sm text-muted-foreground">
//                                 Perfect for{" "}
//                                 {sizeOption.description.toLowerCase()}
//                               </p>
//                             </div>
//                           </div>
//                         ),
//                       })
//                     }
//                   >
//                     Try {sizeOption.size}
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-16 text-center py-8 border-t">
//           <p className="text-muted-foreground mb-4">
//             This showcase demonstrates the flexibility and power of our global
//             UI system.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <Button
//               variant="outline"
//               onClick={() => {
//                 toast.dismiss();
//                 modal.closeAll();
//                 toast.success("All modals and toasts cleared!");
//               }}
//             >
//               Clear All
//             </Button>
//             <Button
//               onClick={() =>
//                 toast.info("Thanks for exploring our modal system!")
//               }
//             >
//               <Zap className="w-4 h-4 mr-2" />
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Modal Content Components
// function ContactFormContent() {
//   const toast = useToast();
//   const modal = useGlobalModal();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleSubmit = () => {
//     toast.success("Message sent successfully!");
//     modal.closeAll();
//   };

//   return (
//     <div className="space-y-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label htmlFor="name">Name</Label>
//           <Input
//             id="name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData((prev) => ({ ...prev, name: e.target.value }))
//             }
//             placeholder="Your name"
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             type="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData((prev) => ({ ...prev, email: e.target.value }))
//             }
//             placeholder="your@email.com"
//           />
//         </div>
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="subject">Subject</Label>
//         <Input
//           id="subject"
//           value={formData.subject}
//           onChange={(e) =>
//             setFormData((prev) => ({ ...prev, subject: e.target.value }))
//           }
//           placeholder="What's this about?"
//         />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="message">Message</Label>
//         <Textarea
//           id="message"
//           value={formData.message}
//           onChange={(e) =>
//             setFormData((prev) => ({ ...prev, message: e.target.value }))
//           }
//           placeholder="Your message..."
//           rows={4}
//         />
//       </div>
//       <div className="flex justify-end space-x-2 pt-4">
//         <Button variant="outline" onClick={() => modal.closeAll()}>
//           Cancel
//         </Button>
//         <Button onClick={handleSubmit}>
//           <FileText className="w-4 h-4 mr-2" />
//           Send Message
//         </Button>
//       </div>
//     </div>
//   );
// }

// function QuickNoteContent() {
//   const toast = useToast();
//   const modal = useGlobalModal();
//   const [note, setNote] = useState("");

//   return (
//     <div className="space-y-4">
//       <div className="space-y-2">
//         <Label htmlFor="note">Quick Note</Label>
//         <Textarea
//           id="note"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//           placeholder="Write your note here..."
//           rows={4}
//         />
//       </div>
//       <div className="flex justify-end space-x-2">
//         <Button variant="outline" onClick={() => modal.closeAll()}>
//           Cancel
//         </Button>
//         <Button
//           onClick={() => {
//             toast.success("Note saved!");
//             modal.closeAll();
//           }}
//         >
//           Save Note
//         </Button>
//       </div>
//     </div>
//   );
// }

// function SettingsContent({ userProfile, setUserProfile }: any) {
//   const toast = useToast();
//   const modal = useGlobalModal();

//   return (
//     <Tabs defaultValue="profile" className="w-full">
//       <TabsList className="grid w-full grid-cols-3">
//         <TabsTrigger value="profile">Profile</TabsTrigger>
//         <TabsTrigger value="preferences">Preferences</TabsTrigger>
//         <TabsTrigger value="security">Security</TabsTrigger>
//       </TabsList>

//       <TabsContent value="profile" className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               value={userProfile.name}
//               onChange={(e) =>
//                 setUserProfile((prev: any) => ({
//                   ...prev,
//                   name: e.target.value,
//                 }))
//               }
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               value={userProfile.email}
//               onChange={(e) =>
//                 setUserProfile((prev: any) => ({
//                   ...prev,
//                   email: e.target.value,
//                 }))
//               }
//             />
//           </div>
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="role">Role</Label>
//           <Select
//             value={userProfile.role}
//             onValueChange={(value) =>
//               setUserProfile((prev: any) => ({ ...prev, role: value }))
//             }
//           >
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Administrator">Administrator</SelectItem>
//               <SelectItem value="User">User</SelectItem>
//               <SelectItem value="Guest">Guest</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </TabsContent>

//       <TabsContent value="preferences" className="space-y-4">
//         <div className="flex items-center justify-between">
//           <div className="space-y-0.5">
//             <Label>Email Notifications</Label>
//             <p className="text-sm text-muted-foreground">
//               Receive email updates
//             </p>
//           </div>
//           <Switch
//             checked={userProfile.notifications}
//             onCheckedChange={(checked) =>
//               setUserProfile((prev: any) => ({
//                 ...prev,
//                 notifications: checked,
//               }))
//             }
//           />
//         </div>
//         <div className="space-y-2">
//           <Label>Theme</Label>
//           <Select
//             value={userProfile.theme}
//             onValueChange={(value) =>
//               setUserProfile((prev: any) => ({ ...prev, theme: value }))
//             }
//           >
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="light">Light</SelectItem>
//               <SelectItem value="dark">Dark</SelectItem>
//               <SelectItem value="system">System</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </TabsContent>

//       <TabsContent value="security" className="space-y-4">
//         <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
//           <div className="flex items-center space-x-2">
//             <Shield className="w-5 h-5 text-yellow-600" />
//             <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
//               Security Settings
//             </h4>
//           </div>
//           <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
//             Manage your account security preferences
//           </p>
//         </div>
//         <Button variant="outline" className="w-full bg-transparent">
//           Change Password
//         </Button>
//         <Button variant="outline" className="w-full bg-transparent">
//           Enable Two-Factor Authentication
//         </Button>
//       </TabsContent>

//       <div className="flex justify-end space-x-2 pt-4 border-t">
//         <Button variant="outline" onClick={() => modal.closeAll()}>
//           Cancel
//         </Button>
//         <Button
//           onClick={() => {
//             toast.success("Settings saved!");
//             modal.closeAll();
//           }}
//         >
//           <Settings className="w-4 h-4 mr-2" />
//           Save Changes
//         </Button>
//       </div>
//     </Tabs>
//   );
// }

// function ImageGalleryContent() {
//   const images = Array.from({ length: 12 }, (_, i) => ({
//     id: i + 1,
//     title: `Image ${i + 1}`,
//     url: `/placeholder.svg?height=200&width=200&text=Image+${i + 1}`,
//   }));

//   return (
//     <div className="space-y-4">
//       <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
//           >
//             <div className="text-center">
//               <ImageIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
//               <span className="text-xs text-muted-foreground">
//                 {image.title}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center pt-4">
//         <Button variant="outline">
//           <Download className="w-4 h-4 mr-2" />
//           Download All
//         </Button>
//       </div>
//     </div>
//   );
// }

// function FileUploadContent() {
//   const toast = useToast();

//   return (
//     <div className="space-y-4">
//       <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center">
//         <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
//         <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
//         <p className="text-muted-foreground mb-4">
//           Drag and drop files here or click to browse
//         </p>
//         <Button>Choose Files</Button>
//       </div>
//       <div className="space-y-2">
//         <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
//           <div className="flex items-center space-x-3">
//             <FileText className="w-5 h-5 text-blue-500" />
//             <div>
//               <p className="font-medium">document.pdf</p>
//               <p className="text-sm text-muted-foreground">2.4 MB</p>
//             </div>
//           </div>
//           <Badge variant="secondary">Uploaded</Badge>
//         </div>
//       </div>
//     </div>
//   );
// }

// function VideoPlayerContent() {
//   return (
//     <div className="space-y-4">
//       <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
//         <div className="text-center text-white">
//           <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
//           </div>
//           <h3 className="text-lg font-semibold">Sample Video</h3>
//           <p className="text-slate-300">Click to play</p>
//         </div>
//       </div>
//       <div className="flex justify-between items-center">
//         <div>
//           <h4 className="font-semibold">Introduction to Modal System</h4>
//           <p className="text-sm text-muted-foreground">Duration: 5:32</p>
//         </div>
//         <Button size="sm">
//           <Download className="w-4 h-4 mr-2" />
//           Download
//         </Button>
//       </div>
//     </div>
//   );
// }

// function UserDetailsContent() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center space-x-4">
//         <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
//           JD
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold">John Doe</h3>
//           <p className="text-muted-foreground">john.doe@example.com</p>
//           <Badge variant="secondary" className="mt-1">
//             Administrator
//           </Badge>
//         </div>
//       </div>

//       <Separator />

//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <h4 className="font-semibold mb-3">Personal Information</h4>
//           <div className="space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span className="text-muted-foreground">Department:</span>
//               <span>Engineering</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-muted-foreground">Location:</span>
//               <span>San Francisco, CA</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-muted-foreground">Joined:</span>
//               <span>January 2023</span>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-3">Activity</h4>
//           <div className="space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span className="text-muted-foreground">Last Login:</span>
//               <span>2 hours ago</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-muted-foreground">Projects:</span>
//               <span>12 active</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-muted-foreground">Status:</span>
//               <Badge
//                 variant="outline"
//                 className="text-green-600 border-green-600"
//               >
//                 Online
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DataExportContent() {
//   const toast = useToast();
//   const modal = useGlobalModal();

//   return (
//     <div className="space-y-4">
//       <div className="space-y-3">
//         <div>
//           <Label>Export Format</Label>
//           <Select defaultValue="csv">
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="csv">CSV</SelectItem>
//               <SelectItem value="json">JSON</SelectItem>
//               <SelectItem value="xlsx">Excel</SelectItem>
//               <SelectItem value="pdf">PDF</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div>
//           <Label>Date Range</Label>
//           <div className="grid grid-cols-2 gap-2">
//             <Input type="date" />
//             <Input type="date" />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label>Include Fields</Label>
//           <div className="space-y-2">
//             {["Name", "Email", "Date Created", "Last Activity", "Status"].map(
//               (field) => (
//                 <div key={field} className="flex items-center space-x-2">
//                   <input type="checkbox" defaultChecked className="rounded" />
//                   <label className="text-sm">{field}</label>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end space-x-2 pt-4 border-t">
//         <Button variant="outline" onClick={() => modal.closeAll()}>
//           Cancel
//         </Button>
//         <Button
//           onClick={() => {
//             toast.success(
//               "Export started! You'll receive an email when ready."
//             );
//             modal.closeAll();
//           }}
//         >
//           <Download className="w-4 h-4 mr-2" />
//           Export Data
//         </Button>
//       </div>
//     </div>
//   );
// }

// function AnalyticsContent() {
//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-3 gap-4">
//         <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
//           <div className="text-2xl font-bold text-blue-600">1,234</div>
//           <div className="text-sm text-muted-foreground">Total Users</div>
//         </div>
//         <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
//           <div className="text-2xl font-bold text-green-600">89%</div>
//           <div className="text-sm text-muted-foreground">Success Rate</div>
//         </div>
//         <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
//           <div className="text-2xl font-bold text-purple-600">$12.5K</div>
//           <div className="text-sm text-muted-foreground">Revenue</div>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h4 className="font-semibold">Recent Activity</h4>
//         <div className="space-y-3">
//           {[
//             {
//               action: "New user registered",
//               time: "2 minutes ago",
//               type: "success",
//             },
//             {
//               action: "Payment processed",
//               time: "5 minutes ago",
//               type: "success",
//             },
//             {
//               action: "Error in checkout",
//               time: "12 minutes ago",
//               type: "error",
//             },
//             { action: "Feature updated", time: "1 hour ago", type: "info" },
//           ].map((activity, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
//             >
//               <div className="flex items-center space-x-3">
//                 <div
//                   className={`w-2 h-2 rounded-full ${
//                     activity.type === "success"
//                       ? "bg-green-500"
//                       : activity.type === "error"
//                       ? "bg-red-500"
//                       : "bg-blue-500"
//                   }`}
//                 />
//                 <span className="text-sm">{activity.action}</span>
//               </div>
//               <span className="text-xs text-muted-foreground">
//                 {activity.time}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProgressContent({ progress, setProgress, modalId }: any) {
//   const toast = useToast();
//   const modal = useGlobalModal();

//   useState(() => {
//     const interval = setInterval(() => {
//       setProgress((prev: number) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             modal.closeAll();
//             toast.success("Process completed successfully!");
//           }, 500);
//           return 100;
//         }
//         return prev + 10;
//       });
//     }, 300);

//     return () => clearInterval(interval);
//   });

//   return (
//     <div className="space-y-4">
//       <div className="text-center">
//         <h3 className="font-semibold mb-2">Processing Request</h3>
//         <p className="text-muted-foreground text-sm">
//           Please wait while we process your request...
//         </p>
//       </div>

//       <div className="space-y-2">
//         <div className="flex justify-between text-sm">
//           <span>Progress</span>
//           <span>{progress}%</span>
//         </div>
//         <Progress value={progress} className="w-full" />
//       </div>

//       <div className="text-center">
//         <p className="text-sm text-muted-foreground">
//           {progress < 30
//             ? "Initializing..."
//             : progress < 60
//             ? "Processing data..."
//             : progress < 90
//             ? "Finalizing..."
//             : "Complete!"}
//         </p>
//       </div>
//     </div>
//   );
// }

// function PaymentFormContent() {
//   const toast = useToast();
//   const modal = useGlobalModal();

//   return (
//     <div className="space-y-4">
//       <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//         <div className="flex justify-between items-center">
//           <span>Total Amount</span>
//           <span className="text-xl font-bold">$99.00</span>
//         </div>
//       </div>

//       <div className="space-y-3">
//         <div className="space-y-2">
//           <Label>Card Number</Label>
//           <Input placeholder="1234 5678 9012 3456" />
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           <div className="space-y-2">
//             <Label>Expiry Date</Label>
//             <Input placeholder="MM/YY" />
//           </div>
//           <div className="space-y-2">
//             <Label>CVV</Label>
//             <Input placeholder="123" />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label>Cardholder Name</Label>
//           <Input placeholder="John Doe" />
//         </div>
//       </div>

//       <div className="flex justify-end space-x-2 pt-4 border-t">
//         <Button variant="outline" onClick={() => modal.closeAll()}>
//           Cancel
//         </Button>
//         <Button
//           onClick={() => {
//             toast.success("Payment processed successfully!");
//             modal.closeAll();
//           }}
//         >
//           <CreditCard className="w-4 h-4 mr-2" />
//           Pay $99.00
//         </Button>
//       </div>
//     </div>
//   );
// }

// function CalendarPickerContent() {
//   const toast = useToast();
//   const modal = useGlobalModal();

//   return (
//     <div className="space-y-4">
//       <div className="grid grid-cols-7 gap-1 text-center text-sm">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <div key={day} className="p-2 font-semibold text-muted-foreground">
//             {day}
//           </div>
//         ))}
//         {Array.from({ length: 35 }, (_, i) => {
//           const day = i - 6;
//           const isCurrentMonth = day > 0 && day <= 31;
//           const isToday = day === 15;

//           return (
//             <button
//               key={i}
//               className={`p-2 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
//                 !isCurrentMonth
//                   ? "text-muted-foreground"
//                   : isToday
//                   ? "bg-blue-500 text-white"
//                   : ""
//               }`}
//               onClick={() => {
//                 if (isCurrentMonth) {
//                   toast.success(`Selected date: ${day}/12/2024`);
//                   modal.closeAll();
//                 }
//               }}
//             >
//               {isCurrentMonth ? day : ""}
//             </button>
//           );
//         })}
//       </div>

//       <div className="flex justify-end space-x-2 pt-4 border-t">
//         <Button variant="outline" onClick={() => modal.closeAll()}>
//           Cancel
//         </Button>
//         <Button
//           onClick={() => {
//             toast.success("Date selected!");
//             modal.closeAll();
//           }}
//         >
//           <Calendar className="w-4 h-4 mr-2" />
//           Select Date
//         </Button>
//       </div>
//     </div>
//   );
// }
