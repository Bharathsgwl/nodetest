const envVariables = {
  // DB configurations
  DB_USER: process.env.DB_USER || "ohdyebdftmperm",
  DB_PASSWORD:process.env.DB_PASSWORD || "6c210945e4ce383e68ccc065b6fdb9327e4e08b63f461ef0542ee51d797b5b54",
  DB_HOST: process.env.DB_HOST || "ec2-174-129-253-162.compute-1.amazonaws.com",
  DB_NAME: process.env.DB_NAME || "dagh72hfm2ullt",
  DB_SSL: process.env.DB_SSL || true,
  DB_PORT: process.env.DB_PORT || 5432,
  DB_MAX_POOL_SIZE: process.env.DB_MAX_POOL_SIZE || "5",
  //server configurations
  SERVER_PORT: process.env.SERVER_PORT || "8080",
  PORT: 8080,
	BODY_LIMIT: "100kb",
	CROS_HEADERS: ["Link"]
};
export default envVariables;
