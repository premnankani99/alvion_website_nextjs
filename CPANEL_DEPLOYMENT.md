# Deploying Alvion Next.js on cPanel

---

## Table of Contents
1. [Dynamic Node.js Application](#dynamic-nodejs-application)
2. [Troubleshooting Common cPanel Issues](#troubleshooting-common-cpanel-issues)

---

## Dynamic Node.js Application

This method uses cPanel’s **"Setup Node.js App"** feature (powered by Phusion Passenger) to run Next.js as a continuous server. This allows `/api/chat` and other server-side features to work.

### Step 1: Add the custom `server.js`
cPanel's Node.js manager requires a single startup file (like `server.js`) rather than running `npm run start` directly. We have created a `server.js` file in your root folder with the following content:
```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
```

### Step 2: Build the project locally
Building a Next.js project on shared hosting can fail because shared hosting environments usually have strict memory (RAM) limits. It is highly recommended to build locally and upload the built assets:
1. Run the build command in your local project terminal:
   ```bash
   npm run build
   ```
2. This generates the production bundles in the `.next` directory.

### Step 3: Package the files
Create a ZIP archive containing the following files and folders:
* `.next` (Make sure your archiver includes hidden folders/files starting with a dot `.`)
* `public`
* `src` (specifically `src/data` or references needed by server routes)
* `package.json`
* `package-lock.json`
* `next.config.ts`
* `server.js`

> [!WARNING]
> Do **NOT** include `node_modules` in the ZIP file. Standard Node modules built for your local OS (e.g., Windows) will not work on the server's OS (typically Linux). We will install dependencies directly on the server.

### Step 4: Upload to cPanel File Manager
1. Log into your cPanel dashboard.
2. Open the **File Manager**.
3. Navigate to your subdomain's folder. Depending on your cPanel configuration, this is usually:
   * `/home/yourusername/alvion.landmaarkdeveloper.com` OR
   * `/home/yourusername/public_html/alvion.landmaarkdeveloper.com`
4. Upload your ZIP file into this directory and **Extract** it here. (Once extracted, you should see the `server.js` and `.next` folder directly inside the subdomain directory).

### Step 5: Configure the Node.js App in cPanel
1. In cPanel, search for and open **Setup Node.js App**.
2. Click **Create Application**.
3. Configure the following fields:
   * **Node.js version**: Select **20.x** or **22.x** (Next.js 16 requires Node.js >= 18.18.0).
   * **Application mode**: **Production**
   * **Application root**: Enter the relative path to your subdomain folder, e.g., `alvion.landmaarkdeveloper.com` (or `public_html/alvion.landmaarkdeveloper.com` if your subdomain folder is inside `public_html`).
   * **Application URL**: Select `alvion.landmaarkdeveloper.com` from the dropdown list.
   * **Application startup file**: `server.js`
4. Click **Create** at the top right. This will create the Node.js application and automatically link it to your subdomain.

### Step 6: Install Node Dependencies
1. Scroll down to the **Configuration** section of your newly created Node app.
2. Click the **Run NPM Install** button. This will download and install all required libraries from `package.json` inside your subdomain environment.
   * *If the button spins forever or fails, see the SSH option in the troubleshooting section below.*

### Step 7: Add Environment Variables
Since your chatbot relies on the Groq API key, you must configure this in the environment variables:
1. Under **Environment variables** at the bottom of the Node.js setup page, click **Add Variable**.
2. **Name**: `GROQ_API_KEY`
3. **Value**: `your_actual_groq_api_key_here`
4. Click **Save**.

### Step 8: Restart the Application
Click the **Restart** button at the top of the Setup Node.js App page to apply your environment variables. Open `http://alvion.landmaarkdeveloper.com` in a browser to confirm everything works!

---

## Troubleshooting Common cPanel Issues

### Issue 1: `NPM Install` fails or times out in cPanel
Shared servers often limit resources for web-based scripts, causing the cPanel "Run NPM Install" button to crash.
* **Solution**:
  1. Log into your cPanel server via **SSH** (you can find SSH details in cPanel under **SSH Access**).
  2. At the top of your cPanel Setup Node.js App page, copy the virtual environment command. It looks like:
     ```bash
     source /home/username/nodevenv/alvion-app/20/bin/activate && cd /home/username/alvion-app
     ```
  3. Paste and run that command in your SSH terminal.
  4. Run the install command manually with production optimization:
     ```bash
     npm install --production
     ```

### Issue 2: `503 Service Unavailable` or `502 Bad Gateway`
This means Phusion Passenger is having trouble communicating with your `server.js`.
* **Solution**:
  * Make sure your Node.js version in the Setup Node.js App matches the one you used locally to build the app (usually Node 18 or 20).
  * Check the logs. cPanel usually generates a file called `stderr.log` inside your application root folder (`alvion-app`). Review this file using the File Manager to see the specific error.
  * Ensure the server has enough RAM. If the server is hitting its memory limits, the Node.js process will be terminated automatically.
