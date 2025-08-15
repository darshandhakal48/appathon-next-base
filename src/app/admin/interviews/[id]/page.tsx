import React, { Suspense } from "react";
import CandidateOnlineInterview from "@/components/dashboard/candidateOnlineInterview";
import ClientErrorFallback from "@/components/shared/error-fallback";

function OnlineInterview() {
  return (
    <Suspense
      fallback={
        <>
          <p></p>
        </>
      }
    >
      <Suspensed />
    </Suspense>
  );
}

async function Suspensed() {
  //   throw new Error("LOL");
  return <CandidateOnlineInterview />;
}

export default OnlineInterview;
