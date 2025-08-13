const fetch = require('node-fetch');

const API_BASE_URL = 'http://localhost:3001/api';

async function testBackend() {
  console.log('🧪 Testing UNLOCK Future Pathways Backend...\n');

  try {
    // Test 1: Check if server is running
    console.log('1️⃣ Testing server connectivity...');
    const response = await fetch(`${API_BASE_URL}/applications`);
    if (response.ok) {
      console.log('✅ Server is running and responding');
    } else {
      console.log('❌ Server responded with error:', response.status);
    }

    // Test 2: Test admin login
    console.log('\n2️⃣ Testing admin login...');
    const loginResponse = await fetch(`${API_BASE_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'admin', password: 'admin123' }),
    });

    if (loginResponse.ok) {
      console.log('✅ Admin login works');
    } else {
      console.log('❌ Admin login failed');
    }

    // Test 3: Submit a test application
    console.log('\n3️⃣ Testing application submission...');
    const testApplication = {
      fullName: "Test Student",
      cityCountry: "Tashkent, Uzbekistan",
      dateOfBirth: "2005-01-01",
      preferredContact: "Telegram @teststudent",
      email: "test@example.com",
      legalGuardian: "Test Parent, Father, +998901234567, Telegram",
      schoolName: "Test School",
      schoolLocation: "Tashkent, Uzbekistan",
      schoolCurriculum: "State Curriculum",
      graduationDate: "2024-06-01",
      schoolGPA: "4.5/5.0",
      plannedField: "Computer Science",
      standardizedTests: [
        { testName: "SAT", score: "1400" }
      ],
      whyCompetitiveUniversity: "I want to study at a competitive American university because...",
      favoriteBook: "My favorite book is...",
      extracurricularActivities: "I participate in...",
      honorsAchievements: "My honors include...",
      parentContribution: "$15K per year",
      unlockUzScholarship: "yes",
      agreeToContact: true
    };

    const submitResponse = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testApplication),
    });

    if (submitResponse.ok) {
      const result = await submitResponse.json();
      console.log('✅ Test application submitted successfully, ID:', result.id);
    } else {
      console.log('❌ Test application submission failed');
    }

    // Test 4: Get applications
    console.log('\n4️⃣ Testing application retrieval...');
    const getResponse = await fetch(`${API_BASE_URL}/applications`);
    if (getResponse.ok) {
      const applications = await getResponse.json();
      console.log(`✅ Retrieved ${applications.length} applications`);
    } else {
      console.log('❌ Failed to retrieve applications');
    }

    console.log('\n🎉 All backend tests completed!');
    console.log('\n📋 Next steps:');
    console.log('   1. Start frontend: npm run dev');
    console.log('   2. Visit: http://localhost:8080');
    console.log('   3. Test the application form');
    console.log('   4. Check admin panel: http://localhost:8080/unlockadmform');

  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    console.log('\n💡 Make sure the backend server is running:');
    console.log('   node server.js');
  }
}

testBackend(); 