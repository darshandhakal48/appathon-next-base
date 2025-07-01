import React from 'react'
import { Button } from "@/components/ui/button";

function CandidateOnlineInterview() {
  return (
   <div className="bg-background border-1 p-4 bg flex justify-between items-center">
            <span className="text-xl font-semibold">Interviews</span>
            <div className="space-x-1 gap-2.5">
                <Button variant="outline">Drafts</Button>
                <Button variant="default">Schedule New Interview</Button>
            </div>
        </div>
  )
}

export default CandidateOnlineInterview