import mysql from 'mysql2/promise';
import AWS from 'aws-sdk';

export async function handler(event, context) {
    try {
        // Initialize AWS SDK
        const rdsData = new AWS.RDSDataService();
        
        // Configure MySQL connection
        // leverage env variables within your lambda!
        const connection = await mysql.createConnection({
            host: process.env.RDS_ENDPOINT, 
            user: process.env.DB_USERNAME,  
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        // Execute SQL query to retrieve data
        const sqlQuery = 'SELECT * FROM items';
        const [rows, fields] = await connection.execute(sqlQuery);

        // Close MySQL connection
        await connection.end();

        return {
            statusCode: 200,
            body: JSON.stringify(rows)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error retrieving data from RDS', error })
        };
    }
}
