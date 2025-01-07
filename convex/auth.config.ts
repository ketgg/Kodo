export default {
  providers: [
    {
      domain: `${process.env.JWT_ISSUER_URL!}`,
      applicationID: "convex",
    },
  ],
}
