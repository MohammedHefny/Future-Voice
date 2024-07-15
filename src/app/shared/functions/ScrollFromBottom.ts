export const ScrollFromBottom = (dist: number) => {
  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const position = scrollHeight - windowHeight - dist;
  window.scrollTo({ top: position, behavior: "smooth" });
};
