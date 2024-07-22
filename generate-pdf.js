const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const path = require('path');

async function generatePDF() {
    // Build the Next.js application

    // Start the Next.js server
    console.log('Starting Next.js server...');
    const server = spawn('npm', ['run', 'start'], { stdio: 'inherit' });

    // Wait for the server to start
    await new Promise(resolve => setTimeout(resolve, 5000));

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    const url = 'http://localhost:3000';  // URL of your Next.js page

    await page.goto(url, { waitUntil: 'networkidle2' });

    // Generate PDF and save it to the public directory
    const pdfPath = path.join(__dirname, 'public', 'static', 'resume.pdf');
    await page.pdf({ path: pdfPath, format: 'A4' });

    await browser.close();

    // Stop the Next.js server
    server.kill();
    console.log('PDF generated successfully!');
}

generatePDF().catch(err => console.error('Error generating PDF', err));
