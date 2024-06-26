<h1 align="center">SQL Expert ChatBot CLI</h1>

<p align="center">SQL Expert ChatBot CLI built with OpenAI, Vercel AI SDK, and Node.js</p>


https://github.com/Sachin-chaurasiya/ai-sql-expert-nodejs-cli/assets/59080942/1de7b734-bc20-44a0-915f-682b9434a058


## Local Setup

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17.1 or higher)
- [pnpm](https://pnpm.io/) (v8.14.3 or higher)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/Sachin-chaurasiya/ai-sql-expert-nodejs-cli.git
cd ai-sql-expert-nodejs-cli
```

### Install Dependencies

```bash
pnpm install
```

### Configuration

Add your OpenAI API Key to `.env`

Create a .env file in your project root and add your OpenAI API Key:

```
OPENAI_API_KEY=xxxxxxxxx
```

### Run the CLI

```bash
pnpm start
```

## Sample prompts

```
1. "Create a SQL query to find the total number of orders placed by each customer in the past year, ordered by the highest number of orders."

2. "Write a SQL query to identify customers who have spent more than $1000 in total on purchases within the last 3 months."

3. "Design a SQL query to calculate the average time it takes for an order to be fulfilled from the moment it's placed, considering the timestamps of order placement and fulfillment."

4. "Develop a SQL query to list the products with the highest profit margin, considering both the cost price and the selling price."

5. "Construct a SQL query to find the monthly revenue trend for the past year, broken down by month."

6. "Create a SQL query to identify customers who have not made a purchase in the last 6 months."

7. "Write a SQL query to find the top 5 categories with the highest number of products sold in the last quarter."

8. "Design a SQL query to identify orders with items that are out of stock at the time of purchase."

9. "Develop a SQL query to calculate the total revenue generated from repeat customers versus new customers in the last month."

10. "Construct a SQL query to identify any anomalies or irregularities in order quantities compared to historical averages for each product."
```
