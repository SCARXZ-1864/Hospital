import logoUrl from "@/assets/images/logo.jpg";

const doctorModules = import.meta.glob("@/assets/images/doctors/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const founderModules = import.meta.glob("@/assets/images/founders/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const hospitalModules = import.meta.glob("@/assets/images/hospital/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function lookup(modules: Record<string, string>, dir: string, filename: string): string {
  const key = Object.keys(modules).find((path) => path.endsWith(`/${dir}/${filename}`));
  if (!key) {
    throw new Error(`Image not found: ${dir}/${filename}`);
  }
  return modules[key];
}

export const logo = logoUrl;

export function doctorImage(filename: string): string {
  return lookup(doctorModules, "doctors", filename);
}

export function founderImage(filename: string): string {
  return lookup(founderModules, "founders", filename);
}

export function hospitalImage(filename: string): string {
  return lookup(hospitalModules, "hospital", filename);
}
