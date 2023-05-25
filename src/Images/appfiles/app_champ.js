import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import connectDB from "./dbConfig/connectDB.js";
import router from "./routes/routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

// db connection
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', "Content-Type,multipart/form-data");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
//cors policy
app.use(cors());

app.use("/api/user", router);

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      description: "championLister",
      version: "1.0.0",
      title: "championLister",
      termsOfService: "http://swagger.io/terms/",
      email: "rakesh.keer@saviesainfotech.com",
      servers: [
        "https://chempionlisterserver.herokuapp.com/",
        "http://localhost:5000/",
      ],
    },
    components: {
      securitySchemes: {
        Bearer: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["swaggar.js"],
  basePath: "/api/user",
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Handle CORS preflight requests
app.options("/api/user/userLogin", cors());

app.listen(port, () => console.log(`Server running on port ${port}...`));
