import ProfileContactCard from "@/app/_components/cards/ProfileContactCard";

export default async function ProfileContact({
  params,
}: {
  params: { id: string };
}) {
  return <ProfileContactCard id={params.id} />;
}
