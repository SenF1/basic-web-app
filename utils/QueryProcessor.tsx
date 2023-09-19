export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("id")) {
    return (
      "I dont know what is your andrew id."
    );
  }
  else if (query.toLowerCase().includes("name")) {
    return (
      "I dont know your name."
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const maxMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (maxMatch) {
    const x: number = parseInt(maxMatch[1]);
    const y: number = parseInt(maxMatch[2]);
    const z: number = parseInt(maxMatch[3]);
    return Math.max(x,y,z).toString();
  }

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }

  const squareCubeMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (squareCubeMatch) {
    const a: number = parseInt(squareCubeMatch[1]);
    const b: number = parseInt(squareCubeMatch[2]);
    const c: number = parseInt(squareCubeMatch[3]);
    const d: number = parseInt(squareCubeMatch[4]);
    const e: number = parseInt(squareCubeMatch[5]);
    const f: number = parseInt(squareCubeMatch[6]);
    const g: number = parseInt(squareCubeMatch[6]);
    if (Math.sqrt(a) % 1 == 0 && Math.cbrt(a) % 1 == 0){return a.toString();} 
    else if (Math.sqrt(b) % 1 == 0 && Math.cbrt(b) % 1 == 0){return b.toString();} 
    else if (Math.sqrt(c) % 1 == 0 && Math.cbrt(c) % 1 == 0){return c.toString();} 
    else if (Math.sqrt(d) % 1 == 0 && Math.cbrt(d) % 1 == 0){return d.toString();} 
    else if (Math.sqrt(e) % 1 == 0 && Math.cbrt(e) % 1 == 0){return e.toString();} 
    else if (Math.sqrt(f) % 1 == 0 && Math.cbrt(f) % 1 == 0){return f.toString();} 
    else return g.toString(); 
  }

  return "";
}
