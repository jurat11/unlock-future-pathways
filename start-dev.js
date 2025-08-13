const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting UNLOCK Future Pathways Development Environment...\n');

// Start the backend server
console.log('📡 Starting SQLite backend server...');
const backend = spawn('node', ['server.js'], {
  stdio: 'inherit',
  cwd: __dirname
});

// Wait a moment for backend to start, then start frontend
setTimeout(() => {
  console.log('\n🌐 Starting React frontend...');
  const frontend = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    cwd: __dirname
  });

  // Handle process termination
  const cleanup = () => {
    console.log('\n🛑 Shutting down development servers...');
    backend.kill();
    frontend.kill();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  // Handle backend exit
  backend.on('close', (code) => {
    console.log(`\n❌ Backend server exited with code ${code}`);
    frontend.kill();
    process.exit(code);
  });

  // Handle frontend exit
  frontend.on('close', (code) => {
    console.log(`\n❌ Frontend server exited with code ${code}`);
    backend.kill();
    process.exit(code);
  });

}, 2000);

console.log('\n📋 Development URLs:');
console.log('   Frontend: http://localhost:8080');
console.log('   Backend API: http://localhost:3001');
console.log('   Admin Panel: http://localhost:8080/unlockadmform');
console.log('   Apply Form: http://localhost:8080/apply');
console.log('\n🔑 Default Admin Credentials: admin / admin123');
console.log('\n💡 Press Ctrl+C to stop both servers\n'); 