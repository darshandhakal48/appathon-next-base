import React, { Suspense } from "react";
import CandidateOnlineInterview from "@/components/dashboard/candidateOnlineInterview";
import { ErrorBoundary } from "@/components/shared/error-boundary";
import ClientErrorFallback from "@/components/shared/error-fallback";

function OnlineInterview() {
  return (
    <ErrorBoundary FallbackComponent={ClientErrorFallback}>
      <Suspense
        fallback={
          <>
            <p></p>
          </>
        }
      >
        <Suspensed />
      </Suspense>
    </ErrorBoundary>
  );
}

async function Suspensed() {
  //   throw new Error("LOL");
  return <CandidateOnlineInterview />;
}

export default OnlineInterview;
