import DashboardPageHeader from "@/components/dashboard/page-header";
import InterviewInfo from "../../../../components/dashboard/interview-info";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CandidateDashboardInterviewInfoPage(
  props: PageProps
) {
  const interviewId = (await props.params).id;

  return (
    <>
      <DashboardPageHeader title="Interview" />
      <InterviewInfo />
    </>
  );
}
