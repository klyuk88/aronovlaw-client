export function useReplaceUploads(str) {
  const runtimeConfig = useRuntimeConfig()
  return str.replace(/\uploads/, `${runtimeConfig.public.api}/uploads`)
}