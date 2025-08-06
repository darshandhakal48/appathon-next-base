import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  {
    name: "Iron Man",
    city: "Tanahun",
    stage: "Interview",
    modifiedTime: "May 27 11:00am",
    id: 1
  },
  {
    name: "Spider Man",
    city: "Tanahun",
    stage: "Interview",
    modifiedTime: "May 27 11:00am",
    id: 2
  },
  {
    name: "Groot",
    city: "Tanahun",
    stage: "Interview",
    modifiedTime: "May 27 11:00am",
    id: 3
  }, {
    name: "Rocket",
    city: "Tanahun",
    stage: "Interview",
    modifiedTime: "May 27 11:00am",
    id: 4
  }
]

export default function RecruiterCandidateTable() {
  return (
    <div className="m-6 rounded-md border border-grayscale-border-default">
      <Table className="overflow-hidden rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>Candidate Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Modified Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="flex items-center font-medium">
                <Avatar className="bg-grayscale-slate-400">
                  <AvatarFallback>DD</AvatarFallback>
                </Avatar>
                {invoice.name}</TableCell>
              <TableCell>{invoice.city}</TableCell>
              <TableCell>{invoice.stage}</TableCell>
              <TableCell> {invoice.modifiedTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
