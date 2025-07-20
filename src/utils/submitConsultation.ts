export async function submitConsultation(answers: Record<string, string>) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("Submitted Consultation: ", JSON.stringify(answers, null, 2));
      resolve();
    }, 2000);
  });
}
