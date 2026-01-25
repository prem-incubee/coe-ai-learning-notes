# When NOT to Use AI

## Core Principle

The goal isn't to use AI as much as possible—it's to use it wisely. Knowing when to avoid AI is as important as knowing how to use it.

## 10 Times to Avoid AI

### 1. Security-Critical Code ❌
**Never**: Authentication, password hashing, crypto, access control

**Why**: AI suggests outdated/insecure patterns (MD5 instead of bcrypt)

**Do instead**: Use well-tested security libraries

### 2. Learning Fundamentals ❌
**Never**: When learning new languages, algorithms, or core concepts

**Why**: The struggle IS the learning. AI robs you of this.

**Rule**: 70% manual coding, 30% AI for review

### 3. Safety-Critical Systems ❌
**Never**: Medical devices, aviation, automotive safety, life support

**Why**: Lives at stake. Requires formal verification and domain experts.

### 4. Regulated/Compliance Code ❌
**Avoid**: Tax calculations, HIPAA data, GDPR features, audit trails

**Why**: Legal consequences for errors. Needs domain expertise.

### 5. Proprietary Algorithms ❌
**Never**: Trade secrets, patents, competitive advantage code

**Why**: IP ownership unclear, risk exposing secrets

### 6. Complex Debugging ❌
**Limited use**: Race conditions, memory corruption, intermittent bugs

**Why**: AI can't run debuggers or reproduce issues

### 7. Architectural Decisions ⚠️
**Don't let AI decide**: System design, tech stack, scalability

**Why**: Context matters - AI doesn't know your constraints

**OK for**: Research options, but you decide

### 8. Domain-Specific Logic ❌
**Avoid**: Specialized algorithms, scientific computing, expert rules

**Why**: AI lacks domain expertise

### 9. Production Data ❌
**Never**: Real customer data, production queries, live commands

**Why**: Privacy violations and mistake risks

### 10. When You Can't Explain It ❌
**Rule**: If you can't explain the code, don't use it

**Why**: "AI wrote it" isn't acceptable. You own the code.

## Learning vs Productivity

**Learning mode**: Do it manually first, struggle, debug yourself, then ask AI to review

**Productivity mode**: Use AI for boilerplate, review thoroughly, test completely

## Decision Framework

Before using AI, ask:
1. Is this security-critical? → No AI
2. Am I learning this? → Manual first
3. Could mistakes harm someone? → No AI
4. Is this regulated? → Be cautious
5. Is this proprietary IP? → No AI
6. Can I explain the output? → If no, don't use

## Signs of Over-Reliance

- Can't explain your own code
- Skill stagnation
- Can't debug without AI
- Interview struggles
- Blind copy-pasting

## The AI-Free Practice

**Do**: One day per week, code without AI. All learning tasks should be AI-free initially.

**Benefits**: Maintains skills, identifies gaps, builds confidence

## For Juniors

- Limit AI to 20-30% of time
- Attempt problems manually first
- Use AI to explain, not solve
- Must understand all code

## Key Takeaways

1. Security = No AI
2. Learning = Manual first
3. Safety = No AI
4. Understand before using
5. Context matters
6. AI is a tool, not a crutch
7. Regular AI-free practice

**Golden rule**: When in doubt, don't use AI. Your skills and code safety matter more than speed.
