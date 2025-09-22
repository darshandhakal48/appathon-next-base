import React from "react";

import { FunnelStages } from "@/config/db";
import FunnelPipeline from "@/components/dashboard/FunnelPipeline";

function ApplicantsTracking() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <FunnelPipeline stages={FunnelStages} height={420} />
    </main>
  );
}

export default ApplicantsTracking;
