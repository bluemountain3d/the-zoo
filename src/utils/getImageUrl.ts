export const getImageUrl = (apiUrl: string) => {
  // If the API url starts with http (is an external link), it doesn't touch
  if (apiUrl.startsWith('http')) return apiUrl;

  // Otherwise, add the base url (your repo name)
  // We remove the first character if it is a slash to avoid double //
  const cleanPath = apiUrl.startsWith('/') ? apiUrl.slice(1) : apiUrl;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}