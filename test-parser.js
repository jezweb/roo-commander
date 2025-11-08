#!/usr/bin/env node

/**
 * Test Script for Skill Parser
 *
 * Tests the parser with real skills from ~/.claude/skills/
 */

const { findAllSkills, parseSkill, validateSkill } = require('./dist/parser/skill-parser.js');
const { join } = require('path');
const { homedir } = require('os');

async function testParser() {
  console.log('═══════════════════════════════════════════════');
  console.log('   SKILL PARSER TEST');
  console.log('═══════════════════════════════════════════════\n');

  const skillsDir = join(homedir(), '.claude', 'skills');
  console.log(`Testing with skills from: ${skillsDir}\n`);

  // Test 1: Find all skills
  console.log('TEST 1: Find all skills');
  console.log('─────────────────────────────────────────────\n');

  try {
    const skills = await findAllSkills(skillsDir, { validate: false });
    console.log(`✅ Found ${skills.length} skills\n`);

    // Show first 5 skills
    console.log('First 5 skills:');
    skills.slice(0, 5).forEach((skill, index) => {
      console.log(`  ${index + 1}. ${skill.metadata.name}`);
      console.log(`     Path: ${skill.path}`);
      console.log(`     Keywords: ${skill.metadata.keywords.join(', ') || 'none'}`);
      console.log(`     Templates: ${skill.templates ? skill.templates.length : 0} files`);
      console.log();
    });
  } catch (error) {
    console.error('❌ Error finding skills:', error.message);
    return;
  }

  // Test 2: Parse specific skill with templates
  console.log('\n─────────────────────────────────────────────');
  console.log('TEST 2: Parse skill with templates (tailwind-v4-shadcn)');
  console.log('─────────────────────────────────────────────\n');

  try {
    const tailwindSkillPath = join(skillsDir, 'tailwind-v4-shadcn');
    const tailwindSkill = await parseSkill(tailwindSkillPath, { validate: false });

    console.log(`✅ Parsed: ${tailwindSkill.metadata.name}`);
    console.log(`   Description length: ${tailwindSkill.metadata.description.length} chars`);
    console.log(`   Keywords: ${tailwindSkill.metadata.keywords.join(', ')}`);
    console.log(`   Use when: ${tailwindSkill.metadata.useWhen ? 'Found' : 'Not found'}`);
    console.log(`   Templates: ${tailwindSkill.templates ? tailwindSkill.templates.length : 0} files`);

    if (tailwindSkill.templates && tailwindSkill.templates.length > 0) {
      console.log('\n   Template files:');
      tailwindSkill.templates.forEach((template) => {
        console.log(`     - ${template}`);
      });
    }
    console.log();
  } catch (error) {
    console.error('❌ Error parsing tailwind-v4-shadcn:', error.message);
  }

  // Test 3: Validation
  console.log('\n─────────────────────────────────────────────');
  console.log('TEST 3: Validate skills');
  console.log('─────────────────────────────────────────────\n');

  try {
    const skills = await findAllSkills(skillsDir, { validate: false });
    const testSkill = skills[0];

    if (testSkill) {
      const validation = await validateSkill(testSkill);
      console.log(`✅ Validation for: ${testSkill.metadata.name}`);
      console.log(`   Valid: ${validation.valid}`);
      console.log(`   Errors: ${validation.errors.length}`);
      console.log(`   Warnings: ${validation.warnings.length}`);

      if (validation.warnings.length > 0) {
        console.log('\n   Warnings:');
        validation.warnings.forEach((warning) => {
          console.log(`     - ${warning}`);
        });
      }
    }
  } catch (error) {
    console.error('❌ Error validating skill:', error.message);
  }

  // Test 4: Parse all with validation
  console.log('\n─────────────────────────────────────────────');
  console.log('TEST 4: Parse all skills with validation');
  console.log('─────────────────────────────────────────────\n');

  try {
    const skills = await findAllSkills(skillsDir, { validate: true });
    console.log(`✅ Successfully parsed and validated ${skills.length} skills\n`);
  } catch (error) {
    console.error('❌ Error during validation:', error.message);
  }

  console.log('═══════════════════════════════════════════════');
  console.log('   TEST COMPLETE');
  console.log('═══════════════════════════════════════════════');
}

// Run tests
testParser().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
