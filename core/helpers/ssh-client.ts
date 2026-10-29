// Placeholder for the shared SSH wrapper (runs shell commands on the system under test).
export async function runRemote(host: string, command: string): Promise<string> {
  return `[mock] ${host}: ${command}`;
}
