# Day 2 Exercises

## Exercise 1: Spot the Security Issues

Review these scenarios and identify whether AI assistance is appropriate and why.

### Scenario 1: Password Hashing

```python
def hash_password(password: str) -> str:
    # Need to implement secure password hashing
    pass
```

**Should you use AI for this?**

<details>
<summary>Answer</summary>

**❌ No, never.**

- This is security-critical code
- AI might suggest weak methods (MD5, SHA1)
- Use established libraries like bcrypt or Argon2
- Consult security experts, not AI

</details>

### Scenario 2: File Upload Endpoint

```javascript
app.post('/upload', (req, res) => {
  const file = req.files.document;
  file.mv(`./uploads/${file.name}`);
  res.send('File uploaded!');
});
```

**What are the security risks?**

<details>
<summary>Answer</summary>

**Major risks**:
1. **Path traversal** - User controls filename completely (`../../etc/passwd`)
2. **No file type validation** - Can upload malicious files
3. **No size limits** - Disk exhaustion attack
4. **No authentication** - Anyone can upload
5. **No virus scanning** - Malware risk

**Fix**: Generate random filenames, validate file types, limit sizes, require authentication.

</details>

### Scenario 3: Learning Binary Search

```python
def binary_search(arr, target):
    # TODO: Implement for learning data structures
    pass
```

**Should you use AI?**

<details>
<summary>Answer</summary>

**❌ No, if you're learning.**

- Implementing it yourself builds understanding
- The struggle is part of learning
- AI robs you of the learning experience
- Use AI to review your solution after you've written it

</details>

---

## Exercise 2: PII Sanitization Practice

Rewrite these prompts to remove PII while maintaining usefulness.

### Prompt 1 (Original)

```
"Fix this SQL query:
SELECT * FROM users WHERE email IN
('john.doe@acme.com', 'jane.smith@acme.com', 'bob.jones@acme.com')"
```

**Your sanitized version:**

<details>
<summary>Sample Answer</summary>

```
"Fix this SQL query:
SELECT * FROM users WHERE email IN
('user1@example.com', 'user2@example.com', 'user3@example.com')"
```

**Changes**: Real emails → example.com addresses, company domain removed

</details>

### Prompt 2 (Original)

```
"Debug why this isn't working:
const apiKey = 'sk-proj-abc123def456';"
```

**Your sanitized version:**

<details>
<summary>Sample Answer</summary>

```
"Debug why this isn't working:
const apiKey = process.env.API_KEY; // actual key stored in env var"
```

**Better yet**: Don't share the key at all. Ask "How should I properly handle API keys?"

</details>

---

## Exercise 3: Case Study Analysis

**Scenario**: TechStartup's AI Mishap

A startup team used AI tools to speed up development:
- Developer A used Copilot for authentication (accepted weak password hashing)
- Developer B pasted patient data into ChatGPT to debug queries
- Developer C used AI for medical billing code without understanding it

They discovered:
1. Weak authentication (MD5 hashing)
2. HIPAA violation (PHI exposure)
3. Billing calculation errors
4. Possible GPL license violations

**Questions**:
1. What went wrong?
2. What are the consequences?
3. What should they have done differently?

<details>
<summary>Key Points</summary>

**What went wrong**:
- Used AI for security-critical code
- Shared PHI with external service
- Didn't understand AI-generated code
- No AI usage guidelines
- No code review process

**Consequences**:
- HIPAA violations (fines up to $1.5M per category)
- Security vulnerabilities
- Billing errors causing financial loss
- Potential legal action
- Loss of customer trust

**Should have done**:
- Never use AI for authentication
- Never share PHI with external services
- Require understanding of all code
- Implement AI usage guidelines
- Mandatory code reviews
- Security training

</details>

---

## Exercise 4: Create Your AI Guidelines

Draft a one-page AI usage guideline for your team (or a hypothetical team).

**Include**:
- Approved tools
- What's allowed / not allowed
- Data privacy rules
- Code review requirements
- Incident reporting process

**Template**:

```markdown
# [Your Team] AI Guidelines

## Approved Tools
- [List tools]

## When to Use AI
✅ Yes: [boilerplate, tests, docs]
❌ No: [security, PII, production data]

## Data Privacy
Never share: [credentials, customer data, proprietary code]

## Code Review
All AI code must: [be understood, pass review, include tests]

## If You Make a Mistake
1. [Stop using tool]
2. [Report to: ___]
3. [Document incident]

## Questions?
Contact: [___]
```

---

## Exercise 5: Appropriate vs Inappropriate AI Use

For each scenario, decide: ✅ Appropriate, ⚠️ Conditional, or ❌ Inappropriate

1. **Junior developer asks AI to build a todo app while learning React**
   - Your answer: ____
   - Reasoning: ____

2. **Senior developer uses AI to generate unit tests**
   - Your answer: ____
   - Reasoning: ____

3. **Developer uses AI to implement JWT verification**
   - Your answer: ____
   - Reasoning: ____

4. **Developer pastes customer emails into ChatGPT to test regex**
   - Your answer: ____
   - Reasoning: ____

<details>
<summary>Answers</summary>

1. **❌ Inappropriate** - Learning requires building it yourself. Use AI to review afterward.

2. **✅ Appropriate** - Good use case. Senior can verify test quality.

3. **❌ Inappropriate** - Security-critical. Use well-tested library.

4. **❌ Inappropriate - SERIOUS** - PII violation! Use user@example.com instead.

</details>

---

## Exercise 6: Bias Detection

Review this AI-generated code for bias:

```javascript
const employees = [
  { name: "John Smith", role: "CEO", age: 55 },
  { name: "Mary Johnson", role: "secretary", age: 28 },
  { name: "Bob Williams", role: "engineer", age: 30 }
];

function sendNotification(employee) {
  return `Notify ${employee.name} at his email`;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US');
}
```

**What biases do you see?**

<details>
<summary>Issues Found</summary>

**Biases**:
1. **Gender stereotypes** - CEO is male, secretary is female
2. **Age bias** - Specific age patterns (older CEO, younger secretary)
3. **Name diversity** - All Western names
4. **Pronoun assumption** - "his email" assumes male
5. **Locale assumption** - Hardcoded 'en-US' format

**Improvements**:
```javascript
const employees = [
  { name: "Amara Okafor", role: "CEO", age: 45, pronouns: "she/her" },
  { name: "Jordan Lee", role: "executive assistant", age: 32, pronouns: "they/them" },
  { name: "José García", role: "engineer", age: 28, pronouns: "he/him" }
];

function sendNotification(employee) {
  return `Notify ${employee.name} via email`;
}

function formatDate(date, locale = 'en-US') {
  return date.toLocaleDateString(locale);
}
```

</details>

---

## Reflection Questions

After completing these exercises:

1. **What security risk surprised you most?**

2. **Which scenario is most likely to happen at your company?**

3. **One change you'll make to your AI usage?**

4. **What guideline does your team need most urgently?**

5. **What would you do if you accidentally shared PII with AI?**

---

## Key Takeaways

- Security vulnerabilities in AI code are common
- PII protection requires constant vigilance
- Learning requires manual practice
- Safety-critical code should never use AI
- You're responsible for all code, AI or not
- Guidelines prevent costly mistakes

**Next step**: Put these learnings into practice. Review your recent AI-assisted code for issues discovered today.
