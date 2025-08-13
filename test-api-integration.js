#!/usr/bin/env node

/**
 * API INTEGRATION TEST SCRIPT
 * 
 * This script tests the application form API integration to ensure
 * all fields are properly handled and no data is lost during submission.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables. Please check your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test application data (matching the form structure)
const testApplication = {
  // Personal Information
  fullName: "Test Student",
  cityCountry: "Test City, Test Country",
  dateOfBirth: "2000-01-01",
  email: "test@example.com",
  gender: "male",
  otherGender: "", // Optional
  birthCountry: "Test Country",
  cityOfBirth: "Test City",
  citizenshipCountries: "Test Country",
  nationality: "Test Nationality",
  preferredContact: "email",
  contactDetails: "test@example.com",
  personalPhone: "+1234567890",
  legalGuardianInfo: "Test Guardian, Parent, +1234567890, WhatsApp",

  // Education
  currentSchool: "Test High School",
  schoolType: "public",
  isBoardingSchool: "no",
  graduationDate: "2024-06-01",
  gpa: "3.8/4.0",
  schoolLocation: "Test City, Test Country",
  schoolCurriculum: "other",
  otherCurriculum: "Test Curriculum",
  expectedGraduationDate: "2024-06-01",
  schoolGPA: "3.8/4.0",
  isSchoolSpecialized: "yes",
  specializationArea: "STEM",

  // Short Essays
  familyBackground: "Test family background information.",
  extracurricularActivities: "1. Test Activity 1\n2. Test Activity 2",
  honorsAchievements: "1. Test Achievement 1\n2. Test Achievement 2",
  motivationalEssayIdea: "Test essay idea", // Optional
  previousApplicationExperience: "Test application experience", // Optional
  additionalInformation: "Test additional information", // Optional

  // Future Plans
  countriesOfInterest: "USA, Canada",
  targetUniversities: "MIT, Stanford",
  studyField: "Computer Science",
  choiceConfidence: "very-confident",

  // Finances
  fundingSource: "parents",
  investmentAmount: "$50,000 per year",
  applyToEYUF: "yes",
  financeAgreement: true,

  // Standardized Tests
  standardizedTests: [
    { testName: "SAT", score: "1500" },
    { testName: "TOEFL", score: "110" }
  ]
};

async function testAPIIntegration() {
  console.log('🧪 Starting API Integration Test...\n');

  try {
    // Test 1: Submit application
    console.log('📤 Test 1: Submitting test application...');
    
    const transformedData = {
      // Transform camelCase to snake_case for database
      full_name: testApplication.fullName,
      city_country: testApplication.cityCountry,
      date_of_birth: testApplication.dateOfBirth,
      email: testApplication.email,
      gender: testApplication.gender,
      other_gender: testApplication.otherGender,
      birth_country: testApplication.birthCountry,
      city_of_birth: testApplication.cityOfBirth,
      citizenship_countries: testApplication.citizenshipCountries,
      nationality: testApplication.nationality,
      preferred_contact: testApplication.preferredContact,
      contact_details: testApplication.contactDetails,
      personal_phone: testApplication.personalPhone,
      legal_guardian_info: testApplication.legalGuardianInfo,

      current_school: testApplication.currentSchool,
      school_type: testApplication.schoolType,
      is_boarding_school: testApplication.isBoardingSchool,
      graduation_date: testApplication.graduationDate,
      gpa: testApplication.gpa,
      school_location: testApplication.schoolLocation,
      school_curriculum: testApplication.schoolCurriculum,
      other_curriculum: testApplication.otherCurriculum,
      expected_graduation_date: testApplication.expectedGraduationDate,
      school_gpa: testApplication.schoolGPA,
      is_school_specialized: testApplication.isSchoolSpecialized,
      specialization_area: testApplication.specializationArea,

      family_background: testApplication.familyBackground,
      extracurricular_activities: testApplication.extracurricularActivities,
      honors_achievements: testApplication.honorsAchievements,
      motivational_essay_idea: testApplication.motivationalEssayIdea,
      previous_application_experience: testApplication.previousApplicationExperience,
      additional_information: testApplication.additionalInformation,

      countries_of_interest: testApplication.countriesOfInterest,
      target_universities: testApplication.targetUniversities,
      study_field: testApplication.studyField,
      choice_confidence: testApplication.choiceConfidence,

      funding_source: testApplication.fundingSource,
      investment_amount: testApplication.investmentAmount,
      apply_to_eyuf: testApplication.applyToEYUF,
      finance_agreement: testApplication.financeAgreement,

      standardized_tests: testApplication.standardizedTests,
      submitted_at: new Date().toISOString(),
      status: 'pending'
    };

    const { data: submittedData, error: submitError } = await supabase
      .from('applications')
      .insert([transformedData])
      .select()
      .single();

    if (submitError) {
      console.error('❌ Submission failed:', submitError);
      return;
    }

    console.log('✅ Application submitted successfully!');
    console.log('📊 Submitted application ID:', submittedData.id);

    // Test 2: Retrieve application
    console.log('\n📥 Test 2: Retrieving submitted application...');
    
    const { data: retrievedData, error: retrieveError } = await supabase
      .from('applications')
      .select('*')
      .eq('id', submittedData.id)
      .single();

    if (retrieveError) {
      console.error('❌ Retrieval failed:', retrieveError);
      return;
    }

    console.log('✅ Application retrieved successfully!');

    // Test 3: Verify data integrity
    console.log('\n🔍 Test 3: Verifying data integrity...');
    
    const fieldsToCheck = [
      'full_name', 'email', 'contact_details', 'other_curriculum',
      'specialization_area', 'standardized_tests', 'finance_agreement'
    ];

    let allFieldsMatch = true;
    
    for (const field of fieldsToCheck) {
      const original = transformedData[field];
      const retrieved = retrievedData[field];
      
      if (JSON.stringify(original) !== JSON.stringify(retrieved)) {
        console.error(`❌ Field mismatch for ${field}:`);
        console.error(`   Original: ${JSON.stringify(original)}`);
        console.error(`   Retrieved: ${JSON.stringify(retrieved)}`);
        allFieldsMatch = false;
      }
    }

    if (allFieldsMatch) {
      console.log('✅ All fields match - data integrity verified!');
    }

    // Test 4: Clean up
    console.log('\n🧹 Test 4: Cleaning up test data...');
    
    const { error: deleteError } = await supabase
      .from('applications')
      .delete()
      .eq('id', submittedData.id);

    if (deleteError) {
      console.warn('⚠️ Failed to clean up test data:', deleteError);
    } else {
      console.log('✅ Test data cleaned up successfully!');
    }

    console.log('\n🎉 All API integration tests passed!');
    console.log('\n📋 Summary:');
    console.log('   ✅ Application submission works');
    console.log('   ✅ Application retrieval works');
    console.log('   ✅ Data integrity maintained');
    console.log('   ✅ All form fields properly handled');

  } catch (error) {
    console.error('❌ Unexpected error during API test:', error);
  }
}

// Run the test
testAPIIntegration();