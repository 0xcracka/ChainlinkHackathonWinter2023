export default function handler(req, res) {
  // Check for the correct HTTP method if necessary
  if (req.method === "GET") {
    // Return the expected JSON structure
    res.status(200).json({ isValidated: true });
  } else {
    // Handle other HTTP methods or send an error
    res.status(405).send("Method Not Allowed");
  }
}
