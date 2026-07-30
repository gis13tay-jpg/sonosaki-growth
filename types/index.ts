export type { NavItem } from '@/constants/navigation'

export type PageProps<
  TParams = Record<string, string>,
  TSearchParams = Record<string, string | string[] | undefined>,
> = {
  params: Promise<TParams>
  searchParams: Promise<TSearchParams>
}
