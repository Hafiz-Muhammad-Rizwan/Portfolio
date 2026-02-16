# Quick Start Script for Premium Portfolio

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Premium Portfolio - Quick Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Navigate to project directory
$projectPath = Join-Path $PSScriptRoot "portfolio-nextjs"
if (Test-Path $projectPath) {
    Set-Location $projectPath
    Write-Host "✓ Found project directory" -ForegroundColor Green
} else {
    Write-Host "✗ Project directory not found!" -ForegroundColor Red
    exit 1
}

# Check if .env.local exists
Write-Host ""
Write-Host "Checking environment configuration..." -ForegroundColor Yellow
if (Test-Path ".env.local") {
    Write-Host "✓ Environment file exists" -ForegroundColor Green
} else {
    Write-Host "⚠ Creating .env.local from template..." -ForegroundColor Yellow
    Copy-Item ".env.local.example" ".env.local"
    Write-Host "✓ .env.local created" -ForegroundColor Green
    Write-Host ""
    Write-Host "⚠ IMPORTANT: Please update .env.local with your Firebase credentials!" -ForegroundColor Red
    Write-Host ""
}

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Update .env.local with your Firebase credentials" -ForegroundColor White
Write-Host "2. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host "3. Visit http://localhost:3000" -ForegroundColor White
Write-Host "4. Login at http://localhost:3000/admin" -ForegroundColor White
Write-Host ""
Write-Host "For detailed setup instructions, see SETUP.md" -ForegroundColor Gray
Write-Host ""

# Ask if user wants to start dev server
$response = Read-Host "Would you like to start the development server now? (y/n)"
if ($response -eq "y" -or $response -eq "Y") {
    Write-Host ""
    Write-Host "Starting development server..." -ForegroundColor Green
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
    Write-Host ""
    npm run dev
}
