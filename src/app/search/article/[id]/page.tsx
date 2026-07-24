import { redirect } from 'next/navigation';

export default function OldArticleRedirect({ params }: { params: { id: string } }) {
  redirect(`/article/${params.id}`);
}
